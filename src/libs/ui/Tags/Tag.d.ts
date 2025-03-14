import { Border } from "../Interfaces/Border";
import { Gradients } from "../Interfaces/Gradient";
import { Shadow } from "../Interfaces/Shadow";
import { Transition } from "../Interfaces/Transition";
import ElementNS from "./ElementNS/ElementNS";

declare class Tag {
    tag: HTMLElement;

    constructor(tag?: string, text?: string);

    public setTag(tag: string): void;

    public setText(text: string): void;

    public load(): HTMLElement;

    public setBackgroundColor(color: string): void;

    public setBackgroundGradient(gradient: Gradients): void;

    public setBackgroundImage(image: string): void;

    public setBackgroundSize(size: number | string, measure: string): void;

    public setBackgroundPosition(position: string): void;

    public setHeight(height: number, type?: string): void;

    public setWidth(width: number, type?: string): void;

    public setSize(size: number, type?: string): void;

    public setBoxSizing(boxSizing: string): void;

    public setBorder(border: Border | "none"): void;

    public setBorderLeft(border: Border): void;

    public setBorderRight(border: Border): void;

    public setBorderTop(border: Border): void;

    public setBorderBottom(border: Border): void;

    public setBorderTopRadius(radius: number, measure?: string): void;

    public setBorderBottomRadius(radius: number, measure?: string): void;

    public setBorderTopLeftRadius(radius: number, measure?: string): void;

    public setBorderTopRightRadius(radius: number, measure?: string): void;

    public setBorderBottomLeftRadius(radius: number, measure?: string): void;

    public setBorderBottomRightRadius(radius: number, measure?: string): void;

    public setBorderRadius(radius: number, measure?: string): void;

    public setFontFamily(font: string): void;

    public setFontColor(color: string): void;

    public setFontSize(size: number, type?: string): void;

    public setCursor(cursor: string): void;

    public setPadding(padding: number, type?: string): void;

    public setPaddingHorizontal(padding: number, type?: string): void;

    public setPaddingVertical(padding: number, type?: string): void;

    public setPaddingLeft(padding: number, type?: string): void;

    public setPaddingBottom(padding: number, type?: string): void;

    public setPaddingTop(padding: number, type?: string): void;

    public setPaddingRight(padding: number, type?: string): void;

    public setMargin(margin: number | { x: number | "auto", y: number | "auto" }, type?: string): void;

    public setMarginHorizontal(margin: number, type?: string): void; 

    public setMarginVertical(margin: number, type?: string): void; 

    public setMarginLeft(margin: number, type?: string): void; 

    public setMarginBottom(margin: number, type?: string): void;

    public setMarginTop(margin: number, type?: string): void;

    public setMarginRight(margin: number, type?: string): void;

    public setMaxWidth(maxWidth: number, type?: string): void;

    public setMaxHeight(maxHeight: number, type?: string): void;

    public setShadow(shadow: Shadow | "none"): void;

    public setTransition(transition: Transition | "none"): void;

    public setFontWeight(fontWeight: string): void;

    public show(): void;

    public hide(): void;

    public setPosition(position: string): void;

    public setX(x: number, unit?: string): void;

    public setY(y: number, unit?: string): void;

    public setOpacity(opacity: number): void;

    public setTransform(scale: number): void;

    public setOverflow(overflow: string): void;

    public setDisplay(display: string): void;

    public setFlexDirection(direction?: string): void;

    public setJustifyContent(alignment?: string): void;

    public setAlignItems(alignment?: string): void;

    public setAlignContent(alignment?: string): void;

    public setAlignSelf(alignment?: string): void;

    public setTextAlign(alignment: string): void;

    public setFlexWrap(wrap?: string): void;

    public setFlexGrow(grow?: number): void;

    public setFlexShrink(shrink?: number): void;

    public setFlexBasis(basis?: string): void;

    public setFlex(flex?: string): void;

    public setName(name: string): void;

    public setId(id: string): void;

    public add(tag: Tag | ElementNS): void;

    public remove(tag: Tag | ElementNS): void;

    public removeAll(): void;

    public onClick(event: () => void | any): void;

    public onClick(event: () => void | any): void;

    public onDoubleClick(event: () => void | any): void;

    public onMouseOver(event: () => void | any): void;

    public onMouseOut(event: () => void | any): void;

    public onMouseEnter(event: () => void | any): void;

    public onMouseLeave(event: () => void | any): void;

    public onMouseMove(event: () => void | any): void;

    public onMouseDown(event: () => void | any): void;

    public onMouseUp(event: () => void | any): void;

    // public onKeyDown(event: () => void | any): void;

    // public onKeyUp(event: () => void | any): void;

    // public onKeyPress(event: () => void | any): void;

    // public onFocus(event: () => void | any): void;

    // public onBlur(event: () => void | any): void;

    // public onChange(event: () => void | any): void;

    // public onInput(event: () => void | any): void;

    // public onSubmit(event: () => void | any): void;

    // public onScroll(event: () => void | any): void;

    public onResize(event: () => void | any): void;


    public onMouseEnter(event: () => void | any): void;

    private formatMeasure(value: number, type: string): string;
}

export default Tag;