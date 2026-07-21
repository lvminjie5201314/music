/**
 * Public prop contract for <FloatingLines>.
 *
 * Faithful 1:1 port of the react-bits `FloatingLines` component
 * (react-bits source `14. FloatingLines`, lines 6194-6240). All default
 * values are taken verbatim from the `FloatingLinesProps` destructuring
 * defaults in the original source.
 */
/** Position / orientation of a single wave in the fragment shader. */
export interface WavePosition {
    /** Horizontal offset of the wave. */
    x: number;
    /** Vertical offset of the wave. */
    y: number;
    /** Rotation factor applied via `rotate(angle)` in the shader. */
    rotate: number;
}
/** Public props for <FloatingLines>. All optional. */
export interface FloatingLinesProps {
    /** Gradient stops (max 8) applied along each line. Missing → background shading. */
    linesGradient?: string[];
    /** Which waves render. Default `['top', 'middle', 'bottom']`. */
    enabledWaves?: Array<'top' | 'middle' | 'bottom'>;
    /** Lines per wave: number (all) or per-wave array indexed by `enabledWaves`. */
    lineCount?: number | number[];
    /** Distance between lines: number (all) or per-wave array. ×0.01 in shader. */
    lineDistance?: number | number[];
    /** Position of the top wave. Default `{ x: 10, y: 0.5, rotate: -0.4 }`. */
    topWavePosition?: WavePosition;
    /** Position of the middle wave. Default `{ x: 5, y: 0, rotate: 0.2 }`. */
    middleWavePosition?: WavePosition;
    /** Position of the bottom wave. Default `{ x: 2.0, y: -0.7, rotate: -1 }`. */
    bottomWavePosition?: WavePosition;
    /** Animation time multiplier. Default `1`. */
    animationSpeed?: number;
    /** Enable mouse bending interaction. Default `true`. */
    interactive?: boolean;
    /** Radial falloff around the cursor for the bend effect. Default `5.0`. */
    bendRadius?: number;
    /** Bend strength. Default `-0.5`. */
    bendStrength?: number;
    /** Mouse / parallax easing factor. Default `0.05`. */
    mouseDamping?: number;
    /** Enable parallax offset that follows the cursor. Default `true`. */
    parallax?: boolean;
    /** Parallax strength. Default `0.2`. */
    parallaxStrength?: number;
    /** CSS `mix-blend-mode` applied to the container. Default `'screen'`. */
    mixBlendMode?: string;
    /** Extra CSS class applied to the root container (passed through). */
    className?: string;
}
