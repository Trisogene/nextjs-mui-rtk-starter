export const copyToClipboard = (text: string) => {
  if (navigator?.clipboard?.writeText) {
    navigator.clipboard.writeText(text);
  } else if (document?.execCommand) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }
};
