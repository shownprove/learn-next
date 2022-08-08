import type { NextPage } from "next";
import SEO from "../components/Head";

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Home" />
      <div>Home Page</div>
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

export default Home;
