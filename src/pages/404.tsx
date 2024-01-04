import { Header } from "../components/Typography";
import Footer from "../components/templates/Footer";
import Navbar from "../components/templates/Navbar";

export default function Page() {
  return (
    <>
      <Navbar background={true} wave={false} />
      <div className="container flex">
        <h1 className="m-auto mt-20 text-5xl font-bold md:text-6xl">
          404 Not Found
        </h1>
      </div>
      <Footer />
    </>
  );
}
