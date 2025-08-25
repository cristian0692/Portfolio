import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  imageURLs: string[];
  index: number;
};

type Actions = {
  setImages: (URLs: string[], index: number) => void;
  removeImages: () => void;
  moveRight: () => void;
  moveLeft: () => void;
};

export const useImageStore = create<State & Actions>()(
  immer((set) => ({
    imageURLs: [],
    index: 0,
    setImages: (URLs: string[], index: number) =>
      set((state) => {
        state.imageURLs = URLs;
        state.index = index;
      }),
    removeImages: () =>
      set((state) => {
        state.imageURLs = [];
        state.index = 0;
      }),
    moveRight: () =>
      set((state) => {
        state.index += 1;
        state.index %= state.imageURLs.length;
      }),
    moveLeft: () =>
      set((state) => {
        state.index -= 1;
        if (state.index <= -1) {
          state.index = state.imageURLs.length - 1;
        }
      }),
  }))
);
