import axios from "axios";

export interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
  market_cap: number;
  price_change_percentage_24h: number;
}

export async function getCoins(): Promise<CoinInterface[]> {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1",
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка загрузки монет:", error);
    return [];
  }
}

export async function getCoinsbyId(id: string): Promise<any> {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка загрузки монеты:", error);
    return [];
  }
}
