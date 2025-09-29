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

    // 优先使用环境变量，如果没有则使用硬编码token（仅用于测试）
    const token = process.env.HUGGINGFACE_TOKEN || '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';
    
    if (!token) {
        console.error('No Hugging Face token available');
        return res.status(500).json({ 
            error: 'API configuration error',
            details: 'Hugging Face token not configured'
        });
    }

    try {
        // 构建提示词
        const prompt = `Professional food photography, ${dishName}, restaurant quality, high-end plating, white background, studio lighting, Hilton hotel style, elegant presentation, appetizing, delicious`;
        
        console.log('Generating image for:', dishName);
        console.log('Prompt:', prompt);
        console.log('Using token:', token.substring(0, 10) + '...');

        // 调用Hugging Face API - 使用更简单的参数
        const response = await fetch(
            'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1',
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    inputs: prompt
                })
            }
        );

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
        res.status(500).json({ 
            error: 'Internal server error',
            details: error.message,
            stack: error.stack
        });
    }
}
