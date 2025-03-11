import UUID from "../../UUID/UUID";
import { TBackgroundGradient } from "../Types/BackgroundGradientType";
import FontWeight from "../Types/FontWeight";
import { TFontWeight } from "../Types/FontWeightType";
import Measure from "../Types/Measure";
import { TMeasure } from "../Types/MeasureType";
import Position from "../Types/Position";
import { TPosition } from "../Types/PositionType";
import { TShadow } from "../Types/ShadowType";
import { TTextAlignment } from "../Types/TextAlignmentType";
import { TTimeMeasure } from "../Types/TimeMeasureType";
import { TTransition } from "../Types/TransitionType";

class Tag {

    private tag: HTMLElement;

    constructor(tag = "div", text = "") {
        this.setTag(tag);
        if (text.length > 0) {
            this.tag.textContent = String(text);
        }
    }

    setTag(tag: string) {
        this.tag = document.createElement(tag);
        this.tag.setAttribute("id", UUID.generate());
    }

    setText(text: string) {
        this.tag.textContent = String(text);
    }

    setFontWeight(fontWeight: TFontWeight) {
        this.tag.style.fontWeight = fontWeight as string;
    }

    load(): HTMLElement {
        return this.tag;
    }

    setBackgroundColor(color: string) {
        this.tag.style.backgroundColor = color;
    }

    setBackgroundImage(image: string) {
        this.tag.style.backgroundImage = `url('${image}')`;
    }

    setBackgroundSize(size: number, measure: TMeasure = Measure.PIXELS) {
        if (!isNaN(parseFloat(String(size))) && isFinite(size)) {
            this.tag.style.backgroundSize = String(this.formatMeasure(size, measure));
        } else {
            this.tag.style.backgroundSize = String(size);
        }
    }

    setBackgroundPosition(position: TPosition) {
        this.tag.style.backgroundPosition = position as string;
    }

    setBackgroundGradient(backgroundGradient: TBackgroundGradient) {        
        this.tag.style.background = `linear-gradient(${backgroundGradient.angle == null ? 90 : backgroundGradient.angle }deg, ${backgroundGradient.color1.color} ${backgroundGradient.color1.percentage}%, ${backgroundGradient.color2.color} ${backgroundGradient.color2.percentage}%)`;
    }

    setHeight(height: number, type: TMeasure = Measure.PIXELS) {
        this.tag.style.height = String(this.formatMeasure(height, type));
    }

    setWidth(width: number, type: TMeasure = Measure.PIXELS) {
        this.tag.style.width = String(this.formatMeasure(width, type));
    }

    setSize(size: number, type: TMeasure = Measure.PIXELS) {
        this.tag.style.width = String(this.formatMeasure(size, type));
        this.tag.style.height = String(this.formatMeasure(size, type));
    }

    setTextAlign(alignment: TTextAlignment) {
        this.tag.style.textAlign = alignment as string;
    }

    setTransition(transition: TTransition | "none") {
        if (transition === "none") {
            this.tag.style.transition = "none";
        } else {
            const transitionString = `${transition.property} ${this.formatTiming(transition.duration.value, transition.duration.measure)} ${transition.timingFunction} ${this.formatTiming(transition.delay.value, transition.delay.measure)}`;
            this.tag.style.transition = transitionString;
        }
    }

    setShadow(shadow: TShadow | "none") {
        if (shadow === "none") {
            this.tag.style.boxShadow = "none";
        } else {
            const shadowString = `${shadow.hOffset}px ${shadow.vOffset}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`;
            this.tag.style.boxShadow = shadow.inset ? `inset ${shadowString}` : shadowString;
        }
    }

    setBorder(border) {
        if (border == "none") {
            this.tag.style.border = "none"
        } else {
            if (border.radius > 0) {
                this.tag.style.borderRadius = this.formatMeasure(border.radius, border.measure);
            }
            this.tag.style.border = `${border.type} ${border.size}px ${border.color}`;
        }
    }

    setBorderLeft(border) {
        if (border == "none") {
            this.tag.style.borderLeft = "none";
        } else {
            if (border.radius > 0) {
                this.tag.style.borderTopLeftRadius = this.formatMeasure(border.radius, border.measure);
            }
            this.tag.style.borderLeft = `${border.type} ${border.width}px ${border.color}`;
        }
    }
    
    setBorderRight(border) {
        if (border == "none") {
            this.tag.style.borderRight = "none";
        } else {
            if (border.radius > 0) {
                this.tag.style.borderTopRightRadius = this.formatMeasure(border.radius, border.measure);
            }
            this.tag.style.borderRight = `${border.type} ${border.width}px ${border.color}`;
        }
    }
    
    setBorderTop(border) {
        if (border == "none") {
            this.tag.style.borderTop = "none";
        } else {
            if (border.radius > 0) {
                this.tag.style.borderTopLeftRadius = this.formatMeasure(border.radius, border.measure);
                this.tag.style.borderTopRightRadius = this.formatMeasure(border.radius, border.measure);
            }
            this.tag.style.borderTop = `${border.type} ${border.width}px ${border.color}`;
        }
    }
    
