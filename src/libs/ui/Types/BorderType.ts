import { TSize } from "./SizeType";
import { TMeasure } from "./MeasureType";

export type TBorder = {
    border: "top" | "bottom" | "left" | "right" | "horizontal" | "vertical" | "all", 
    size: {
        value: number,
        measure?: TMeasure
    }, 
    color: string,
    type: "solid" | "dashed" | "dotted" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden",
    radius?: TSize
};