/**
 * Mini math library — a self-contained subset of `gl-matrix`.
 *
 * `InfiniteMenu` (react-bits) depends on `gl-matrix` for `mat4` / `quat` /
 * `vec2` / `vec3`. `gl-matrix` is NOT a dependency of vue3-bits, so we provide
 * a tiny, faithful re-implementation of the exact subset the engine uses. The
 * public API mirrors `gl-matrix` (objects `vec2` / `vec3` / `quat` / `mat4`
 * with the same method names + semantics) so the engine port reads 1:1.
 *
 * All vectors/matrices are `Float32Array` (length 2 / 3 / 4 / 16) as in
 * gl-matrix; `quat.create()` returns the identity quaternion `[0,0,0,1]` and
 * `mat4.create()` returns the identity matrix.
 */
export type Vec2 = Float32Array | number[];
export type Vec3 = Float32Array | number[];
export type Quat = Float32Array;
export type Mat4 = Float32Array;
export declare const vec2: {
    create(): Vec2;
    set(out: Vec2, x: number, y: number): Vec2;
    copy(out: Vec2, a: Vec2): Vec2;
    clone(a: Vec2): Vec2;
    sub(out: Vec2, a: Vec2, b: Vec2): Vec2;
    add(out: Vec2, a: Vec2, b: Vec2): Vec2;
    scale(out: Vec2, a: Vec2, s: number): Vec2;
    sqrLen(a: Vec2): number;
};
export declare const vec3: {
    create(): Vec3;
    fromValues(x: number, y: number, z: number): Vec3;
    set(out: Vec3, x: number, y: number, z: number): Vec3;
    copy(out: Vec3, a: Vec3): Vec3;
    clone(a: Vec3): Vec3;
    add(out: Vec3, a: Vec3, b: Vec3): Vec3;
    sub(out: Vec3, a: Vec3, b: Vec3): Vec3;
    scale(out: Vec3, a: Vec3, s: number): Vec3;
    negate(out: Vec3, a: Vec3): Vec3;
    dot(a: Vec3, b: Vec3): number;
    cross(out: Vec3, a: Vec3, b: Vec3): Vec3;
    length(a: Vec3): number;
    normalize(out: Vec3, a: Vec3): Vec3;
    squaredDistance(a: Vec3, b: Vec3): number;
    transformQuat(out: Vec3, a: Vec3, q: Quat): Vec3;
};
export declare const quat: {
    create(): Quat;
    copy(out: Quat, a: Quat): Quat;
    multiply(out: Quat, a: Quat, b: Quat): Quat;
    normalize(out: Quat, a: Quat): Quat;
    slerp(out: Quat, a: Quat, b: Quat, t: number): Quat;
    setAxisAngle(out: Quat, axis: Vec3, rad: number): Quat;
    conjugate(out: Quat, a: Quat): Quat;
};
export declare const mat4: {
    create(): Mat4;
    identity(out: Mat4): Mat4;
    copy(out: Mat4, a: Mat4): Mat4;
    multiply(out: Mat4, a: Mat4, b: Mat4): Mat4;
    fromTranslation(out: Mat4, v: Vec3): Mat4;
    fromScaling(out: Mat4, v: Vec3): Mat4;
    targetTo(out: Mat4, eye: Vec3, center: Vec3, up: Vec3): Mat4;
    invert(out: Mat4, a: Mat4): Mat4;
    perspective(out: Mat4, fovy: number, aspect: number, near: number, far: number): Mat4;
};
