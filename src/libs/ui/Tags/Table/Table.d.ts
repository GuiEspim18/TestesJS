import { Border } from "../../Interfaces/Border";
import { Gradients } from "../../Interfaces/Gradient";
import { Padding } from "../../Interfaces/Padding";
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
    public setRowsPadding(padding: Padding): void;
    public setRowsBorder(border: Border): void;
    public setRowsTextColor(color: string): void;
    public setRowsTextAlignment(alignment: "left" | "center" | "right" | "justify"): void;
    public setRowsBackground(background: string | Gradients): void;

    // Funções universais de configuração para os cabeçalhos
    public setHeadersPadding(padding: Padding): void;
    public setHeadersBorder(border: Border): void;
    public setHeadersTextColor(color: string): void;
    public setHeadersTextAlignment(alignment: "left" | "center" | "right" | "justify"): void;
    public setHeadersBackground(background: string | Gradients): void;
}

export default Table;
