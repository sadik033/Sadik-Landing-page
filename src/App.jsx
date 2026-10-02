import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import Audience from "./components/Audience";
// import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import CustomPlan from "./components/CustomPlan";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-950">
      <Navbar />

      <main>
        <Hero />

        <Problem />

        <Services />

        <Workflow />

        <Audience />

        {/* <Work /> */}

        <Testimonials />

        <CustomPlan />

        <FAQ />

        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;