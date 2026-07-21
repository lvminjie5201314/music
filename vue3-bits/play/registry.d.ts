import { Component } from 'vue';
export interface PlayComponent {
    id: string;
    name: string;
    tag: string;
    desc: string;
    comp: Component;
}
export declare const components: PlayComponent[];
export declare const CATEGORY_ORDER: readonly ["3D", "Background", "Interaction", "Text"];
export type CategoryKey = (typeof CATEGORY_ORDER)[number];
