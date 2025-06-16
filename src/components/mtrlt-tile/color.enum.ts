export enum ColorEnum {
  BLACK = "black",
  BLUE = "blue",
  RED = "red",
  GREEN = "green",
  ORANGE = "orange",
  SKY_BLUE = "sky-blue",
  YELLOW = "yellow",
  PURPLE = "purple",
  RANDOM = "random",
}

export function cssColor(color: ColorEnum): ColorEnum {
  if (color === ColorEnum.RANDOM) {
    let colors: ColorEnum[] = Object.values(ColorEnum).filter(
      (c) => c !== ColorEnum.RANDOM
    );
    return colors[Math.floor(Math.random() * colors.length)];
  }
  return color;
}
