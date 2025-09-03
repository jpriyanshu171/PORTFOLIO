import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <MyWork />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
