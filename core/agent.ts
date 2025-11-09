// core/agent.ts

import {
    _setupClient,
    _convertToContent,
    _formatPrompt,
    _formatTools,
} from "./utils.ts";

interface Agent {
    name?: string;
    description?: string;
    prompt?: string;
    model: string;
    tools?: any[];
    temperature?: number;
    maxTokens?: number;
    llm: any;
}

class Agent {
    constructor(
        name: string = "Default Agent",
        description: string = "An AI agent powered by Google GenAI",
        prompt: string = "You are a helpful assistant.",
        model: string,
        tools: any[] = [],
        temperature: number = 0.7,
        maxTokens: number = 3000
    ) {
        this.name = name;
        this.description = description;
        this.prompt = prompt;
        this.model = model;
        this.tools = tools;
        this.temperature = temperature;
        this.maxTokens = maxTokens;
        this.llm = _setupClient();
    }

    async execute({ userInput }: { userInput: string }) {
        const response: any = await this.llm.models.generateContent({
            model: this.model,
            contents: userInput,
            config: {
                system_instructions: this.prompt,
                tools: this.tools,
                temperature: this.temperature,
            },
        });
        return response.text;
    }
}

export { Agent };
