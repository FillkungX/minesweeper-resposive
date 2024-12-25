export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bgst.png","bgst.webp","bg_start.jpg","bomb.png","bomb.webp","cat.png","coin.png","coin2.jpg","coin5.png","Coinsweep.png","favicon.png","imag2.svg","pixel-art-gold-coin-icon-for-8bit-game-on-white-background-vector.jpg"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.B5AdZ2vZ.js","app":"_app/immutable/entry/app.DISv-l9X.js","imports":["_app/immutable/entry/start.B5AdZ2vZ.js","_app/immutable/chunks/entry.COMFm9Tb.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/entry/app.DISv-l9X.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CKkhPEn1.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/classc",
				pattern: /^\/classc\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/maingame",
				pattern: /^\/maingame\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
