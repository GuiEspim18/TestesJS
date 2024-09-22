import Tag from "../Tag.js";

class Table extends Tag {
    constructor() {
        super("table");
        this.tag.style.borderCollapse = "collapse";
        this.tag.style.borderSpacing = 0;

        this.rowSettings = {
            padding: null,
            border: null,
            textColor: "#0f0f0f",
            textAlignment: "left",
            background: "transparent",
        };

        this.headerSettings = {
            padding: null,
            border: null,
            textColor: "#0f0f0f",
            textAlignment: "left",
            background: "#ccc",
        };

        // Store headers and rows for delayed rendering
        this.headers = [];
        this.rows = [];
        this.rendered = false;
    }

    // Methods to configure header and row settings
    setRowsPadding(padding) {
        this.rowSettings.padding = padding;
        if (this.rendered) this.applyStyles();
    }

    setRowsBorder(border) {
        this.rowSettings.border = border;
        if (this.rendered) this.applyStyles();
    }

    setRowsTextColor(color) {
        this.rowSettings.textColor = color;
        if (this.rendered) this.applyStyles();
    }

    setRowsTextAlignment(alignment) {
        this.rowSettings.textAlignment = alignment;
        if (this.rendered) this.applyStyles();
    }

    setRowsBackground(background) {
        this.rowSettings.background = background;
        if (this.rendered) this.applyStyles();
    }

    setHeadersPadding(padding) {
        this.headerSettings.padding = padding;
        if (this.rendered) this.applyStyles();
    }

    setHeadersBorder(border) {
        this.headerSettings.border = border;
        if (this.rendered) this.applyStyles();
    }

    setHeadersTextColor(color) {
        this.headerSettings.textColor = color;
        if (this.rendered) this.applyStyles();
    }

    setHeadersTextAlignment(alignment) {
        this.headerSettings.textAlignment = alignment;
        if (this.rendered) this.applyStyles();
    }

    setHeadersBackground(background) {
        this.headerSettings.background = background;
        if (this.rendered) this.applyStyles();
    }

    addHeader(headers) {
        this.headers = headers;
        if (this.rendered) this.renderHeaders();
    }

    addRow(cells) {
        this.rows.push(cells);
        if (this.rendered) this.renderRows();
    }

    renderHeaders() {
        // Remove existing thead if exists
        const existingThead = this.tag.querySelector("thead");
        if (existingThead) existingThead.remove();

        const thead = document.createElement("thead");
        const row = document.createElement("tr");

        this.headers.forEach(header => {
            const th = document.createElement("th");
            th.textContent = header;
            this.applyHeaderStyles(th);
            row.appendChild(th);
        });

        thead.appendChild(row);
        this.tag.appendChild(thead);
    }

    renderRows() {
        // Remove existing tbody if exists
        const existingTbody = this.tag.querySelector("tbody");
        if (existingTbody) existingTbody.remove();

        const tbody = document.createElement("tbody");

        this.rows.forEach(cells => {
            const row = document.createElement("tr");

            cells.forEach(cell => {
                const td = document.createElement("td");
                td.textContent = cell;
                this.applyRowStyles(td);
                row.appendChild(td);
            });

            tbody.appendChild(row);
        });

        this.tag.appendChild(tbody);
    }

    applyStyles() {
        this.renderHeaders();
        this.renderRows();
    }

    applyHeaderStyles(th) {
        if (typeof this.headerSettings.background === "string") {
            th.style.backgroundColor = this.headerSettings.background;
        } else if (typeof this.headerSettings.background === "object") {
            th.style.background = `linear-gradient(${this.headerSettings.background.angle}deg, ${this.headerSettings.background.color1.color} ${this.headerSettings.background.color1.percentage}%, ${this.headerSettings.background.color2.color} ${this.headerSettings.background.color2.percentage}%)`;
        }

        if (this.headerSettings.border) {
            this.applyBorder(th, this.headerSettings.border);
        }

        if (this.headerSettings.padding) {
            this.applyPadding(th, this.headerSettings.padding);
        }

        th.style.color = this.headerSettings.textColor;
        th.style.textAlign = this.headerSettings.textAlignment;
    }

    applyRowStyles(td) {
        if (typeof this.rowSettings.background === "string") {
            td.style.backgroundColor = this.rowSettings.background;
        } else if (typeof this.rowSettings.background === "object") {
            td.style.background = `linear-gradient(${this.rowSettings.background.angle}deg, ${this.rowSettings.background.color1.color} ${this.rowSettings.background.color1.percentage}%, ${this.rowSettings.background.color2.color} ${this.rowSettings.background.color2.percentage}%)`;
        }

        if (this.rowSettings.border) {
            this.applyBorder(td, this.rowSettings.border);
        }

        if (this.rowSettings.padding) {
            this.applyPadding(td, this.rowSettings.padding);
        }

        td.style.color = this.rowSettings.textColor;
        td.style.textAlign = this.rowSettings.textAlignment;
    }

    applyBorder(element, border) {
        switch(border.border) {
            case "top": 
                element.style.borderTop = `${border.type} ${border.size}px ${border.color}`;
                break;
            case "bottom": 
                element.style.borderBottom = `${border.type} ${border.size}px ${border.color}`;
                break;
            case "left": 
                element.style.borderLeft = `${border.type} ${border.size}px ${border.color}`;
                break;
            case "right": 
                element.style.borderRight = `${border.type} ${border.size}px ${border.color}`;
                break;
            case "horizontal": 
                element.style.borderLeft = `${border.type} ${border.size}px ${border.color}`;
                element.style.borderRight = `${border.type} ${border.size}px ${border.color}`;
                break;
            case "vertical": 
                element.style.borderTop = `${border.type} ${border.size}px ${border.color}`;
                element.style.borderBottom = `${border.type} ${border.size}px ${border.color}`;
                break;
            case "all": 
                element.style.border = `${border.type} ${border.size}px ${border.color}`; 
                break;
        }
    }

    applyPadding(element, padding) {
        switch(padding.padding) {
            case "top": 
                element.style.paddingTop = `${padding.size}px`;
                break;
            case "bottom": 
                element.style.paddingBottom = `${padding.size}px`;
                break;
            case "left": 
                element.style.paddingLeft = `${padding.size}px`;
                break;
            case "right": 
                element.style.paddingRight = `${padding.size}px`;
                break;
            case "horizontal": 
                element.style.paddingLeft = `${padding.size}px`;
                element.style.paddingRight = `${padding.size}px`;
                break;
            case "vertical": 
                element.style.paddingTop = `${padding.size}px`;
                element.style.paddingBottom = `${padding.size}px`;
                break;
            case "all": 
                element.style.padding = `${padding.size}px`; 
                break;
        }
    }

    // Method to render the entire table (called when all settings and data are ready)
    render() {
        this.renderHeaders();
        this.renderRows();
        this.rendered = true;
    }
}

export default Table;
