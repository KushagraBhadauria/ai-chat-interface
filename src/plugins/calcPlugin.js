import CalcCard from '../components/plugins/CalcCard.jsx';

const safeCalc = (expression) => {
    // Allow only basic math characters: numbers, operators, dots, parentheses
    const allowedChars = /^[0-9+\-*/().\s]+$/;
    if (!allowedChars.test(expression)) {
        throw new Error("Invalid characters in expression. Only numbers and +, -, *, /, (, ) are allowed.");
    }
    try {
        // Use Function constructor to evaluate the expression in a safe context
        const result = new Function(`"use strict"; return (${expression})`)();
        return result;
    } catch (error) {
        throw new Error("Invalid mathematical expression.");
    }
}

export const calcPlugin = {
  name: 'calc',
  command: 'calc',
  description: 'Evaluate a mathematical expression. Usage: /calc [expression]',
  execute: (args) => {
    // This plugin is synchronous, so we wrap it in Promise.resolve
    return new Promise((resolve, reject) => {
        if (!args) {
           reject(new Error('Please provide an expression. Usage: /calc [expression]'));
        }
        try {
            const result = safeCalc(args);
            resolve({ expression: args, result: result });
        } catch (error) {
            reject(error);
        }
    });
  },
  component: CalcCard,
};