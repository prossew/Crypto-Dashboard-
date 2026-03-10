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
    if (!current.some((f) => f.name === coin.name)) {
      set({ favorites: [...current, coin] });
    }
  },
  removeFavorite: (coin) => {
    const current = get().favorites;
    set({ favorites: current.filter((f) => f.name !== coin.name) });
  },
  toggleFavorite: (coin) => {
    const current = get().favorites;
    if (current.some((f) => f.name === coin.name)) {
      get().removeFavorite(coin);
    } else {
      get().addFavorite(coin);
    }
  },
}));
