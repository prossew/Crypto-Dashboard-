import { create } from "zustand";
import type { CoinInterface } from "../../../entities/coin/api";

interface FavoritesState {
  favorites: CoinInterface[];
  addFavorite: (coin: CoinInterface) => void;
  removeFavorite: (coin: CoinInterface) => void;
  toggleFavorite: (coin: CoinInterface) => void;
}

export const useFavoriteStore = create<FavoritesState>((set, get) => ({
  favorites: [],
  addFavorite: (coin) => {
    const current = get().favorites;
    if (!current.some((f) => f.id === coin.id)) {
      set({ favorites: [...current, coin] });
    }
  },
  removeFavorite: (coin) => {
    const current = get().favorites;
    set({ favorites: current.filter((f) => f.id !== coin.id) });
  },
  toggleFavorite: (coin) => {
    const current = get().favorites;
    if (current.some((f) => f.id === coin.id)) {
      get().removeFavorite(coin);
    } else {
      get().addFavorite(coin);
    }
  },
}));
