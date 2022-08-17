import {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface LoginForm {
  id: string;
  password: string;
  nickname: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onChange" });
  const onValid: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
  };
  const onInvalid: SubmitErrorHandler<LoginForm> = (errors) => {
    console.log(errors);
  };
  return (
    <form
      className="flex justify-evenly m-10 p-10 border-2 border-teal-700"
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <input
        className="bg-slate-100 border-teal-500 border-2 rounded-md pl-2"
        {...register("id", { required: "Id 똑띠 입력하소" })}
        type="text"
        placeholder="Id"
      />
      {errors.id?.message}
      <input
        className="bg-slate-100 border-teal-500 border-2 rounded-md pl-2"
        {...register("password", { required: "비번 똑띠 입력하소" })}
        type="text"
        placeholder="Password"
      />
      {errors.password?.message}
      <input
        className="bg-slate-100 border-teal-500 border-2 rounded-md pl-2"
        {...register("nickname", { required: "별명 똑띠 입력하소" })}
        type="text"
        placeholder="Nickname"
      />
      {errors.nickname?.message}
      <input
        className="bg-teal-800 border-teal-500 border-2 rounded-md pl-2"
        type="submit"
        value="아이디 생성"
      />
    </form>
  );
}
