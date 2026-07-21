import { Component } from 'vue';
/**
 * Spring configuration for the dock magnification, mirroring
 * `motion/react`'s `SpringOptions`. Ported to a hand-rolled rAF spring (no
 * `framer-motion` dependency).
 */
export interface SpringOptions {
    mass?: number;
    stiffness?: number;
    damping?: number;
}
/** A single dock entry. */
export interface DockItemData {
    /** Icon component rendered inside the dock item (e.g. an inline SVG). */
    icon?: Component;
    /** Text label shown above the item on hover. */
    label?: string;
    /** Click handler. */
    onClick?: () => void;
    /** Extra CSS class appended to the item. */
    className?: string;
}
/** Public prop contract for <Dock>. */
export interface DockProps {
    /** Dock entries. */
    items?: DockItemData[];
    /** Extra CSS class appended to the panel. */
    className?: string;
    /** Spring used for the magnification easing. */
    spring?: SpringOptions;
    /** Max item size (px) at the pointer. */
    magnification?: number;
    /** Falloff distance (px) over which magnification decays to base size. */
    distance?: number;
    /** Resting panel height (px). */
    panelHeight?: number;
    /** Outer wrapper height (px) — grows to fit the magnified items. */
    dockHeight?: number;
    /** Resting item size (px). */
    baseItemSize?: number;
}
