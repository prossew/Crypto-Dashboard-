import type { CoinInterface } from "../entities/coin/api";

function CoinList({ coins }: { coins: CoinInterface[] }) {
  return (
    <div>
      {coins.map((coin) => (
        <div key={coin.name}>
          {coin.name}: ${coin.current_price}
        </div>
      ))}
    </div>
  );
}
export default CoinList;
