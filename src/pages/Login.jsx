import React from "react";
import bgImg from "../assets/Login.png";
import user from "../assets/icons/user.svg";
import lock from "../assets/icons/lock.svg";
import login from "../assets/icons/login.svg";

import { useForm } from "react-hook-form";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch('username'));

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Login</h2>
          <span>register and enjoy the service</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="element-basic-user">
              <img className="icon" alt="Icon" src={user} />
            </div>
            <div>
              <div>
                <input
                  className="frame"
                  type="text"
                  {...register("username")}
                  placeholder="username"
                  style={{ fontSize: "20px" }} // Adjust the font size as needed
                />
              </div>

              <div className="element-basic-user">
                <img className="icon" alt="Icon" src={lock} />
              </div>
            </div>

            <input
              className="frame"
              type="password"
              {...register("password")}
              placeholder="password"
              style={{ fontSize: "20px" }}
            />

            {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
            <button className="button">
              <img className="icon" alt="Icon" src={login} />
            </button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
