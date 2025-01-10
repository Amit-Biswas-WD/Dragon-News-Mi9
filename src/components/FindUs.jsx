import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold my-4 text-start">Find Us On</h2>
      <div className="join flex *:bg-white join-vertical">
        <button className="btn justify-start join-item flex items-center gap-4">
          <FaFacebook /> Facebook
        </button>
        <button className="btn justify-start join-item flex items-center gap-4">
          <FaTwitter /> Twitter
        </button>
        <button className="btn justify-start join-item flex items-center gap-4">
          <FaInstagram /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
