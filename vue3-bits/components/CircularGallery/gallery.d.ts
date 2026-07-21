import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
type GL = any;
interface ScreenSize {
    width: number;
    height: number;
}
interface Viewport {
    width: number;
    height: number;
}
declare function resolveFont(font: string, fontUrl?: string): Promise<string>;
interface TitleProps {
    gl: GL;
    plane: Mesh;
    renderer: Renderer;
    text: string;
    textColor?: string;
    font?: string;
}
declare class Title {
    gl: GL;
    plane: Mesh;
    renderer: Renderer;
    text: string;
    textColor: string;
    font: string;
    mesh: Mesh;
    constructor({ gl, plane, renderer, text, textColor, font }: TitleProps);
    createMesh(): void;
}
interface MediaProps {
    geometry: Plane;
    gl: GL;
    image: string;
    index: number;
    length: number;
    renderer: Renderer;
    scene: Transform;
    screen: ScreenSize;
    text: string;
    viewport: Viewport;
    bend: number;
    textColor: string;
    borderRadius?: number;
    font?: string;
    cardBackgroundColor: string;
}
declare class Media {
    loaded: boolean;
    texture: Texture;
    extra: number;
    geometry: Plane;
    gl: GL;
    image: string;
    index: number;
    length: number;
    renderer: Renderer;
    scene: Transform;
    screen: ScreenSize;
    text: string;
    viewport: Viewport;
    bend: number;
    textColor: string;
    borderRadius: number;
    font?: string;
    cardBackgroundColor: string;
    program: Program;
    plane: Mesh;
    title: Title;
    scale: number;
    padding: number;
    width: number;
    widthTotal: number;
    x: number;
    speed: number;
    isBefore: boolean;
    isAfter: boolean;
    constructor({ geometry, gl, image, index, length, renderer, scene, screen, text, viewport, bend, textColor, borderRadius, font, cardBackgroundColor, }: MediaProps);
    createShader(): void;
    /**
     * Live-update the placeholder card background colour. Only affects medias
     * whose image has not finished loading yet (once an image is shown it covers
     * the placeholder, so touching it would be wrong). Re-uploads the texture.
     */
    setCardBackgroundColor(color: string): void;
    createMesh(): void;
    createTitle(): void;
    update(scroll: {
        current: number;
        last: number;
    }, direction: 'right' | 'left'): void;
    onResize({ screen, viewport }?: {
        screen?: ScreenSize;
        viewport?: Viewport;
    }): void;
}
export interface AppConfig {
    items?: {
        image: string;
        text: string;
    }[];
    bend?: number;
    textColor?: string;
    borderRadius?: number;
    font?: string;
    scrollSpeed?: number;
    scrollEase?: number;
    cardBackgroundColor?: string;
}
declare class App {
    container: HTMLElement;
    scrollSpeed: number;
    scroll: {
        ease: number;
        current: number;
        target: number;
        last: number;
        position?: number;
    };
    onCheckDebounce: () => void;
    renderer: Renderer;
    gl: GL;
    camera: Camera;
    scene: Transform;
    planeGeometry: Plane;
    medias: Media[];
    mediasImages: {
        image: string;
        text: string;
    }[];
    screen: ScreenSize;
    viewport: Viewport;
    raf: number;
    boundOnResize: () => void;
    boundOnWheel: (e: Event) => void;
    boundOnTouchDown: (e: MouseEvent | TouchEvent) => void;
    boundOnTouchMove: (e: MouseEvent | TouchEvent) => void;
    boundOnTouchUp: () => void;
    boundOnKeyDown: (e: KeyboardEvent) => void;
    isDown: boolean;
    start: number;
    constructor(container: HTMLElement, { items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, cardBackgroundColor }: AppConfig);
    createRenderer(): void;
    createCamera(): void;
    createScene(): void;
    createGeometry(): void;
    createMedias(items: {
        image: string;
        text: string;
    }[] | undefined, bend: number, textColor: string, borderRadius: number, font: string, cardBackgroundColor: string): void;
    /** Live-update the placeholder card background colour across all medias. */
    setCardBackgroundColor(color: string): void;
    onTouchDown(e: MouseEvent | TouchEvent): void;
    onTouchMove(e: MouseEvent | TouchEvent): void;
    onTouchUp(): void;
    onWheel(e: Event): void;
    onKeyDown(e: KeyboardEvent): void;
    onCheck(): void;
    onResize(): void;
    update: () => void;
    addEventListeners(): void;
    destroy(): void;
}
export { App, resolveFont };
