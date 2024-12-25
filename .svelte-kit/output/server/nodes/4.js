

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/maingame/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.FGpCipsX.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CKkhPEn1.js"];
export const stylesheets = [];
export const fonts = [];
