import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-8"> {/* Added mb-8 for margin-bottom */}
            It's not what you know know,&nbsp;&nbsp;It's who you know {` `}
            <span className="inline-block relative">
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-15 text-n-2 lg:mb-8">
Welcome to capital connections. We believe networking is the most powerful tool, because it unlocks access to opportunities, exchange of knowledge, enhances, visibility and recognition, and provides guidance. By connecting with others, you can have access to a broader range of resources, accelerate, personal and professional growth, and strengthen relationships. All of these components increases the chances of success by lining the right people in opportunities, making network a valuable asset.           <Button href="https://discord.gg/kZaWfZHRY3" white>
            Join Now
          </Button>
        </div>
      </div>
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        {/* Add your additional content here */}
      </div>
    </Section>
  );
};

export default Hero;
