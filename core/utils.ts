// core/utils.ts

import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

export function _setupClient() {
    const ai = new GoogleGenAI({});
    return ai;
}

export function _convertToContent() {}

export function _formatTools() {}

export function _formatPrompt() {}
