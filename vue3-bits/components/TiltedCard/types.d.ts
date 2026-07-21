/**
 * Public prop contract for <TiltedCard>.
 *
 * A Vue3 port of the react-bits `TiltedCard`. The original animates the inner
 * figure with `motion/react` (`useSpring` on rotateX / rotateY / scale /
 * opacity, plus a velocity-driven figcaption rotation). This port replaces the
 * springs with `gsap.quickTo` tweens (bundled `gsap`, no `motion/react`) that
 * deliver the same damped follow + hover scale + tooltip behaviour. The
 * optional overlay is supplied through the `overlayContent` slot.
 */
export interface TiltedCardProps {
    /** Image source for the tilted card. */
    imageSrc: string;
    /** Alt text for the image. */
    altText?: string;
    /** Caption text shown as a tooltip following the cursor. */
    captionText?: string;
    /** Container (figure) height (CSS length). */
    containerHeight?: string;
    /** Container (figure) width (CSS length). */
    containerWidth?: string;
    /** Image / inner height (CSS length). */
    imageHeight?: string;
    /** Image / inner width (CSS length). */
    imageWidth?: string;
    /** Scale applied to the inner element on hover. */
    scaleOnHover?: number;
    /** Max tilt amplitude in degrees. */
    rotateAmplitude?: number;
    /** Show the "not optimized for mobile" warning. */
    showMobileWarning?: boolean;
    /** Show the cursor-following tooltip caption. */
    showTooltip?: boolean;
    /** Render the `overlayContent` slot on top of the image. */
    displayOverlayContent?: boolean;
}
export declare const DEFAULT_TILTED_CARD_PROPS: {
    imageSrc: string;
    altText: string;
    captionText: string;
    containerHeight: string;
    containerWidth: string;
    imageHeight: string;
    imageWidth: string;
    scaleOnHover: number;
    rotateAmplitude: number;
    showMobileWarning: boolean;
    showTooltip: boolean;
    displayOverlayContent: boolean;
};
