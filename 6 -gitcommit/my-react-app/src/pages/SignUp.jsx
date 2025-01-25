import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 text-center md:text-left">
          <Link
            to="/"
            className="text-4xl font-semibold text-gray-800 dark:text-white"
          >
            <span className="px-2 py-1 bg-purple-500 text-white rounded-lg">
              ChandraSDE's
            </span>
          </Link>
          <p className="text-gray-600 mt-4 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
            assumenda perferendis. Repudiandae officia a ab cupiditate ratione
            voluptatem id assumenda quibusdam, nisi quis doloremque
            necessitatibus, aliquam cum sunt! Suscipit, molestiae.
          </p>
        </div>

        {/* Right Section - Signup Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Create an Account
          </h2>
          <form className="mt-6 space-y-4">
            {/* Username */}
            <div>
              <label className="block text-gray-600">Your username</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600">Your email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-600">Your password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
