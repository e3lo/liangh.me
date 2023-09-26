import NavigationBar from "../components/NavigationBar";
import HeroBanner from "../components/HeroBanner";
import CardBanner from "../components/CardBanner";
import { useRef } from "react";

// Trial firebase stuff
import {
  handleSubmit,
  handleGetData,
  handleGetProjects,
} from "../handles/handleFirebase";

function Home() {
  const dataRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: any) => {
    console.log(dataRef.current.value);
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };

  return (
    <>
      <NavigationBar />
      <div className="md:h-screen bg-zinc-800 flex justify-center">
        <HeroBanner />
      </div>
      <div className="bg-zinc-800 flex justify-center">
        <CardBanner />
      </div>
      <form onSubmit={submitHandler} className=" bg-zinc-900">
        <input type="text" ref={dataRef} className=" text-zinc-900 " />
        <button type="submit">Save</button>
      </form>
      <button onClick={handleGetProjects} className="bg-zinc-900">
        {" "}
        Get info{" "}
      </button>
    </>
  );
}

export default Home;
