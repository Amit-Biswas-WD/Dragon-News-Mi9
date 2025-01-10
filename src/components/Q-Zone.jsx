import iOne from "../assets/swimming.png";
import iTwo from "../assets/class.png";
import iThree from "../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-gray-50">
      <h2 className="text-lg font-semibold my-4 text-start">Q-Zone</h2>
      <div>
        <img className="p-4" src={iOne} alt="" />
        <img className="p-4" src={iTwo} alt="" />
        <img className="p-4" src={iThree} alt="" />
      </div>
    </div>
  );
};

export default QZone;
