import { Component, Element, h, Prop, State } from "@stencil/core";
import { ColorEnum, cssColor } from "./color.enum";
import { cssSize, SizeEnum } from "./size.enum";

@Component({
  tag: "mtrlt-tile",
  styleUrl: "mtrlt-tile.css",
  shadow: true,
})
export class MtrltTileComponent {
  @Prop() size: SizeEnum = SizeEnum.RANDOM;
  @Prop() colorFront: ColorEnum = ColorEnum.RANDOM;
  @Prop() colorBack: ColorEnum = ColorEnum.BLACK;
  @Element() el: HTMLElement;

  @State() cssColorFront: ColorEnum = ColorEnum.BLACK;
  @State() cssColorBack: ColorEnum = ColorEnum.BLACK;
  @State() hasFrontSlot: boolean = false;
  @State() hasBackSlot: boolean = false;
  @State() activateBack: string = "";

  componentWillRender(): void {
    this.hasFrontSlot = this.el.querySelector(`[slot="front"]`) !== null;
    this.hasBackSlot = this.el.querySelector(`[slot="back"]`) !== null;
  }

  componentWillLoad(): void {
    this.el.classList.add(cssSize(this.size));
    this.cssColorFront = cssColor(this.colorFront);
    this.cssColorBack = cssColor(this.colorBack);
    setTimeout(
      () =>
        setInterval(
          () => (this.activateBack = this.activateBack !== "" ? "" : "active"),
          3000
        ),
      Math.floor(Math.random() * 1000)
    );
  }

  render(): any[] {
    if (this.hasFrontSlot && this.hasBackSlot) {
      return [
        <div class={`front ${this.cssColorFront}`}>
          <slot name="front" />
        </div>,
        <div class={`back ${this.cssColorBack} ${this.activateBack}`}>
          <slot name="back" />
        </div>,
      ];
    } else {
      return [
        <div class={`front ${this.cssColorFront}`}>
          <slot />
        </div>,
      ];
    }
  }
}
