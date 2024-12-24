import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('submitted', password,);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-900 text-white">
      <div className="border-[#00ADB5] border-2 p-5 sm:p-10 md:p-14 lg:p-20 rounded-xl w-11/12 max-w-md">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col gap-5 items-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="w-full border-2 border-[#393E46] px-4 py-3 rounded-md text-sm sm:text-base md:text-lg lg:text-xl outline-none bg-transparent focus:border-[#00ADB5]"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="w-full border-2 border-[#393E46] px-4 py-3 rounded-md text-sm sm:text-base md:text-lg lg:text-xl outline-none bg-transparent focus:border-[#00ADB5]"
            type="password"
            placeholder="Enter your password"
          />
          <button className="w-full bg-[#00ADB5] px-6 py-3 rounded-md text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:bg-[#028C98] transition-all">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
