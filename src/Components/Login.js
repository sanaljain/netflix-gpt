import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-screen h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black mx-auto right-0 left-0 my-24 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl py-4 font-bold">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="pt-4 pb-2 px-4 leading-normal my-4 w-full bg-gray-700 bg-opacity-60 border border-gray-500/80 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="pt-4 pb-2 px-4 leading-normal my-4 w-full bg-gray-700 bg-opacity-60 border border-gray-500/80 rounded-md"
        />
        <button className="bg-red-600 py-2 my-6 w-full rounded-md">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
