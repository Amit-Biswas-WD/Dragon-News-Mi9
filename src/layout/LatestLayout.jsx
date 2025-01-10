import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestLayout = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-3">
      <p className="bg-[#D72050] text-white p-2 px-4">Latest</p>
      <Marquee className="space-x-12" speed={40} pauseOnHover={true}>
        <Link to={`/news`}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
        </Link>
        <Link to={`/news`}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
        </Link>
        <Link to={`/news`}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestLayout;
