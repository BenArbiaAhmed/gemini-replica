import {GoogleGenAI} from '@google/genai';


async function main(prompt) {
    const ai = new GoogleGenAI({
        apiKey: "Put API key here",
    });

    const tools = [
        {
            googleSearch: {}
        },
    ];

    const config = {
        thinkingConfig: {
            thinkingBudget: -1,
        },
        tools,
        responseMimeType: 'text/plain',
    };

    const model = 'gemini-2.5-pro';
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: prompt,
                },
            ],
        },
    ];

    const response = await ai.models.generateContentStream({
        model,
        config,
        contents,
    });

    let fullResponse = '';
    for await (const chunk of response) {
        console.log(chunk.text);
        fullResponse += chunk.text;
    }

    return fullResponse;
}

export default main;
