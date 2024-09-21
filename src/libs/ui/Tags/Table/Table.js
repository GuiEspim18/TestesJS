import Tag from "../Tag.js";

class Table extends Tag {
    constructor() {
        super("table");
    }

    addHeader(headers, background = "#ccc") {
        const thead = document.createElement("thead");
        const row = document.createElement("tr");

        headers.forEach(header => {
            const th = document.createElement("th");
            th.textContent = header;
            if (typeof(background) == "string") {
                
            }
            th.style.backgroundColor = background;
            row.appendChild(th);
        });

        thead.appendChild(row);
        this.tag.appendChild(thead);
    }

    addRow(cells, background = "transparent") {
        const row = document.createElement("tr");
        row.style.backgroundColor = background;

        cells.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            if (typeof(background) == "string") {
                
            }
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
