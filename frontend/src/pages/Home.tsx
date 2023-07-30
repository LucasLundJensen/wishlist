import Navbar from "../components/Navbars/Navbar";

function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="container mx-auto mt-24">
        <h1 className="text-5xl font-bold text-center">
          The best way to manage
          <br />
          gifts for all celebrations
        </h1>
        <h3 className="text-xl text-dark-200 font-normal text-center mt-8">
          Organizing and managing gifts around all <br /> types of events have
          never been easier
        </h3>
      </div>
    </div>
  );
}

export default Home;
