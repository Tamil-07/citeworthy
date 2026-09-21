import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ProgressState = {
  done: Record<string, boolean>;
  bookmarks: string[];
  promptNotes: Record<string, string>;
  toggle: (id: string) => void;
  toggleBookmark: (id: string) => void;
  setNote: (id: string, note: string) => void;
};

const memoryStorage = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
};

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      done: {},
      bookmarks: [],
      promptNotes: {},
      toggle: (id) =>
        set((s) => ({ done: { ...s.done, [id]: !s.done[id] } })),
      toggleBookmark: (id) =>
        set((s) => ({
          bookmarks: s.bookmarks.includes(id)
            ? s.bookmarks.filter((x) => x !== id)
            : [...s.bookmarks, id],
        })),
      setNote: (id, note) =>
        set((s) => ({ promptNotes: { ...s.promptNotes, [id]: note } })),
    }),
    {
      name: "citeworthy-progress",
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? memoryStorage : localStorage,
      ),
    },
  ),
);
