import { useParams } from "react-router-dom";

function Coin() {
  const { id } = useParams();

  return (
    <div>
      <h1>User id {id}</h1>
    </div>
  );
}

export default Coin;
