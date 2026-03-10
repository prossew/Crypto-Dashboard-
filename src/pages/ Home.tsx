import { useState, useEffect } from "react";
import { getCoins } from "../entities/coin/api";
import type { CoinInterface } from "../entities/coin/api";

function Home() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCoins() {
      const data = await getCoins();
      setCoins(data);
      setLoading(false);
    }
    fetchCoins();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!coins.length) return <div>No coins found</div>;
  
  return <div>Home</div>;
}

export default Home;
