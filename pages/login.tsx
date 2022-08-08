import type { NextPage } from "next";
import SEO from "../components/Head";

const Login: NextPage = () => {
  return (
    <>
      <SEO title="Login" />
      <div>Login Page</div>
      <style jsx>
        {`
          div {
            text-align: center;
            font-size: 200px;
          }
        `}
      </style>
    </>
  );
};

export default Login;
