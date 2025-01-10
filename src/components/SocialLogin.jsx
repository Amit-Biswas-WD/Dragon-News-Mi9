import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold my-4">Login With</h2>
      <div className="flex flex-col gap-4 w-full">
        <button className="btn flex items-center gap-4">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn flex items-center gap-4">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
