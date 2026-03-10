import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCoinsbyId } from "../entities/coin/api";
import Chart from "../widgets/Chart";
function Coin() {
  const { id } = useParams();
  const [coin, setCoin] = useState<any>(null);

  useEffect(() => {
    async function fetchCoin() {
      const data = await getCoinsbyId(id!);
      setCoin(data);
    }
    fetchCoin();
  }, [id]);
  if (!coin) return <div>Loading ...</div>;
  return (
    <div>
      <h1>{<Chart id={id!} days={7} />}</h1>
    </div>
  );
}

export default Coin;
