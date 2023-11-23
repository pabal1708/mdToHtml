const blockCode = `
\`\`\`js
e
e
e
\`\`\`
`;

const link = "[Duck Duck Go](https://duckduckgo.com)";

const list = `
- Example
- 1
- 2
- 3
- 4
- 5
`;

const tab = `
| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md]|
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |
`;

const scratch =
  "~~~Creando códigos de bloque. Puedes añadir tantas líneas y párrafos como quieras. ~~~";

const image = `![The Pug!](https://hips.hearstapps.com/hmg-prod/images/lonely-pug-royalty-free-image-1652974264.jpg "Imagen tomada de internet de un perrito")`;

const bold = `** Texto en negrita**`;
const mocks = {
  blockCode,
  link,
  list,
  tab,
  scratch,
  image,
  bold,
};
export default mocks;
