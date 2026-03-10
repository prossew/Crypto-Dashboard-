import axios from "axios";

export interface CoinInterface {
  name: string;
  current_price: number;
}

export async function getCoins(): Promise<CoinInterface[]> {
  try {
    const response = await axios.get("api_url");
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