    setBorderBottom(border) {
        if (border == "none") {
            this.tag.style.borderBottom = "none";
        } else {
            if (border.radius > 0) {
                this.tag.style.borderBottomLeftRadius = this.formatMeasure(border.radius, border.measure);
                this.tag.style.borderBottomRightRadius = this.formatMeasure(border.radius, border.measure);
            }
            this.tag.style.borderBottom = `${border.type} ${border.width}px ${border.color}`;
        }
    }

    setBoxSizing(boxSizing) {
        this.tag.style.boxSizing = boxSizing;
    }

    setBorderRadius(radius, measure = "pixels") {
        this.tag.style.borderRadius = this.formatMeasure(radius, measure);
    }

    setBorderTopRadius(radius, measure = "pixels") {
        this.tag.style.borderTopLeftRadius = this.formatMeasure(radius, measure);
        this.tag.style.borderTopRighttRadius = this.formatMeasure(radius, measure);
    }

    setBorderBottomRadius(radius, measure = "pixels") {
        this.tag.style.borderBottomLeftRadius = this.formatMeasure(radius, measure);
        this.tag.style.borderBottomRightRadius = this.formatMeasure(radius, measure);
    }

    setBorderTopLeftRadius(radius, measure = "pixels") {
        this.tag.style.borderTopLeftRadius = this.formatMeasure(radius, measure);
    }

    setBorderTopRightRadius(radius, measure = "pixels") {
        this.tag.style.borderTopRightRadius = this.formatMeasure(radius, measure);
    }

    setBorderBottomLeftRadius(radius, measure = "pixels") {
        this.tag.style.borderBottomLeftRadius = this.formatMeasure(radius, measure);
    }

    setBorderBottomRightRadius(radius, measure = "pixels") {
        this.tag.style.borderBottomRightRadius = this.formatMeasure(radius, measure);
    }

    setFontFamily(font) {
        this.tag.style.fontFamily = font;
    }

    setFontColor(color) {
        this.tag.style.color = color;
    }

    setFontSize(size, type="pixels") {
        this.tag.style.fontSize = this.formatMeasure(size, type);
    }

    setCursor(cursor) {
        this.tag.style.cursor = cursor;
    }

    setPadding(padding, type="pixels") {
        this.tag.style.padding = this.formatMeasure(padding, type);
    }

    setPaddingHorizontal(padding, type="pixels") {
        this.tag.style.paddingLeft = this.formatMeasure(padding, type);
        this.tag.style.paddingRight = this.formatMeasure(padding, type);
    }

    setPaddingVertical(padding, type="pixels") {
        this.tag.style.paddingTop= this.formatMeasure(padding, type);
        this.tag.style.paddingBottom = this.formatMeasure(padding, type);
    }

    setPaddingLeft(padding, type="pixels") {
        this.tag.style.paddingLeft = this.formatMeasure(padding, type);
    }

    setPaddingBottom(padding, type="pixels") {
        this.tag.style.paddingBottom = this.formatMeasure(padding, type);
    }

    setPaddingTop(padding, type="pixels") {
        this.tag.style.paddingTop= this.formatMeasure(padding, type);
    }

    setPaddingRight(padding, type="pixels") {
        this.tag.style.paddingRight = this.formatMeasure(padding, type);
    }


    setMargin(margin, type = "pixels") {
        if (typeof(margin) == "object") {
            this.tag.style.margin = `${typeof(margin.y) == "string" ? "auto" : this.formatMeasure(margin.y, type)} ${typeof(margin.x) == "string" ? "auto" : this.formatMeasure(margin.x, type)}`;
        } else {
            this.tag.style.margin = this.formatMeasure(margin, type);
        }
    }
    
    setMarginHorizontal(margin, type = "pixels") {
        this.tag.style.marginLeft = this.formatMeasure(margin, type);
        this.tag.style.marginRight = this.formatMeasure(margin, type);
    }
    
    setMarginVertical(margin, type = "pixels") {
        this.tag.style.marginTop = this.formatMeasure(margin, type);
        this.tag.style.marginBottom = this.formatMeasure(margin, type);
    }
    
    setMarginLeft(margin, type = "pixels") {
        this.tag.style.marginLeft = this.formatMeasure(margin, type);
    }
    
    setMarginBottom(margin, type = "pixels") {
        this.tag.style.marginBottom = this.formatMeasure(margin, type);
    }
    
    setMarginTop(margin, type = "pixels") {
        this.tag.style.marginTop = this.formatMeasure(margin, type);
    }
    
    setMarginRight(margin, type = "pixels") {
        this.tag.style.marginRight = this.formatMeasure(margin, type);
    }
    

