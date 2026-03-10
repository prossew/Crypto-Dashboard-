import axios from "axios";

const API_KEY = "CG-r93bMRKb398kd4nkJ7aQVFB4";
const headers = { "x-cg-demo-api-key": API_KEY };

export interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
  market_cap: number;
  price_change_percentage_24h: number;
}

export interface ChartData {
  prices: [number, number][];
}

export async function getCoins(): Promise<CoinInterface[]> {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1",
      { headers }
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
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка загрузки монеты:", error);
    return [];
  }
}

export async function getCoinChart(id: string, days: number): Promise<ChartData> {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.log("Ошибка загрузки", error);
    return { prices: [] };
  }
}