import Navbar from "./components/Navbar";
import BuyNow from "./pages/BuyNow";
import Download from "./pages/Download";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="download">
      <Download />
      </section>
      <section id="buy">
        <BuyNow />
      </section>
    </>
  );
}