    setMaxWidth(maxWidth, type="pixels") {
        this.tag.style.maxWidth = this.formatMeasure(maxWidth, type);
    }

    setMaxHeight(maxHeight, type="pixels") {
        this.tag.style.maxHeight = this.formatMeasure(maxHeight, type);
    }

    show() {
        this.tag.style.display = "";
    }
    
    hide() {
        this.tag.style.display = "none";
    }

    setPosition(position) {
        this.tag.style.position = position;
    }

    setX(x, unit = "pixels") {
        this.tag.style.left = this.formatMeasure(x, unit);
    }

    setY(y, unit = "pixels") {
        this.tag.style.top = this.formatMeasure(y, unit);
    }

    setTransform(scale) {
        this.tag.style.transform = `scale(${scale})`;
    }

    setOpacity(opacity) {
        this.tag.style.opacity = opacity;
    }

    setDisplay(display) {
        this.tag.style.display = display;
    }

    setOverflow(overflow) {
        this.tag.style.overflow = overflow;
    }

    setFlexDirection(direction = "row") {
        this.tag.style.flexDirection = direction;
    }

    setJustifyContent(alignment = "flex-start") {
        this.tag.style.justifyContent = alignment;
    }

    setAlignItems(alignment = "stretch") {
        this.tag.style.alignItems = alignment;
    }

    setAlignContent(alignment = "stretch") {
        this.tag.style.alignContent = alignment;
    }

    setAlignSelf(alignment = "auto") {
        this.tag.style.alignSelf = alignment;
    }

    setFlexWrap(wrap = "nowrap") {
        this.tag.style.flexWrap = wrap;
    }

    setFlexGrow(grow = 0) {
        this.tag.style.flexGrow = grow;
    }
    
    setFlexShrink(shrink = 1) {
        this.tag.style.flexShrink = shrink;
    }
    
    setFlexBasis(basis = "auto") {
        this.tag.style.flexBasis = basis;
    }
    
    setFlex(flex = "0 1 auto") {
        this.tag.style.flex = flex;
    }

    // Content methods

    add(tag) {
        this.tag.appendChild(tag.load());
        return tag;
    }

    remove(tag) {
        this.tag.removeChild(tag.load());
    }

    removeAll() {
        while (this.tag.firstChild) {
            this.tag.removeChild(this.tag.firstChild);
        }
    }

    // attributes

    setName(name) {
        this.tag.setAttribute("name", name);
    }

    setId(id) {
        this.tag.setAttribute("id", id); 
    }

    // events

    onClick(event) {
        this.tag.addEventListener("click", event);
    }

    onDoubleClick(event) {
        this.tag.addEventListener("dblclick", event);
    }
    
    onMouseOver(event) {
        this.tag.addEventListener("mouseover", event);
    }
    
    onMouseOut(event) {
        this.tag.addEventListener("mouseout", event);
    }
    
    onMouseEnter(event) {
        this.tag.addEventListener("mouseenter", event);
    }
    
    onMouseLeave(event) {
        this.tag.addEventListener("mouseleave", event);
    }
    
    onMouseMove(event) {
        this.tag.addEventListener("mousemove", event);
    }
    
    onMouseDown(event) {
        this.tag.addEventListener("mousedown", event);
    }
    
    onMouseUp(event) {
        this.tag.addEventListener("mouseup", event);
    }
    
    // onKeyDown(event) {
    //     this.tag.addEventListener("keydown", event);
    // }
    
    // onKeyUp(event) {
    //     this.tag.addEventListener("keyup", event);
    // }
    
    // onKeyPress(event) {
    //     this.tag.addEventListener("keypress", event);
    // }
    
    // onFocus(event) {
    //     this.tag.addEventListener("focus", event);
    // }
    
    // onBlur(event) {
    //     this.tag.addEventListener("blur", event);
    // }
    
    // onChange(event) {
    //     this.tag.addEventListener("change", event);
    // }
    
    // onInput(event) {
    //     this.tag.addEventListener("input", event);
    // }
    
    // onSubmit(event) {
    //     this.tag.addEventListener("submit", event);
    // }
    
    // onScroll(event) {
    //     this.tag.addEventListener("scroll", event);
    // }
    
    onResize(event) {
        window.addEventListener("resize", event);
    }
    

    
    // Private methods

    private formatMeasure(value: number, type: TMeasure): string | number {
        switch (type) {
            case Measure.PIXELS: return value + "px";
            case Measure.PERCENT: return value + "%";
            case Measure.EM: return value + "em";
            case Measure.REM: return value + "rem";
            case Measure.AUTO: return "auto";
            default: return value; // Retorna o valor diretamente se não for reconhecido
        }
    }


    formatTiming(value: number, type: TTimeMeasure): string | number {
        switch (type) {
            case TimeMeasure.S: return value + "s";
            case TimeMeasure.MS: return value + "ms";
            default: return value;
        }
    }

}

export default Tag;