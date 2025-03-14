import UUID from "../../UUID/UUID";
import { TBackgroundGradient } from "../Types/BackgroundGradientType";
import { TSize } from "../Types/SizeType";
import { TBorder } from "../Types/BorderType";
import { TBoxSizing } from "../Types/BoxSizingType";
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
import { TCursor } from "../Types/CursorType";
import { TDisplay } from "../Types/DisplayType";
import { TOverflow } from "../Types/OverflowType";
import { TFlexDirection } from "../Types/FlexDirectionType";
import { TJustifyContent } from "../Types/JustifyContentType";
import { TAlignItems } from "../Types/AlignItemsType";
import { TAlignContent } from "../Types/AlignContentType";
import { TAlignSelf } from "../Types/AlignSelfType";
import { TFlexWrap } from "../Types/FlexWrapType";
import ElementNS from "./ElementNS/ElementNS";

class Tag {

    protected tag: HTMLElement;

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
            const transitionString = `${transition.property} ${this.formatTiming(transition.duration.value, transition.duration.measure == null ? TimeMeasure.S : transition.duration.measure)} ${transition.timingFunction} ${transition.delay != null ? this.formatTiming(transition.delay.value, transition.duration.measure == null ? TimeMeasure.S : transition.duration.measure) : ""}`;
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

    setBorder(border: TBorder | "none") {
        if (border == "none") {
            this.tag.style.border = "none"
        } else {
            if (border.radius) {
                this.tag.style.borderRadius = String(this.formatMeasure(border.radius.value, border.radius.measure == null ? Measure.PIXELS : border.radius.measure));
            }
            this.tag.style.border = `${border.type} ${this.formatMeasure(border.size.value, border.size.measure == null ?  Measure.PIXELS : border.size.measure)} ${border.color}`;
        }
    }

    setBorderLeft(border: TBorder | "none") {
        if (border == "none") {
            this.tag.style.borderLeft = "none";
        } else {
            if (border.radius) {
                this.tag.style.borderTopLeftRadius = String(this.formatMeasure(border.radius.value, border.radius.measure == null ? Measure.PIXELS : border.radius.measure));
            }
            this.tag.style.borderLeft = `${border.type} ${this.formatMeasure(border.size.value, border.size.measure == null ?  Measure.PIXELS : border.size.measure)} ${border.color}`;
        }
    }
    
    setBorderRight(border: TBorder | "none") {
        if (border == "none") {
            this.tag.style.borderRight = "none";
        } else {
            if (border.radius) {
                this.tag.style.borderTopRightRadius = String(this.formatMeasure(border.radius.value, border.radius.measure == null ? Measure.PIXELS : border.radius.measure));
            }
            this.tag.style.borderRight = `${border.type} ${this.formatMeasure(border.size.value, border.size.measure == null ?  Measure.PIXELS : border.size.measure)} ${border.color}`;
        }
    }
    
    setBorderTop(border: TBorder | "none") {
        if (border == "none") {
            this.tag.style.borderTop = "none";
        } else {
            if (border.radius) {
                this.tag.style.borderTopLeftRadius = String(this.formatMeasure(border.radius.value, border.radius.measure == null ? Measure.PIXELS : border.radius.measure));
                this.tag.style.borderTopRightRadius = String(this.formatMeasure(border.radius.value, border.radius.measure == null ? Measure.PIXELS : border.radius.measure));
            }
            this.tag.style.borderTop = `${border.type} ${this.formatMeasure(border.size.value, border.size.measure == null ?  Measure.PIXELS : border.size.measure)} ${border.color}`;
        }
    }
    
    setBorderBottom(border: TBorder | "none") {
        if (border == "none") {
            this.tag.style.borderBottom = "none";
        } else {
            if (border.radius) {
                this.tag.style.borderBottomLeftRadius = String(this.formatMeasure(border.radius.value, border.radius.measure == null ? Measure.PIXELS : border.radius.measure));
                this.tag.style.borderBottomRightRadius = String(this.formatMeasure(border.radius.value, border.radius.measure == null ? Measure.PIXELS : border.radius.measure));
            }
            this.tag.style.borderBottom = `${border.type} ${this.formatMeasure(border.size.value, border.size.measure == null ?  Measure.PIXELS : border.size.measure)} ${border.color}`;
        }
    }

    setBoxSizing(boxSizing: TBoxSizing) {
        this.tag.style.boxSizing = boxSizing as string;
    }

    setBorderRadius(borderRadius: TSize) {
        this.tag.style.borderRadius = String(this.formatMeasure(borderRadius.value, borderRadius.measure == null ? Measure.PIXELS : borderRadius.measure));
    }

    setBorderTopRadius(borderRadius: TSize) {
        this.tag.style.borderTopLeftRadius = String(this.formatMeasure(borderRadius.value, borderRadius.measure == null ? Measure.PIXELS : borderRadius.measure));
        this.tag.style.borderTopRightRadius = String(this.formatMeasure(borderRadius.value, borderRadius.measure == null ? Measure.PIXELS : borderRadius.measure));
    }

