import Tag from "../Tag.js";

class Table extends Tag {
    constructor() {
        super("table");
    }

    addHeader(headers, headerColor = "#ccc") {
        const thead = document.createElement("thead");
        const row = document.createElement("tr");

        headers.forEach(header => {
            const th = document.createElement("th");
            th.textContent = header;
            th.style.backgroundColor = headerColor;
            row.appendChild(th);
        });

        thead.appendChild(row);
        this.tag.appendChild(thead);
    }

    addRow(cells, rowColor = "transparent") {
        const row = document.createElement("tr");
        row.style.backgroundColor = rowColor;

        cells.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            td.style.border = "1px solid #ccc";
            row.appendChild(td);
        });

        this.tag.appendChild(row);
    }

    setBorderColor(color) {
        this.tag.style.border = `1px solid ${color}`;
        this.tag.style.borderCollapse = "collapse";
    }

}

export default Table;
