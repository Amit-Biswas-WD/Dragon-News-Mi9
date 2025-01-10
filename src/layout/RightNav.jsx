import FindUs from "../components/FindUs";
import QZone from "../components/Q-Zone";
import SocialLogin from "../components/SocialLogin";

const RightNav = () => {
  return (
    <div>
      <SocialLogin />
      <FindUs/>
      <QZone/>
    </div>
  );
};

export default RightNav;
