import axios from "axios";

export interface CoinInterface {
  name: string;
  current_price: number;
}

export async function getCoins(): Promise<CoinInterface[]> {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin&x_cg_demo_api_key=CG-r93bMRKb398kd4nkJ7aQVFB4");
    const result = response.data;
    const coinsArray = Object.keys(result).map((key) => ({
      name: key,
      current_price: result[key].usd,
    }));
    return coinsArray;
  } catch (error) {
    console.error("Ошибка загрузки монет:", error);
    return [];
  }
}
