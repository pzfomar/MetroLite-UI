import { Component, h } from "@stencil/core";

@Component({
  tag: "mtrlt-grid",
  styleUrl: "mtrlt-grid.css",
  shadow: true,
})
export class MtrltGridComponent {
  render() {
    return <slot />;
  }
}
