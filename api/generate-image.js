export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { dishName, language } = req.body;
    
    if (!dishName) {
        return res.status(400).json({ error: 'Dish name is required' });
    }

    try {
        // 构建提示词
        const prompt = `Professional food photography, ${dishName}, restaurant quality, high-end plating, white background, studio lighting, Hilton hotel style, elegant presentation, appetizing, delicious`;
        
        console.log('Generating image for:', dishName);
        console.log('Prompt:', prompt);

        // 调用Hugging Face API - 使用Stable Diffusion 2.1
        const response = await fetch(
            'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1',
            {
                headers: {
                    'Authorization': `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    inputs: prompt,
                    parameters: {
                        num_inference_steps: 20,
                        guidance_scale: 7.5,
                        width: 512,
                        height: 512
                    }
                })
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Hugging Face API error:', response.status, errorText);
            return res.status(500).json({ 
                error: 'Failed to generate image',
                details: errorText
            });
        }

        // 获取生成的图片
        const imageBuffer = await response.arrayBuffer();
        const base64Image = Buffer.from(imageBuffer).toString('base64');
        const imageUrl = `data:image/jpeg;base64,${base64Image}`;

        console.log('Image generated successfully for:', dishName);

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
            details: error.message 
        });
    }
}
