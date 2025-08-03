import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // TODO: Call login API or AuthContext
  };

  return (
    <div className="hero bg-base-200 min-h-screen px-4">
      <div className="hero-content flex-col  w-full max-w-6xl">
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
            {/* Email Field */}
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

            {/* Password Field */}
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

            {/* Link to Register */}
            <div className="text-sm">
              New to our platform?{" "}
              <Link className="link link-hover text-blue-500" to="/register">
                Create an account
              </Link>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button className="btn btn-outline btn-primary w-full">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
