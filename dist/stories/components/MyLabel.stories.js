var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
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
};
// una plantilla que es la construccion de nuestro componente
var Template = function (args) { return (_jsx(MyLabel, __assign({}, args))); };
// creamos las diferentes historias
// bind para crear una copia rompiendo la referencia de js con los objetos
export var Basic = Template.bind({});
// para establecer las props
Basic.args = {
    size: "normal",
    label: "Text-Normal",
    allCaps: false,
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    size: "normal",
    label: "Text-Normal",
    allCaps: true,
};
export var Secondary = Template.bind({});
Secondary.args = {
    size: "normal",
    color: "secondary",
};
export var Terciary = Template.bind({});
Terciary.args = {
    size: "normal",
    color: "terciary",
};
export var CustomColor = Template.bind({});
CustomColor.args = {
    size: "h1",
    customColor: "#5517ac",
};
