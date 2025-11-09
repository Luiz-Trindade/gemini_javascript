# 🤖 Gemini Agent Core

A simplified, robust agent class written in TypeScript, designed to encapsulate the configuration and interaction logic with the Google Gemini API using the official `@google/genai` library.

---

## 🚀 Technologies Used

This project leverages the following core technologies.

| Technology | Description | Shield |
| :--- | :--- | :--- |
| **Bun** | Fast all-in-one JavaScript runtime, package manager, and bundler. | [![Bun](https://img.shields.io/badge/runtime-Bun-black?style=for-the-badge&logo=bun)](https://bun.sh/) |
| **TypeScript** | Superset of JavaScript that adds static typing. | [![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/) |
| **Google GenAI** | Official SDK for interacting with the Gemini API. | [![Google GenAI](https://img.shields.io/badge/API-Google%20GenAI-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev/gemini-api/docs/api-key) |
| **dotenv** | Environment variable management for API keys (used implicitly by Bun or explicitly via `dotenv/config`). | [![dotenv](https://img.shields.io/badge/config-dotenv-EEC11A?style=for-the-badge&logo=dotenv)](https://github.com/motdotla/dotenv) |

---

## 📦 Installation

This project uses **Bun** as the package manager and runtime.

### Prerequisites

* Bun (v1.3.2 or later recommended)
* A **Gemini API Key** (obtained from Google AI Studio).

### Setup

1.  **Clone the repository:**
    ```bash
    git clone your-repository-url
    cd gemini_javascript
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

3.  **Configure Environment Variables:**
    Create a file named **`.env`** in the root directory and add your API key.

    ```dotenv
    # .env
    GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"
    ```

---

## 💻 Usage

The core logic is encapsulated in the `Agent` class (`core/agent.ts`).

### Running the Example

Execute the main example file (`main.js`):

```bash
bun run main.js
````

### Agent Class Overview

The `Agent` class simplifies the interaction with the Gemini API by managing configuration like the model, system prompt, and temperature.

**`core/agent.ts`** (Simplified Structure)

```typescript
class Agent {
    constructor(
        name: string,
        description: string,
        prompt: string,
        model: string, // e.g., "gemini-2.5-flash-lite"
        // ... other params
    ) { /* ... */ }

    async execute({ userInput }: { userInput: string }): Promise<string> {
        // Sends the request to the Gemini API
        // using the agent's pre-defined configuration.
    }
}
```

**Example Usage (`main.js`)**

```javascript
import { Agent } from "./core/agent.ts";

const agent = new Agent(
    "hello-agent",
    "um agente de exemplo", // Example description
    "system prompt",
    "gemini-2.5-flash-lite",
    [],
    1.0
);

(async () => {
    // Execute the model with the user's input
    const result = await agent.execute({ userInput: "Olá, tudo bem?" });
    console.log(result);
})();
```# gemini_javascript
