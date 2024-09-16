import seriesData from "../api/sendData.json";
import Series from "./Series";
const Netflix = () => {
  return (
    <>
      <ul className="grid grid-three--cols">
        {seriesData.map((currElem) => {
          return <Series currElem={currElem} key={currElem.id} />;
        })}
      </ul>
    </>
  );
};

export default Netflix;
