import { ModelInnerProps } from './types';
import * as THREE from 'three';
declare function capture(): void;
declare const _default: import('vue').DefineComponent<ModelInnerProps, {
    capture: typeof capture;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "loading-change": (args_0: boolean) => any;
}, string, import('vue').PublicProps, Readonly<ModelInnerProps> & Readonly<{
    "onLoading-change"?: ((args_0: boolean) => any) | undefined;
}>, {
    width: number | string;
    height: number | string;
    modelXOffset: number;
    modelYOffset: number;
    defaultRotationX: number;
    defaultRotationY: number;
    defaultZoom: number;
    minZoomDistance: number;
    maxZoomDistance: number;
    enableMouseParallax: boolean;
    enableManualRotation: boolean;
    enableHoverRotation: boolean;
    enableManualZoom: boolean;
    ambientIntensity: number;
    keyLightIntensity: number;
    fillLightIntensity: number;
    rimLightIntensity: number;
    environmentPreset: import('./types').EnvironmentPreset;
    autoFrame: boolean;
    placeholderSrc: string;
    showScreenshotButton: boolean;
    fadeIn: boolean;
    autoRotate: boolean;
    autoRotateSpeed: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    outer: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('@tresjs/core').Mutable<import('@tresjs/core').Overwrite<Partial<import('@tresjs/core').Overwrite<THREE.Group<THREE.Object3DEventMap>, import('@tresjs/core').WithMathProps<THREE.Group<THREE.Object3DEventMap>> & import('@tresjs/core').VueProps & Partial<{
        onClick: (event: import('@tresjs/core').TresPointerEvent) => void;
        onContextmenu: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointermove: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerenter: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerleave: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerover: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerout: (event: import('@tresjs/core').TresPointerEvent) => void;
        onDblclick: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerdown: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerup: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointercancel: (event: import('@tresjs/core').TresPointerEvent) => void;
        onLostpointercapture: (event: import('@tresjs/core').TresPointerEvent) => void;
        onWheel: (event: import('@tresjs/core').TresPointerEvent) => void;
    }>>>, Omit<import('@tresjs/core').InstanceProps<THREE.Group<THREE.Object3DEventMap>, typeof THREE.Group>, "object">>>>, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('@tresjs/core').Mutable<import('@tresjs/core').Overwrite<Partial<import('@tresjs/core').Overwrite<THREE.Group<THREE.Object3DEventMap>, import('@tresjs/core').WithMathProps<THREE.Group<THREE.Object3DEventMap>> & import('@tresjs/core').VueProps & Partial<{
        onClick: (event: import('@tresjs/core').TresPointerEvent) => void;
        onContextmenu: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointermove: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerenter: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerleave: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerover: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerout: (event: import('@tresjs/core').TresPointerEvent) => void;
        onDblclick: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerdown: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerup: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointercancel: (event: import('@tresjs/core').TresPointerEvent) => void;
        onLostpointercapture: (event: import('@tresjs/core').TresPointerEvent) => void;
        onWheel: (event: import('@tresjs/core').TresPointerEvent) => void;
    }>>>, Omit<import('@tresjs/core').InstanceProps<THREE.Group<THREE.Object3DEventMap>, typeof THREE.Group>, "object">>>>, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, {}> | null;
    inner: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('@tresjs/core').Mutable<import('@tresjs/core').Overwrite<Partial<import('@tresjs/core').Overwrite<THREE.Group<THREE.Object3DEventMap>, import('@tresjs/core').WithMathProps<THREE.Group<THREE.Object3DEventMap>> & import('@tresjs/core').VueProps & Partial<{
        onClick: (event: import('@tresjs/core').TresPointerEvent) => void;
        onContextmenu: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointermove: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerenter: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerleave: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerover: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerout: (event: import('@tresjs/core').TresPointerEvent) => void;
        onDblclick: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerdown: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerup: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointercancel: (event: import('@tresjs/core').TresPointerEvent) => void;
        onLostpointercapture: (event: import('@tresjs/core').TresPointerEvent) => void;
        onWheel: (event: import('@tresjs/core').TresPointerEvent) => void;
    }>>>, Omit<import('@tresjs/core').InstanceProps<THREE.Group<THREE.Object3DEventMap>, typeof THREE.Group>, "object">>>>, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('@tresjs/core').Mutable<import('@tresjs/core').Overwrite<Partial<import('@tresjs/core').Overwrite<THREE.Group<THREE.Object3DEventMap>, import('@tresjs/core').WithMathProps<THREE.Group<THREE.Object3DEventMap>> & import('@tresjs/core').VueProps & Partial<{
        onClick: (event: import('@tresjs/core').TresPointerEvent) => void;
        onContextmenu: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointermove: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerenter: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerleave: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerover: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerout: (event: import('@tresjs/core').TresPointerEvent) => void;
        onDblclick: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerdown: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointerup: (event: import('@tresjs/core').TresPointerEvent) => void;
        onPointercancel: (event: import('@tresjs/core').TresPointerEvent) => void;
        onLostpointercapture: (event: import('@tresjs/core').TresPointerEvent) => void;
        onWheel: (event: import('@tresjs/core').TresPointerEvent) => void;
    }>>>, Omit<import('@tresjs/core').InstanceProps<THREE.Group<THREE.Object3DEventMap>, typeof THREE.Group>, "object">>>>, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, {}> | null;
}, any>;
export default _default;
