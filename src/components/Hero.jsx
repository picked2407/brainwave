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
            It is not what you know&nbsp;&nbsp;it is who you know {` `}
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
Elevate your professional journey by joining our exclusive community. Forge meaningful connections with successful individuals, opening doors to potential clients, partners, and investors. Experience elite networking that goes beyond traditional boundaries. - > Elevate your success journey by joining our exclusive community. Get in touch with meaningful connections, including successful traders of all kind, business/agency owners, biohackers. Open doors to potential clients, partners, and investors. Experience elite networking that goes beyond traditional boundaries.
          </p>
          <Button href="https://discord.gg/kZaWfZHRY3" white>
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
