import mocks from "./markdown/mocks/MarkdownMocks";

const { blockCode, link, list, tab, scratch, image, bold } = mocks;
const elements = [
  { value: "", text: "Elige uno" },
  { value: "# Heading level 1", text: "H1" },
  { value: "## Heading level 2", text: "H2" },
  { value: "### Heading level 3", text: "H3" },
  { value: "#### Heading level 4", text: "H4" },
  { value: "##### Heading level 5", text: "H5" },
  { value: `${bold}`, text: "Texto Negrita" },
  { value: `${scratch}`, text: "Texto Tachado" },
  { value: `${blockCode}`, text: "Bloque de Codigo" },
  { value: `${link}`, text: "Link" },
  { value: `${list}`, text: "Lista" },
  { value: `${tab}`, text: "Tabla" },
  { value: `${image}`, text: "Imagen" },
];

export default elements;
