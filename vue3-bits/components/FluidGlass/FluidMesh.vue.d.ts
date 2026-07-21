import { FluidGlassMode, FluidGlassModeProps } from './types';
import { FluidFbo } from './useFluidFbo';
import * as THREE from 'three';
type __VLS_Props = {
    mode?: FluidGlassMode;
    modeProps?: FluidGlassModeProps;
    fbo?: FluidFbo;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    mode: FluidGlassMode;
    modeProps: FluidGlassModeProps;
    fbo: FluidFbo;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    meshRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('@tresjs/core').Mutable<import('@tresjs/core').Overwrite<Partial<import('@tresjs/core').Overwrite<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>, import('@tresjs/core').WithMathProps<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>> & import('@tresjs/core').VueProps & Partial<{
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
    }>>>, Omit<import('@tresjs/core').InstanceProps<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>, typeof THREE.Mesh>, "object">>>>, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('@tresjs/core').Mutable<import('@tresjs/core').Overwrite<Partial<import('@tresjs/core').Overwrite<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>, import('@tresjs/core').WithMathProps<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>> & import('@tresjs/core').VueProps & Partial<{
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
    }>>>, Omit<import('@tresjs/core').InstanceProps<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>, typeof THREE.Mesh>, "object">>>>, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, {}> | null;
}, any>;
export default _default;
