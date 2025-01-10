import { Link } from "react-router-dom";
import user from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-4">
      <div></div>
      <div className="flex items-center gap-6">
        <Link to={`/home`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/career`}>Career</Link>
      </div>
      <div className="flex items-center gap-6">
        <img src={user} alt="user" />
        <button className="btn btn-neutral">login</button>
      </div>
    </div>
  );
};

export default Navbar;
