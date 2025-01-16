# farsi-to-finglish
A simple chrome extension containing code to change a page's content from the farsi alphabet to the english alphabet.

## How does it Work
The extension is primarily made of two documents. 
- content.js
- manifest.json

### Content.js
This file contains the major document processing and transformation logic.

The transformation has the following components
- a farsi to finglish mapping to map each character to an english alphabet
- a function that uses the finglish mapping to transliterate the page to finglish
- a walkDOM function to process the document of the page

The transliteration steps are as following:
- It normalizes the text in to unicode (this eliminates issues with font and rendering issues)
-  It then maps each character to the finglish alphabet contained within the mapping.
-  After the function transliterates the text, it then changes the page's text (node.nodeValue) to the result


In Farsi, vowels are often interpreted and may or may not be in the test. To simplify this extension: there is no additional AI to assist in vowel interpretation. It is ultimately up to the user to interpret the correct vowels

### Manifest.json
This document is required in order for chrome to compile the extension on your device. If you only want the extension enabled for certain urls, you can change settings within the manifest.json



