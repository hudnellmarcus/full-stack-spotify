import { create } from "zustand";

interface PlayerStore {
    ids: string[];
    activeId?: string; 
    setId: (id: string) => void;
    setIds: (ids: string[]) => void;
    reset: () => void;
};

const usePlayer = create<PlayerStore>((set) => ({
    ids: [], // every time play is clicked we will set a list of ids to play in playlist
    activeId: undefined, // currently clicked id for player to start from 
    setId: (id: string) => set({ activeId: id }),
    setIds: (ids: string[]) => set({ ids: ids }),
    reset: () => set({ ids: []})
}));

export default usePlayer; 