export default async function handler(req, res) {
    // 添加CORS支持
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { dishName, language } = req.body;
    
    console.log('API called with:', { dishName, language });
    console.log('Environment check - Token exists:', !!process.env.HUGGINGFACE_TOKEN);
    
    if (!dishName) {
        return res.status(400).json({ error: 'Dish name is required' });
    }

    if (!process.env.HUGGINGFACE_TOKEN) {
        console.error('HUGGINGFACE_TOKEN not found in environment variables');
        return res.status(500).json({ 
            error: 'API configuration error',
            details: 'Hugging Face token not configured. Please set HUGGINGFACE_TOKEN environment variable.',
            debug: 'Environment variables: ' + JSON.stringify(process.env, null, 2)
        });
    }

    try {
        // 检测地理位置和网络条件
        const userAgent = req.headers['user-agent'] || '';
        const xForwardedFor = req.headers['x-forwarded-for'] || '';
        console.log('User location info:', { userAgent, xForwardedFor });
        
        // 构建提示词
        const prompt = `Professional food photography, ${dishName}, restaurant quality, high-end plating, white background, studio lighting, Hilton hotel style, elegant presentation, appetizing, delicious`;
        
        console.log('Generating image for:', dishName);
        console.log('Prompt:', prompt);
        console.log('Using token:', process.env.HUGGINGFACE_TOKEN.substring(0, 10) + '...');

        // 调用Hugging Face API - 使用更简单的参数，增加超时时间
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 25000); // 25秒超时
        
        const response = await fetch(
            'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1',
            {
                headers: {
                    'Authorization': `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    inputs: prompt
                }),
                signal: controller.signal
            }
        );
        
        clearTimeout(timeoutId);

        console.log('Hugging Face response status:', response.status);
        console.log('Hugging Face response headers:', Object.fromEntries(response.headers.entries()));

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Hugging Face API error:', response.status, errorText);
            return res.status(500).json({ 
                error: 'Failed to generate image',
                details: `API Error ${response.status}: ${errorText}`,
                status: response.status
            });
        }

        // 检查响应类型
        const contentType = response.headers.get('content-type');
        console.log('Response content type:', contentType);

        if (contentType && contentType.includes('application/json')) {
            // 如果返回的是JSON错误信息
            const errorData = await response.json();
            console.error('Hugging Face returned JSON error:', errorData);
            return res.status(500).json({ 
                error: 'Failed to generate image',
                details: JSON.stringify(errorData)
            });
        }

        // 获取生成的图片
        const imageBuffer = await response.arrayBuffer();
        console.log('Image buffer size:', imageBuffer.byteLength);
        
        if (imageBuffer.byteLength === 0) {
            return res.status(500).json({ 
                error: 'Empty image response',
                details: 'No image data received from API'
            });
        }

        const base64Image = Buffer.from(imageBuffer).toString('base64');
        const imageUrl = `data:image/jpeg;base64,${base64Image}`;

        console.log('Image generated successfully for:', dishName);
        console.log('Base64 length:', base64Image.length);

        res.json({
            success: true,
            imageUrl: imageUrl,
            dishName: dishName,
            language: language
        });

    } catch (error) {
        console.error('Error generating image:', error);
        console.error('Error stack:', error.stack);
        
        // 检查是否是网络超时错误
        if (error.name === 'AbortError') {
            return res.status(408).json({ 
                error: 'Request timeout',
                details: 'API request timed out. This may be due to network latency from your location (Hong Kong).',
                suggestion: 'Please try again or use the fallback image option.'
            });
        }
        
        // 检查是否是网络连接错误
        if (error.message.includes('fetch') || error.message.includes('network')) {
            return res.status(503).json({ 
                error: 'Network error',
                details: 'Unable to connect to Hugging Face API. This may be due to network restrictions in your region.',
                suggestion: 'Please try again or use the fallback image option.'
            });
        }
        
        res.status(500).json({ 
            error: 'Internal server error',
            details: error.message,
            stack: error.stack,
            type: error.name
        });
    }
}
