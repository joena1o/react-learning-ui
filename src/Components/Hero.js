import Lottie from "lottie-react";
import groovyWalkAnimation from "../Assets/65012-learning-concept.json";

export default function Hero() {

    return (

        <div className="hero">


            <div className="inner">

            

            <div className="hero-info">
                <div>MAU E-RESOURCE, ALL YOUR E-LEARNING MATERIALS IN ONE PLACE</div>
                <br></br>
                <div>
                    <button className="btn btn-outline-dark">Learn More</button>
                </div>
            </div>


            <div className="hero-icon">
                <div className="display">
             <Lottie animationData={groovyWalkAnimation} />;
                </div>
            </div>


            </div>

            


        </div>

    );


}