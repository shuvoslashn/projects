import { surpriseMePrompts } from './../constants';

export const getRendomPrompt = (prompt) => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if (randomPrompt === prompt) return getRendomPrompt(prompt);

    return randomPrompt;
};
