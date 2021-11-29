export const pxToRem = (px, onlyNumber = false) =>
  onlyNumber ? Number(px || 0) / 16 : `${Number(px || 0) / 16}rem`
