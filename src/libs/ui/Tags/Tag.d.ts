import { Border } from "../Interfaces/Border";
import { Gradients } from "../Interfaces/Gradient";

declare class Tag {
    tag: HTMLElement;

    constructor(tag?: string, text?: string);

    public setTag(tag: string): void;

    public setText(text: string): void;

    public load(): HTMLElement;

    public setBackgroundColor(color: string): void;

    public setBackgroundGradient(gradient: Gradients): void;

    public setHeight(height: number, type?: string): void;

    public setWidth(width: number, type?: string): void;

    public setSize(size: number, type?: string): void;

    public setBorder(border: Border): void;

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

    public setMaxWidth(maxWidth: number, type?: string): void;

    public setMaxHeight(maxHeight: number, type?: string): void;

    public show(): void;

    public hide(): void;

    public setPosition(x: number, y: number, unit?: string): void;

    public setDisplay(display: string): void;

    public setFlexDirection(direction?: string): void;

    public setJustifyContent(alignment?: string): void;

    public setAlignItems(alignment?: string): void;

    public setAlignContent(alignment?: string): void;

    public setAlignSelf(alignment?: string): void;

    public setFlexWrap(wrap?: string): void;

    public setFlexGrow(grow?: number): void;

    public setFlexShrink(shrink?: number): void;

    public setFlexBasis(basis?: string): void;

    public setFlex(flex?: string): void;

    public add(tag: Tag): void;

    public remove(tag: Tag): void;

    private formatMeasure(value: number, type: string): string;
}

export default Tag;