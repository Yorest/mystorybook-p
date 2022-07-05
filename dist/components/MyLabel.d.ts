/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Is this the principal text for label
     */
    label: string;
    /**
     * How large should the label be?
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * it indicates if the text would be in uppercase
     */
    allCaps?: boolean;
    /**
     * it indicates the class color
     */
    color?: "primary" | "secondary" | "terciary";
    /**
     * it indicates the custom color
     */
    customColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, customColor }: MyLabelProps) => JSX.Element;
