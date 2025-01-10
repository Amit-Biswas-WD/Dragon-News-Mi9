import moment from "moment/moment";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 my-6">
      <div className="">
        <img className="font-normal w-[300px]" src={logo} alt="logo" />
      </div>
      <h2 className="text-lg font-normal text-gray-500">
        Journalism Without Fear or Favour
      </h2>
      <p className="text-lg font-normal text-gray-500">
        {moment().format("LLLL")}
      </p>
    </div>
  );
};

export default Header;
