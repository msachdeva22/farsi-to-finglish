// Function to walk through the DOM and replace Farsi text with Finglish
function walkDOM(node) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    console.log("Element Node:", node.tagName);
    if (node.tagName === "SCRIPT" || node.tagName === "STYLE") return;
  }

  if (node.nodeType === Node.TEXT_NODE) {
    console.log("Text Node (Before):", node.nodeValue);
    const farsiRegex = /[\u0600-\u06FF]/;
    if (farsiRegex.test(node.nodeValue)) {
      node.nodeValue = transliterateFarsiToFinglish(node.nodeValue);
      console.log("Text Node (After):", node.nodeValue);
    }
  }

  node.childNodes.forEach(walkDOM);
}

function transliterateFarsiToFinglish(text) {
  console.log("Input Text:", text);
  const farsiToFinglishMap = {
    0x0627: 'a', 0x0622: 'â', 0x0628: 'b', 0x067E: 'p', 0x062A: 't',
    0x062B: 's', 0x062C: 'j', 0x0686: 'č', 0x062D: 'h', 0x062E: 'x',
    0x062F: 'd', 0x0630: 'z', 0x0631: 'r', 0x0632: 'z', 0x0698: 'ž',
    0x0633: 's', 0x0634: 'š', 0x0635: 's', 0x0636: 'z', 0x0637: 't',
    0x0638: 'z', 0x0639: '\'', 0x063A: 'ġ', 0x0641: 'f', 0x0642: 'q',
    0x06A9: 'k', 0x06AF: 'g', 0x0644: 'l', 0x0645: 'm', 0x0646: 'n',
    0x0648: 'v', 0x0647: 'h', 0x06CC: 'y', 0x0626: '\'',
    0x0629: 'h', 0x064A: 'y', 0x06C1: 'h'
  };

  const normalizedText = text.normalize("NFC");
  const result = normalizedText
    .split("")
    .map((char) => {
      const unicode = char.charCodeAt(0);
      console.log(`Char: ${char}, Unicode: ${unicode}, Transliteration: ${farsiToFinglishMap[unicode] || char}`);
      return farsiToFinglishMap[unicode] || char;
    })
    .join("");

  console.log("Output Text:", result);
  return result;
}


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    walkDOM(document.body);
  });
} else {
  console.log("DOM already loaded");
  walkDOM(document.body);
}
