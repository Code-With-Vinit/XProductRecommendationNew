import data from "../data/responses.json";

export function getBotReply(input, step, context) {
  const key = input.toLowerCase();

  if (step === 0) {
    if (!data[key]) {
      return { text: "Sorry, I did not understand your query!" };
    }

    return {
      text: data[key].question,
      nextStep: 1,
      product: key
    };
  }

  if (step === 1) {
    const options = data[context.product]?.options[input];

    if (!options) {
      return { text: "Sorry, I did not understand your query!" };
    }

    return {
      text: "Here are your product suggestions:",
      suggestions: options,
      nextStep: 2
    };
  }

  return { text: "Sorry, I did not understand your query!" };
}
