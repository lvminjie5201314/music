import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `PixelTransition` demo + component.
 *
 * `demo.pixel-transition.*` and `param.pixel-transition.*` are the
 * component-specific keys (title / desc / shortDesc + per-prop descriptions),
 * including the two content slots (`firstContent` / `secondContent`). Five new
 * control keys are introduced here (`ctrl.gridSize`, `ctrl.pixelColor`,
 * `ctrl.animationStepDuration`, `ctrl.once`, `ctrl.aspectRatio`) — none of them
 * collide with the shared base dictionary. `ctrl.appearance` (group title) is
 * reused from the base `messages`. Pure data — only a type import on `i18n.ts`.
 */
export declare const dict: Record<Locale, Dict>;
