

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C3eJZGNa.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CKkhPEn1.js"];
export const stylesheets = ["_app/immutable/assets/2.CszH17-A.css"];
export const fonts = [];
