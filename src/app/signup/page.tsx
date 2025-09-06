import React from "react";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-50 p-4">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm transform transition-all duration-500 animate-fade-in-up">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center animate-pulse">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Create Account
          </h2>
          <p className="text-gray-600 mt-1">Join us and start your journey</p>
        </div>
        <form className="space-y-4">
          <div className="group">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-1 transition-colors group-focus-within:text-sky-600"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-black placeholder-black transition-all duration-300 hover:border-gray-300"
                placeholder="Enter your full name"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="w-4 h-4 text-gray-300 group-focus-within:text-sky-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1 transition-colors group-focus-within:text-sky-600"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-black placeholder-black transition-all duration-300 hover:border-gray-300"
                placeholder="Enter your email address"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="w-4 h-4 text-gray-300 group-focus-within:text-sky-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="group">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1 transition-colors group-focus-within:text-sky-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-black placeholder-black transition-all duration-300 hover:border-gray-300"
                placeholder="Create a strong password"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="w-4 h-4 text-gray-300 group-focus-within:text-sky-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-600 to-blue-600 text-white py-2.5 rounded-xl font-semibold hover:from-sky-700 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-100"
          >
            <span className="flex items-center justify-center">
              Create Account
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-sky-600 hover:text-sky-700 font-semibold transition-colors duration-200"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
