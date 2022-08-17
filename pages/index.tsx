import type { NextPage } from "next";
import SEO from "../components/Head";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-10 px-5 grid gap-10">
      <div className="bg-white p-10 rounded-2xl">first</div>
      <div className="bg-white p-10 rounded-2xl">second</div>
      <div className="bg-white p-10 rounded-2xl">third</div>
      <div className="bg-white p-10 rounded-2xl">forth</div>
    </div>
  );
};

export default Home;
