import { CSSProperties } from 'vue';
/** CSS `mix-blend-mode` values accepted by `<GlassSurface>`. */
export type MixBlendMode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity' | 'plus-darker' | 'plus-lighter';
/** Public props for `<GlassSurface>`. A Vue3 port of react-bits `GlassSurface`. */
export interface GlassSurfaceProps {
    /** Glass content (rendered in the centered slot). */
    children?: unknown;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    borderWidth?: number;
    brightness?: number;
    opacity?: number;
    blur?: number;
    displace?: number;
    backgroundOpacity?: number;
    saturation?: number;
    distortionScale?: number;
    redOffset?: number;
    greenOffset?: number;
    blueOffset?: number;
    xChannel?: 'R' | 'G' | 'B';
    yChannel?: 'R' | 'G' | 'B';
    mixBlendMode?: MixBlendMode;
    className?: string;
    style?: CSSProperties;
}
/** 1:1 defaults mirroring the react-bits `GlassSurface`. */
export declare const DEFAULT_GLASS_SURFACE_PROPS: {
    readonly width: 200;
    readonly height: 80;
    readonly borderRadius: 20;
    readonly borderWidth: 0.07;
    readonly brightness: 50;
    readonly opacity: 0.93;
    readonly blur: 11;
    readonly displace: 0;
    readonly backgroundOpacity: 0;
    readonly saturation: 1;
    readonly distortionScale: -180;
    readonly redOffset: 0;
    readonly greenOffset: 10;
    readonly blueOffset: 20;
    readonly xChannel: "R";
    readonly yChannel: "G";
    readonly mixBlendMode: MixBlendMode;
    readonly className: "";
};
