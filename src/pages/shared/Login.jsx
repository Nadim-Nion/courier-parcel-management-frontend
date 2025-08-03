import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setServerError("");

      // 1. Send login request
      const res = await axios.post("http://localhost:5000/api/v1/auth/login", {
        email: data.email,
        password: data.password,
      });

      console.log("res:", res.data);

      const { accessToken, refreshToken } = res.data.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      // Decode the token to extract role
      const decoded = jwtDecode(accessToken);
      const role = decoded?.role;

      // 4. Navigate based on role
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "customer") {
        navigate("/customer-dashboard");
      } else {
        setServerError("Invalid user role");
      }
    } catch (error) {
      setServerError(
        error?.response?.data?.message || "Login failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen px-4">
      <div className="hero-content flex-col w-full max-w-6xl">
        {/* Title Side */}
        <div className="text-center w-full lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">
            Login now!
          </h1>
          <p className="py-4 text-sm md:text-base">
            Enter your credentials to access your account.
          </p>
        </div>

        {/* Right Side (Form Card) */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body space-y-2"
          >
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Server Error */}
            {serverError && (
              <div className="text-red-500 text-sm">{serverError}</div>
            )}

            {/* Link */}
            <div className="text-sm">
              New to our platform?{" "}
              <Link className="link link-hover text-blue-500" to="/register">
                Create an account
              </Link>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button
                className="btn btn-outline btn-primary w-full"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
