export enum SizeEnum {
  LARGE = "large",
  WIDE = "wide",
  TALL = "tall",
  DEFAULT = "default",
  RANDOM = "random",
}

export function cssSize(size: SizeEnum): string {
  if (size === SizeEnum.RANDOM) {
    let sizes: SizeEnum[] = Object.values(SizeEnum).filter(
      (c) => c !== SizeEnum.RANDOM
    );
    return sizes[Math.floor(Math.random() * sizes.length)];
  } else if (size === SizeEnum.DEFAULT) {
    return "";
  }
  return size;
}
