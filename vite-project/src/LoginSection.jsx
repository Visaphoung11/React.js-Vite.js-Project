import { FcGoogle } from "react-icons/fc";

const LoginSection = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white py-10 px-4">
      {/* Home Button */}
      <div className="self-start ml-2 sm:ml-20 lg:ml-60">
        <button className="bg-orange-400 text-white px-8 py-3 text-lg sm:text-xl font-bold rounded-full">
          Home
        </button>
      </div>

      {/* Login Sections Wrapper */}
      <div className="flex flex-col lg:flex-row justify-between w-full lg:w-3/4 mt-10 space-y-10 lg:space-y-0">
        {/* Student Login */}
        <div className="text-start w-full lg:w-96">
          {/* <h1 className="text-4xl sm:text-5xl font-bold ">Student Login</h1> */}
          <h1
            style={{ fontFamily: "'Boogaloo', cursive" }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Student Login
          </h1>

          <p className="text-gray-600 mt-2 mb-6 text-lg">
            Don’t know your class code? Ask a Teacher
          </p>
          <div className="flex">
            <div className="flex items-center border border-black rounded-full px-4 py-3 w-full text-lg">
              <input
                type="text"
                placeholder="Enter class code"
                className="flex-1 outline-none text-gray-500 text-lg"
              />
            </div>
            <div>
              <button
                style={{ fontFamily: "'Boogaloo', cursive" }}
                className="ml-4 bg-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg sm:text-xl"
              >
                Go!
              </button>
            </div>
          </div>
        </div>

        {/* Educator Login */}
        <div className="text-center w-full lg:w-96">
          <h1
            style={{ fontFamily: "'Boogaloo', cursive" }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Educator Login
          </h1>
          <a
            href="#"
            className="flex items-center border border-black rounded-full px-8 py-3 mt-6 text-gray-700 w-full justify-center text-lg sm:text-xl"
          >
            <FcGoogle className="text-3xl sm:text-4xl mr-3" /> Continue with
            Google
          </a>
          <p className="my-6 text-black text-lg">Or</p>
          <a
            href="#"
            className="border border-pink-500 text-pink-500 px-8 py-3 rounded-full font-bold w-full block text-lg sm:text-xl"
          >
            Enter Educator Code?
          </a>
          <p className="mt-6 text-pink-500 font-bold cursor-pointer text-lg sm:text-xl">
            Don’t have an account?
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
