import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
import data from "../data/horoscopes";

const Detail = () => {
  const { sign } = useContext(HoroscopeContext);
  const signInfo = data[sign];

  console.log(signInfo);

  return (
    <div className="details">
      <img src={signInfo.backgroundImg} alt="" />
      <h2>{signInfo.name}</h2>
      <h4>{signInfo.element}</h4>
      <h4>{signInfo.traits}</h4>
    </div>
  );
};

export default Detail;
