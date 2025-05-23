export const parseMessage = (message) => {
  const slashCommandRegex = /^\/(\w+)\s*(.*)/;
  const match = message.trim().match(slashCommandRegex);

  if (match) {
    return {
      type: 'command',
      command: match[1].toLowerCase(),
      args: match[2].trim(),
    };
  }

  
  return {
    type: 'text',
    content: message,
  };
};