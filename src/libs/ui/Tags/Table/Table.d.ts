import Tag from "../Tag";

/**
 * @class Table
 * @extends Tag
 */
declare class Table extends Tag {
    constructor();

    // Funções para adicionar linhas e cabeçalhos
    public addHeader(headers: Array<string>): void;
    public addRow(cells: Array<string>): void;

    // Funções universais de configuração para as linhas
    public setRowsPadding(padding: { padding: "top" | "bottom" | "left" | "right" | "horizontal" | "vertical" | "all", size: number }): void;
    public setRowsBorder(border: { border: "top" | "bottom" | "left" | "right" | "horizontal" | "vertical" | "all", size: number, color: string, type: "solid" | "dashed" | "dotted" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden" }): void;
    public setRowsTextColor(color: string): void;
    public setRowsTextAlignment(alignment: "left" | "center" | "right" | "justify"): void;
    public setRowsBackground(background: string | { color1: { color: string, percentage: number }, color2: { color: string, percentage: number }, angle: number }): void;

    // Funções universais de configuração para os cabeçalhos
    public setHeadersPadding(padding: { padding: "top" | "bottom" | "left" | "right" | "horizontal" | "vertical" | "all", size: number }): void;
    public setHeadersBorder(border: { border: "top" | "bottom" | "left" | "right" | "horizontal" | "vertical" | "all", size: number, color: string, type: "solid" | "dashed" | "dotted" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden" }): void;
    public setHeadersTextColor(color: string): void;
    public setHeadersTextAlignment(alignment: "left" | "center" | "right" | "justify"): void;
    public setHeadersBackground(background: string | { color1: { color: string, percentage: number }, color2: { color: string, percentage: number }, angle: number }): void;
}

export default Table;
