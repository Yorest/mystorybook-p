// hacemos la importacion del componente
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

/* hacemos la exportacion por defecto indicando
    title (seria el lugar en el menu lateral del home) y component que deseamos exportar
*/

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
  },
} as ComponentMeta<typeof MyLabel>;

// una plantilla que es la construccion de nuestro componente
const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

// creamos las diferentes historias
// bind para crear una copia rompiendo la referencia de js con los objetos

export const Basic = Template.bind({});
// para establecer las props
Basic.args = {
  size: "normal",
  label: "Text-Normal",
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  label: "Text-Normal",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary",
};

export const Terciary = Template.bind({});
Terciary.args = {
  size: "normal",
  color: "terciary",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  size: "h1",
  customColor: "#5517ac",
};
