export interface Border {
    border: "top" | "bottom" | "left" | "right" | "horizontal" | "vertical" | "all", 
    size: number, 
    color: string,
    type: "solid" | "dashed" | "dotted" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden",
    measure?: string
}