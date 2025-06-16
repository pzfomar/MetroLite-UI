import { Component, h } from "@stencil/core";

@Component({
  tag: "mtrlt-container",
  styleUrl: "mtrlt-container.css",
  shadow: true,
})
export class MtrltContainerComponent {
  render() {
    return <slot />;
  }
}
