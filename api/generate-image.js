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
        
        // 使用Gemini 2.5 Flash Image Preview API
        const requestBody = {
            "contents": [
                {
                    "parts": [
                        {
                            "text": `请生成一张关于"${prompt}"的美食图片，要求：高清、专业摄影、餐厅菜品、精美摆盘、诱人的视觉效果`
                        }
                    ]
                }
            ]
        };
        
        console.log('Gemini API request body:', JSON.stringify(requestBody, null, 2));
        
        let geminiResponse;
        try {
            console.log('Making request to Gemini API...');
            
            geminiResponse = await fetch('https://ai.juguang.chat/v1beta/models/gemini-2.5-flash-image-preview:generateContent', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer sk-o4mIilLIlhQurOQ8TE1DhtCQYk7m4Q8sR0foh2JCvYzuDfHX',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            
            console.log('Gemini API request completed, status:', geminiResponse.status);
        } catch (fetchError) {
            console.error('Gemini API fetch error:', fetchError);
            console.log('Gemini API failed due to fetch error, using Unsplash as fallback');
            
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
        
        console.log('Gemini API response status:', geminiResponse.status);
        console.log('Gemini API response headers:', Object.fromEntries(geminiResponse.headers.entries()));
        
        if (!geminiResponse.ok) {
            const errorText = await geminiResponse.text();
            console.error('Gemini API error:', geminiResponse.status, errorText);
            console.error('Gemini API error details:', {
                status: geminiResponse.status,
                statusText: geminiResponse.statusText,
                headers: Object.fromEntries(geminiResponse.headers.entries()),
                body: errorText
            });
            
            // 如果Gemini API失败，使用Unsplash作为备用
            console.log('Gemini API failed, using Unsplash as fallback');
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
            
            return res.status(geminiResponse.status).json({ 
                error: `Gemini API error: ${geminiResponse.status} - ${errorText}` 
            });
        }
        
        const result = await geminiResponse.json();
        console.log('Gemini API response:', result);
        
        // Gemini API返回的是图片数据，需要解析响应
        if (result.candidates && result.candidates.length > 0) {
            const candidate = result.candidates[0];
            if (candidate.content && candidate.content.parts) {
                for (const part of candidate.content.parts) {
                    if (part.inlineData && part.inlineData.data) {
                        // Gemini返回的是base64编码的图片数据
                        const imageData = part.inlineData.data;
                        const mimeType = part.inlineData.mimeType || 'image/jpeg';
                        
                        console.log('Gemini API returned image data, mimeType:', mimeType);
                        
                        return res.status(200).json({
                            success: true,
                            data: [{
                                url: `data:${mimeType};base64,${imageData}`,
                                alt: prompt
                            }],
                            prompt: prompt,
                            source: 'gemini'
                        });
                    }
                }
            }
        }
        
        // 如果没有找到图片数据，使用Unsplash作为备用
        console.log('Gemini API did not return image data, using Unsplash as fallback');
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
            error: 'No images generated by Gemini or Unsplash' 
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
