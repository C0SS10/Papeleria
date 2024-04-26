export const truncateText = (text: string | undefined) => {
  if (!text) {
    return "";
  }

  if (text.length < 25) {
    return text;
  }
  
  return text.substring(0, 25) + "...";
};
