import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    // TODO: Handle register logic (call API, context, etc.)
  };

  return (
    <div className="hero bg-base-200 min-h-screen px-4">
      <div className="hero-content flex-col w-full max-w-6xl">
        {/* Title Side */}
        <div className="text-center w-full lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">
            Register now!
          </h1>
          <p className="py-4 text-sm md:text-base">
            Create your account to get started.
          </p>
        </div>

        {/* Right Side (Form Card) */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body space-y-2"
          >
            {/* Name Field */}
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

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

            {/* Link to Login */}
            <div className="text-sm">
              Already have an account?{" "}
              <Link className="link link-hover text-blue-500" to="/login">
                Login here
              </Link>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button className="btn btn-outline btn-primary w-full">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
