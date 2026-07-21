import { Group } from 'three';
import { ModelViewerProps } from './types';
declare const _default: import('vue').DefineComponent<ModelViewerProps, {
    capture: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ModelViewerProps> & Readonly<{}>, {
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
    modelInnerRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./types').ModelInnerProps> & Readonly<{
        "onLoading-change"?: ((args_0: boolean) => any) | undefined;
    }>, {
        capture: () => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "loading-change": (args_0: boolean) => any;
    }, import('vue').PublicProps, {
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
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        outer: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('@tresjs/core').Mutable<import('@tresjs/core').Overwrite<Partial<import('@tresjs/core').Overwrite<Group<import('three').Object3DEventMap>, import('@tresjs/core').WithMathProps<Group<import('three').Object3DEventMap>> & import('@tresjs/core').VueProps & Partial<{
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
        }>>>, Omit<import('@tresjs/core').InstanceProps<Group<import('three').Object3DEventMap>, typeof Group>, "object">>>>, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('@tresjs/core').Mutable<import('@tresjs/core').Overwrite<Partial<import('@tresjs/core').Overwrite<Group<import('three').Object3DEventMap>, import('@tresjs/core').WithMathProps<Group<import('three').Object3DEventMap>> & import('@tresjs/core').VueProps & Partial<{
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
        }>>>, Omit<import('@tresjs/core').InstanceProps<Group<import('three').Object3DEventMap>, typeof Group>, "object">>>>, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, {}> | null;
        inner: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('@tresjs/core').Mutable<import('@tresjs/core').Overwrite<Partial<import('@tresjs/core').Overwrite<Group<import('three').Object3DEventMap>, import('@tresjs/core').WithMathProps<Group<import('three').Object3DEventMap>> & import('@tresjs/core').VueProps & Partial<{
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
        }>>>, Omit<import('@tresjs/core').InstanceProps<Group<import('three').Object3DEventMap>, typeof Group>, "object">>>>, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('@tresjs/core').Mutable<import('@tresjs/core').Overwrite<Partial<import('@tresjs/core').Overwrite<Group<import('three').Object3DEventMap>, import('@tresjs/core').WithMathProps<Group<import('three').Object3DEventMap>> & import('@tresjs/core').VueProps & Partial<{
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
        }>>>, Omit<import('@tresjs/core').InstanceProps<Group<import('three').Object3DEventMap>, typeof Group>, "object">>>>, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, {}> | null;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./types').ModelInnerProps> & Readonly<{
        "onLoading-change"?: ((args_0: boolean) => any) | undefined;
    }>, {
        capture: () => void;
    }, {}, {}, {}, {
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
    }> | null;
    contactRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('@tresjs/core').Mutable<import('@tresjs/core').Overwrite<Partial<import('@tresjs/core').Overwrite<Group<import('three').Object3DEventMap>, import('@tresjs/core').WithMathProps<Group<import('three').Object3DEventMap>> & import('@tresjs/core').VueProps & Partial<{
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
    }>>>, Omit<import('@tresjs/core').InstanceProps<Group<import('three').Object3DEventMap>, typeof Group>, "object">>>>, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('@tresjs/core').Mutable<import('@tresjs/core').Overwrite<Partial<import('@tresjs/core').Overwrite<Group<import('three').Object3DEventMap>, import('@tresjs/core').WithMathProps<Group<import('three').Object3DEventMap>> & import('@tresjs/core').VueProps & Partial<{
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
    }>>>, Omit<import('@tresjs/core').InstanceProps<Group<import('three').Object3DEventMap>, typeof Group>, "object">>>>, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, {}> | null;
}, HTMLDivElement>;
export default _default;
