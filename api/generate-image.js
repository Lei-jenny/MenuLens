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
        console.log('Request body:', JSON.stringify(req.body, null, 2));
        
        // 使用聚光AI (Juguang AI) API生成图片
        console.log('Using Juguang AI API for image generation');
        
        const requestBody = {
            prompt: prompt,
            model: 'juguang-image-v1',
            size: '1024x1024',
            n: 1
        };
        
        console.log('聚光AI API request body:', JSON.stringify(requestBody, null, 2));
        
        let juguangResponse;
        try {
            juguangResponse = await fetch('https://api.juguang.chat/v1/images/generations', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer sk-o4mIilLIlhQurOQ8TE1DhtCQYk7m4Q8sR0foh2JCvYzuDfHX',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody),
                timeout: 30000 // 30秒超时
            });
        } catch (fetchError) {
            console.error('聚光AI API fetch error:', fetchError);
            console.log('聚光AI API failed due to fetch error, using Unsplash as fallback');
            
            // 直接使用Unsplash作为备用
            const unsplashResponse = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(prompt)}&per_page=3&orientation=landscape&order_by=relevant&client_id=YRtZM4GfSkIrBBbFBFlrDO98J91yjUBEhgxRx1yblA4`);
            
            if (unsplashResponse.ok) {
                const unsplashResult = await unsplashResponse.json();
                if (unsplashResult.results && unsplashResult.results.length > 0) {
                    const imageUrl = unsplashResult.results[0].urls.regular;
                    return res.status(200).json({
                        success: true,
                        data: [{
                            url: imageUrl,
                            alt: unsplashResult.results[0].alt_description || prompt
                        }],
                        prompt: prompt,
                        source: 'unsplash_fallback'
                    });
                }
            }
            
            return res.status(500).json({ 
                error: `聚光AI API fetch failed: ${fetchError.message}` 
            });
        }
        
        console.log('聚光AI API response status:', juguangResponse.status);
        console.log('聚光AI API response headers:', Object.fromEntries(juguangResponse.headers.entries()));
        
        if (!juguangResponse.ok) {
            const errorText = await juguangResponse.text();
            console.error('聚光AI API error:', juguangResponse.status, errorText);
            console.error('聚光AI API error details:', {
                status: juguangResponse.status,
                statusText: juguangResponse.statusText,
                headers: Object.fromEntries(juguangResponse.headers.entries()),
                body: errorText
            });
            
            // 如果聚光AI API失败，使用Unsplash作为备用
            console.log('聚光AI API failed, using Unsplash as fallback');
            const unsplashResponse = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(prompt)}&per_page=3&orientation=landscape&order_by=relevant&client_id=YRtZM4GfSkIrBBbFBFlrDO98J91yjUBEhgxRx1yblA4`);
            
            if (unsplashResponse.ok) {
                const unsplashResult = await unsplashResponse.json();
                if (unsplashResult.results && unsplashResult.results.length > 0) {
                    const imageUrl = unsplashResult.results[0].urls.regular;
                    return res.status(200).json({
                        success: true,
                        data: [{
                            url: imageUrl,
                            alt: unsplashResult.results[0].alt_description || prompt
                        }],
                        prompt: prompt,
                        source: 'unsplash_fallback'
                    });
                }
            }
            
            return res.status(juguangResponse.status).json({ 
                error: `聚光AI API error: ${juguangResponse.status} - ${errorText}` 
            });
        }
        
        const result = await juguangResponse.json();
        console.log('聚光AI API response:', result);
        
        if (!result.data || result.data.length === 0) {
            return res.status(500).json({ 
                error: 'No images generated by 聚光AI API' 
            });
        }
        
        console.log('Image generated successfully by 聚光AI API');
        
        res.status(200).json({
            success: true,
            data: result.data,
            prompt: prompt,
            source: 'juguang'
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
