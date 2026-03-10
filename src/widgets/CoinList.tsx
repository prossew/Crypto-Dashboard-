import type { CoinInterface } from "../entities/coin/api";
import { useFavoriteStore } from "../features/auth/favorites/store";
import { Link } from "react-router-dom";

function CoinList({ coins }: { coins: CoinInterface[] }) {
  const { favorites, toggleFavorite } = useFavoriteStore();

  return (
    <div>
      {coins.map((coin) => {
        const isFavorite = favorites.some((f) => f.id === coin.id);
        return (
          <div key={coin.id}>
            <Link to={`/coin/${coin.id}`}>
              <img src={coin.image} alt={coin.name} width={24} height={24} />
              {coin.name} ({coin.symbol.toUpperCase()}): ${coin.current_price}
            </Link>
            <button onClick={() => toggleFavorite(coin)}>
              {isFavorite ? "⭐" : "☆"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CoinList;
