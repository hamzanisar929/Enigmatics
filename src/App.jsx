import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
// import Video from "./components/Video";
// import Languages from "./components/Languages";
import Snippets from "./components/Snippets";
import Heroui from "./components/design/Heroui";
import Heroui2 from "./components/design/Heroui2";
import Heroui3 from "./components/design/Heroui3";
import Heroui4 from "./components/design/Heroui4";
// import Linkedin from "./components/design/Linkedin";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Snippets />
        {/* <Video /> */}
        <Heroui />
        <Heroui2 />
        <Heroui3 />
        <Heroui4 />
        <Footer />
        {/* <Languages /> */}
        {/* <Linkedin /> */}
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
