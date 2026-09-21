import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-D7n2rcwQ.js
var memoryStorage = {
	getItem: () => null,
	setItem: () => void 0,
	removeItem: () => void 0
};
var useProgress = create()(persist((set) => ({
	done: {},
	bookmarks: [],
	promptNotes: {},
	toggle: (id) => set((s) => ({ done: {
		...s.done,
		[id]: !s.done[id]
	} })),
	toggleBookmark: (id) => set((s) => ({ bookmarks: s.bookmarks.includes(id) ? s.bookmarks.filter((x) => x !== id) : [...s.bookmarks, id] })),
	setNote: (id, note) => set((s) => ({ promptNotes: {
		...s.promptNotes,
		[id]: note
	} }))
}), {
	name: "citeworthy-progress",
	storage: createJSONStorage(() => typeof window === "undefined" ? memoryStorage : localStorage)
}));
//#endregion
export { useProgress as t };
