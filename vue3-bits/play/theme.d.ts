/**
 * Lightweight theme switcher for the play (demo) area.
 *
 * Themes are driven entirely by a `data-theme` attribute on `<html>` (`:root`),
 * so the actual colors live in `play.css` as CSS variables. The `theme` ref is
 * the single source of truth and is persisted to localStorage.
 */
export type Theme = 'dark' | 'light';
/** Reactive active theme. */
export declare const theme: import('vue').Ref<Theme, Theme>;
/** Reflect the theme onto `<html data-theme>` so CSS variables switch. */
export declare function applyTheme(value: Theme): void;
/** Flip between dark and light. */
export declare function toggleTheme(): void;
