import Hero from "../Components/Hero";
import LandingFooter from "../Components/Landing-footer";
import Navbar from "../Components/Navbar";


export default function LandingPage(){

    return (
      
        <div className="landing-page">


            <Navbar />

            <Hero />

            <LandingFooter />

        </div>

    );

}