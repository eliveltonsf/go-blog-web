'use client'

import {create} from 'zustand';

type State = {
  page: number
  setPage: (value:number) => void;
};

export const useCurrentPage = create<State>((set) => ({
  page: 1,
  setPage: (value) => set(() => ({ page: value })),
}));

