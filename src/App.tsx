import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/SectionInit/Section";
import Project from "./Components/Projects/Project";
import SobreMim from "./Components/SobreMim/SobreMim";
import Footer from "./Components/Footer/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <Section />
      <Project />
      <SobreMim />
      <Footer />
    </>
  );
}
