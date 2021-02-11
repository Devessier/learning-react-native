export type TColor = 'cyan' | 'orange' | 'blue' | 'green' | 'black' | 'pink';

export interface IColorWithDescription {
  color: TColor;
  text: string;
}

export interface IColorPalette {
  colors: IColorWithDescription[];
  paletteName: string;
}
