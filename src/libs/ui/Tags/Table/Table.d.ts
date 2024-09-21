import Tag from "../Tag";

/**
 * @class Table
 * @extends Tag
 */
declare class Table extends Tag {
    constructor() {
    }

    /**
     * Adiciona um cabeçalho à tabela.
     * @param {Array<string>} headers - Os cabeçalhos da tabela.
     * @param {string | { color1: { color: string, percentage: number }, color2: { color: string, percentage: number }, angle: number }} background - A cor de fundo do cabeçalho.
     */

    public addHeader(headers: Array<any>, background: String | { color1: { color: string, percentage: number }, color2: { color: string, percentage: number }, angle: number }): void;

    /**
     * Adiciona uma linha à tabela.
     * @param {Array<string>} cells - O conteúdo da linha.
     * @param {string | { color1: { color: string, percentage: number }, color2: { color: string, percentage: number }, angle: number }} background - A cor de fundo das células.
     */

    public addRow(cells: Array<any>, background: String | { color1: { color: string, percentage: number }, color2: { color: string, percentage: number }, angle: number }): void;
}

export default Table;