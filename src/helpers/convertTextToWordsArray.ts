export const convertStringToWordArray = (text: string) => {
  // Split the string into an array of words
  const wordsArray = text.split(" ");

  // Map over the words array to create an array of word objects
  const words = wordsArray.map((word: string) => {
    return { text: word };
  });
  return words;
};
