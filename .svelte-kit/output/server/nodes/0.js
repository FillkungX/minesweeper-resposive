

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CUYhCURw.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CKkhPEn1.js"];
export const stylesheets = ["_app/immutable/assets/0.B61zStPX.css"];
export const fonts = [];