    setBorderBottomRadius(borderRadius: TSize) {
        this.tag.style.borderBottomLeftRadius = String(this.formatMeasure(borderRadius.value, borderRadius.measure == null ? Measure.PIXELS : borderRadius.measure));
        this.tag.style.borderBottomRightRadius = String(this.formatMeasure(borderRadius.value, borderRadius.measure == null ? Measure.PIXELS : borderRadius.measure));
    }

    setBorderTopLeftRadius(borderRadius: TSize) {
        this.tag.style.borderTopLeftRadius = String(this.formatMeasure(borderRadius.value, borderRadius.measure == null ? Measure.PIXELS : borderRadius.measure));
    }

    setBorderTopRightRadius(borderRadius: TSize) {
        this.tag.style.borderTopRightRadius = String(this.formatMeasure(borderRadius.value, borderRadius.measure == null ? Measure.PIXELS : borderRadius.measure));
    }

    setBorderBottomLeftRadius(borderRadius: TSize) {
        this.tag.style.borderBottomLeftRadius = String(this.formatMeasure(borderRadius.value, borderRadius.measure == null ? Measure.PIXELS : borderRadius.measure));
    }

    setBorderBottomRightRadius(borderRadius: TSize) {
        this.tag.style.borderBottomRightRadius =  String(this.formatMeasure(borderRadius.value, borderRadius.measure == null ? Measure.PIXELS : borderRadius.measure));
    }

    setFontFamily(font: string) {
        this.tag.style.fontFamily = font;
    }

    setFontColor(color: string) {
        this.tag.style.color = color;
    }

    setFontSize(size: TSize) {
        this.tag.style.fontSize = String(this.formatMeasure(size.value, size.measure == null ? Measure.PIXELS : size.measure));
    }

    setCursor(cursor: TCursor) {
        this.tag.style.cursor = cursor as string;
    }

    setPadding(padding: TSize) {
        this.tag.style.padding = String(this.formatMeasure(padding.value, padding.measure == null ? Measure.PIXELS : padding.measure));
    }

    setPaddingHorizontal(padding: TSize) {
        this.tag.style.paddingLeft = String(this.formatMeasure(padding.value, padding.measure == null ? Measure.PIXELS : padding.measure));
        this.tag.style.paddingRight = String(this.formatMeasure(padding.value, padding.measure == null ? Measure.PIXELS : padding.measure));
    }

    setPaddingVertical(padding: TSize) {
        this.tag.style.paddingTop= String(this.formatMeasure(padding.value, padding.measure == null ? Measure.PIXELS : padding.measure));
        this.tag.style.paddingBottom =String(this.formatMeasure(padding.value, padding.measure == null ? Measure.PIXELS : padding.measure));
    }

    setPaddingLeft(padding: TSize) {
        this.tag.style.paddingLeft =String(this.formatMeasure(padding.value, padding.measure == null ? Measure.PIXELS : padding.measure));
    }

    setPaddingBottom(padding: TSize) {
        this.tag.style.paddingBottom =String(this.formatMeasure(padding.value, padding.measure == null ? Measure.PIXELS : padding.measure));
    }

    setPaddingTop(padding: TSize) {
        this.tag.style.paddingTop=String(this.formatMeasure(padding.value, padding.measure == null ? Measure.PIXELS : padding.measure));
    }

    setPaddingRight(padding: TSize) {
        this.tag.style.paddingRight =String(this.formatMeasure(padding.value, padding.measure == null ? Measure.PIXELS : padding.measure));
    }


    setMargin(margin: TSize) {
        this.tag.style.margin = String(this.formatMeasure(margin.value, margin.measure == null ? Measure.PIXELS : margin.measure));
    }
    
    setMarginHorizontal(margin: TSize) {
        this.tag.style.marginLeft = String(this.formatMeasure(margin.value, margin.measure == null ? Measure.PIXELS : margin.measure));
        this.tag.style.marginRight = String(this.formatMeasure(margin.value, margin.measure == null ? Measure.PIXELS : margin.measure));
    }
    
    setMarginVertical(margin: TSize) {
        this.tag.style.marginTop = String(this.formatMeasure(margin.value, margin.measure == null ? Measure.PIXELS : margin.measure));
        this.tag.style.marginBottom = String(this.formatMeasure(margin.value, margin.measure == null ? Measure.PIXELS : margin.measure));
    }
    
    setMarginLeft(margin: TSize) {
        this.tag.style.marginLeft = String(this.formatMeasure(margin.value, margin.measure == null ? Measure.PIXELS : margin.measure));
    }
    
    setMarginBottom(margin: TSize) {
        this.tag.style.marginBottom = String(this.formatMeasure(margin.value, margin.measure == null ? Measure.PIXELS : margin.measure));
    }
    
    setMarginTop(margin: TSize) {
        this.tag.style.marginTop = String(this.formatMeasure(margin.value, margin.measure == null ? Measure.PIXELS : margin.measure));
    }
    
    setMarginRight(margin: TSize) {
        this.tag.style.marginRight = String(this.formatMeasure(margin.value, margin.measure == null ? Measure.PIXELS : margin.measure));
    }
    

