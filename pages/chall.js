import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [doneMessage, setDoneMessage] = useState();
  const onValid = (data, e) => {
    setDoneMessage("Thank you");
  };
  const onInvalid = (errors) => {
    setDoneMessage("입력 값을 확인해주세요");
    console.log(errors);
  };
  return (
    <form
      className="flex flex-col justify-evenly m-10 p-10 border-2 border-teal-700"
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <div>
        <span>Name: </span>
        <input
          className="bg-slate-100 border-teal-500 border-2 rounded-md pl-2"
          {...register("name", { required: "Please write down your name" })}
          type="text"
          placeholder="Name"
        />
        <span>{errors.name?.message}</span>
      </div>
      <div>
        <span>Email: </span>
        <input
          className="bg-slate-100 border-teal-500 border-2 rounded-md pl-2"
          {...register("email", {
            required: "Please write down your email",
            validate: {
              naverCheck: (value) =>
                value.includes("@naver.com") || "Only @naver E-mail allowed",
            },
          })}
          type="email"
          placeholder="Only @naver.com"
        />
        <span>{errors.email?.message}</span>
      </div>
      <div>
        <span>Password: </span>
        <input
          className="bg-slate-100 border-teal-500 border-2 rounded-md pl-2"
          {...register("password", {
            required: "Please write down your password",
            minLength: {
              value: 10,
              message: "Password has to be more than 10 charactors",
            },
          })}
          type="password"
          placeholder="Min 10 charactors"
        />
        <span>{errors.password?.message}</span>
      </div>
      <div>
        <input
          className="bg-teal-800 border-teal-500 border-2 rounded-md w-20 font-extrabold text-center"
          type="submit"
          value="Login"
        />
        <span>{doneMessage}</span>
      </div>
    </form>
  );
}
