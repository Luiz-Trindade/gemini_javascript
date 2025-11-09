// main.js

import { Agent } from "./core/agent.ts";

const agent = new Agent(
    "hello-agent",
    "um agente de exemplo",
    "system prompt",
    "gemini-2.5-flash-lite",
    [],
    1.0
);

(async () => {
    const result = await agent.execute({ userInput: "Olá, tudo bem?" });
    console.log(result);
})();