    setMaxWidth(maxWidth: TSize) {
        this.tag.style.maxWidth = String(this.formatMeasure(maxWidth.value, maxWidth.measure == null ? Measure.PIXELS : maxWidth.measure));
    }

    setMaxHeight(maxHeight: TSize) {
        this.tag.style.maxHeight = String(this.formatMeasure(maxHeight.value, maxHeight.measure == null ? Measure.PIXELS : maxHeight.measure));
    }

    show() {
        this.tag.style.display = "";
    }
    
    hide() {
        this.tag.style.display = "none";
    }

    setPosition(position: TPosition) {
        this.tag.style.position = position as string;
    }

    setX(x: TSize) {
        this.tag.style.left = String(this.formatMeasure(x.value, x.measure == null ? Measure.PIXELS : x.measure));
    }

    setY(y: TSize) {
        this.tag.style.top = String(this.formatMeasure(y.value, y.measure == null ? Measure.PIXELS : y.measure));
    }

    setTransform(scale: number) {
        this.tag.style.transform = `scale(${scale})`;
    }

    setOpacity(opacity: number) {
        this.tag.style.opacity = String(opacity);
    }

    setDisplay(display: TDisplay) {
        this.tag.style.display = display as string;
    }

    setOverflow(overflow: TOverflow) {
        this.tag.style.overflow = overflow as string;
    }

    setFlexDirection(direction: TFlexDirection) {
        this.tag.style.flexDirection = direction as string;
    }

    setJustifyContent(justifyContent: TJustifyContent) {
        this.tag.style.justifyContent = justifyContent as string;
    }

    setAlignItems(alignItems: TAlignItems) {
        this.tag.style.alignItems = alignItems as string;
    }

    setAlignContent(alignContent: TAlignContent) {
        this.tag.style.alignContent = alignContent as string;
    }

    setAlignSelf(alingSelf: TAlignSelf) {
        this.tag.style.alignSelf = alingSelf as string;
    }

    setFlexWrap(flexWrap: TFlexWrap) {
        this.tag.style.flexWrap = flexWrap as string;
    }

    setFlexGrow(grow: number) {
        this.tag.style.flexGrow = String(grow);
    }
    
    setFlexShrink(shrink: number) {
        this.tag.style.flexShrink = String(shrink);
    }
    
    setFlexBasis(basis: TSize | "none" | "auto") {
        if (basis != "none" && basis != "auto") {
            this.tag.style.flexBasis = String(this.formatMeasure(basis.value, basis.measure == null ? Measure.PIXELS : basis.measure));
        } else {
            this.tag.style.flexBasis = basis;
        }
    }
    
    setFlex(flex: string = "0 1 auto") {
        this.tag.style.flex = flex;
    }

    // Content methods

    add(tag: Tag | ElementNS): Tag | ElementNS {
        this.tag.appendChild(tag.load());
        return tag;
    }

    remove(tag: Tag) {
        this.tag.removeChild(tag.load());
    }

    removeAll() {
        while (this.tag.firstChild) {
            this.tag.removeChild(this.tag.firstChild);
        }
    }

    // attributes

    setName(name: string) {
        this.tag.setAttribute("name", name);
    }

    setId(id: string) {
        this.tag.setAttribute("id", id); 
    }

    // events

    onClick(event: (...args: any[]) => any) {
        this.tag.addEventListener("click", event);
    }

    onDoubleClick(event: (...args: any[]) => any) {
        this.tag.addEventListener("dblclick", event);
    }
    
    onMouseOver(event: (...args: any[]) => any) {
        this.tag.addEventListener("mouseover", event);
    }
    
    onMouseOut(event: (...args: any[]) => any) {
        this.tag.addEventListener("mouseout", event);
    }
    
    onMouseEnter(event: (...args: any[]) => any) {
        this.tag.addEventListener("mouseenter", event);
    }
    
    onMouseLeave(event: (...args: any[]) => any) {
        this.tag.addEventListener("mouseleave", event);
    }
    
    onMouseMove(event: (...args: any[]) => any) {
        this.tag.addEventListener("mousemove", event);
    }
    
    onMouseDown(event: (...args: any[]) => any) {
        this.tag.addEventListener("mousedown", event);
    }
    
    onMouseUp(event: (...args: any[]) => any) {
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
    
    onResize(event: (...args: any[]) => any) {
        window.addEventListener("resize", event);
    }
    

    
    // Private methods

    protected formatMeasure(value: number, type: TMeasure): string | number {
        switch (type) {
            case Measure.PIXELS: return value + "px";
            case Measure.PERCENT: return value + "%";
            case Measure.EM: return value + "em";
            case Measure.REM: return value + "rem";
            case Measure.AUTO: return "auto";
            default: return value; // Retorna o valor diretamente se não for reconhecido
        }
    }


    protected formatTiming(value: number, type: TTimeMeasure): string | number {
        switch (type) {
            case TimeMeasure.S: return value + "s";
            case TimeMeasure.MS: return value + "ms";
            default: return value;
        }
    }

}

export default Tag;