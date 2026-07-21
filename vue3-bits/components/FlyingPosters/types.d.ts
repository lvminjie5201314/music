import { CSSProperties } from 'vue';
/**
 * Public prop contract for <FlyingPosters>.
 *
 * A faithful Vue 3 port of the react-bits `FlyingPosters` (#80). The original
 * react component is built on the `ogl` micro-library (`Renderer` / `Transform`
 * / `Plane` / `Program` / `Mesh` / `Texture`) and drives a column of image
 * "posters" that fly / distort as the user scrolls. Per the project constraint
 * (three is the only 3D dependency; `@react-three/fiber` / `ogl` /
 * `framer-motion` are forbidden) this port drops `ogl` and reproduces the
 * exact same behaviour with the already-bundled `three`:
 *  - ogl `Plane` (widthSegments 100) → a shared `THREE.PlaneGeometry`;
 *  - ogl `Program` (GLSL vertex + fragment) → a `THREE.RawShaderMaterial`
 *    (RawShaderMaterial is used so the GLSL 1.00 `attribute` / `varying` /
 *    `gl_FragColor` / `modelViewMatrix` / `projectionMatrix` / `normalMatrix`
 *    syntax is kept VERBATIM — three feeds those built-in matrices to a
 *    RawShaderMaterial automatically by uniform name);
 *  - ogl `Mesh` → `THREE.Mesh`; ogl `Transform` scene → `THREE.Scene`;
 *  - ogl `Renderer` → `THREE.WebGLRenderer` (alpha + antialias +
 *    `preserveDrawingBuffer: true` so headless QA screenshots are reliable).
 *
 * React → Vue / three.js mapping:
 *  - `useRef<HTMLDivElement>` + `useRef<HTMLCanvasElement>` →
 *    `ref<HTMLDivElement | null>` + `ref<HTMLCanvasElement | null>`;
 *  - `useEffect(mount + listeners, [props...])` → `onMounted` bootstrap +
 *    `onUnmounted` cleanup (dispose geometry / materials / textures /
 *    renderer, remove listeners, cancel rAF);
 *  - the `Canvas` / `Media` classes are kept 1:1 with the source; the per-frame
 *    loop lerps `scroll.current` toward `scroll.target` and pushes each poster's
 *    `position.y` / `uPosition` / `uTime` / `uSpeed` uniforms every frame.
 *
 * three.js is a peer dependency already used by the repo's other 3D ports, so
 * this adds no new runtime dependency. `framer-motion` / `react-icons` /
 * `@react-three/fiber` are intentionally not used.
 *
 * DEVIATION: a `style` prop (and the `items` are image URLs — the demo feeds
 * inline SVG data URIs to stay offline) plus an optional `autoScroll` boolean so
 * the column drifts hands-free (useful for demos / QA). Both default to
 * non-intrusive values, so out-of-the-box behaviour matches the source.
 */
export interface FlyingPostersProps {
    /** Poster image URLs (one plane per entry). The demo feeds inline SVG data URIs so it works fully offline — no external network images. */
    items?: string[];
    /** Poster plane width as a fraction of the screen (`viewport.width * planeWidth / screen.width`). */
    planeWidth?: number;
    /** Poster plane height as a fraction of the screen (`viewport.height * planeHeight / screen.height`). */
    planeHeight?: number;
    /** Distortion strength applied to each poster as it flies (drives the vertex-shader rotation). */
    distortion?: number;
    /** Scroll easing factor (0–1) — how quickly `current` chases `target`. */
    scrollEase?: number;
    /** Perspective camera field of view (degrees). */
    cameraFov?: number;
    /** Perspective camera distance from the z=0 plane. */
    cameraZ?: number;
    /** When `true`, the column auto-drifts without user input (handy for demos / QA). Default `false` keeps source behaviour. */
    autoScroll?: boolean;
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Inline style merged onto the root element. */
    style?: CSSProperties;
}
