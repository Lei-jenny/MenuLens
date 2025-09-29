export default async function handler(req, res) {
    // 设置CORS头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // 处理预检请求
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    // 只允许POST请求
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    try {
        console.log('Received request:', req.body);
        
        const { prompt, model, size, quality, style, n } = req.body;
        
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }
        
        console.log('Generating image with prompt:', prompt);
        
        // 使用聚光AI API
        const juguangResponse = await fetch('https://api.juguang.chat/v1/images/generations', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer sk-o4mIilLIlhQurOQ8TE1DhtCQYk7m4Q8sR0foh2JCvYzuDfHX',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: prompt,
                model: model || 'juguang-image-v1',
                size: size || '1024x1024',
                quality: quality || 'hd',
                style: style || 'photographic',
                n: n || 1
            })
        });
        
        if (!juguangResponse.ok) {
            const errorText = await juguangResponse.text();
            console.error('聚光AI API error:', juguangResponse.status, errorText);
            return res.status(juguangResponse.status).json({ 
                error: `聚光AI API error: ${juguangResponse.status} - ${errorText}` 
            });
        }
        
        const result = await juguangResponse.json();
        console.log('聚光AI response:', result);
        
        if (!result.data || result.data.length === 0) {
            return res.status(500).json({ 
                error: 'No images generated' 
            });
        }
        
        console.log('Image generated successfully');
        
        res.status(200).json({
            success: true,
            data: result.data,
            prompt: prompt
        });
        
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ 
            error: `Server error: ${error.message}`,
            stack: error.stack,
            name: error.name
        });
    }
}
