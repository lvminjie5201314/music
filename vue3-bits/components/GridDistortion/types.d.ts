/**
 * Public prop contract for <GridDistortion>.
 *
 * A Vue3 port of the react-bits `GridDistortion` WebGL image-distortion
 * component, faithfully reimplemented with the bundled `ogl` library. The
 * component renders an image through a subdivided plane mesh and applies a UV
 * distortion in the fragment shader driven by mouse proximity. The prop surface
 * is 1:1 with the official react-bits source (names camelCase; bound as
 * kebab-case in templates).
 */
export interface GridDistortionProps {
    /**
     * Number of grid subdivisions per axis. The plane mesh is segmented into
     * `(grid - 1) × (grid - 1)` cells, so a higher value yields a finer, smoother
     * distortion mesh at the cost of more geometry.
     */
    grid?: number;
    /**
     * Mouse influence radius, expressed as a fraction of the grid. A larger value
     * lets the pointer distort a wider neighbourhood of the mesh.
     */
    mouse?: number;
    /**
     * Distortion strength applied by mouse velocity. Higher values push the UVs
     * further, producing a stronger "ripple" as the pointer moves.
     */
    strength?: number;
    /**
     * Per-frame relaxation of the distortion field back to rest (0..1). Closer to
     * `1` means the field lingers longer before settling; lower values snap back
     * quickly.
     */
    relaxation?: number;
    /** Source URL of the image rendered through the distorted mesh. */
    imageSrc: string;
    /** Extra CSS class appended to the root container element. */
    className?: string;
}
