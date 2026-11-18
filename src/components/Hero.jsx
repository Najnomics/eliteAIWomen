import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";
import styles from "../style";
import { robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row lg:px-16 sm:px-4 flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"></div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[45px] text-white ss:leading-[95.8px] leading-[60px]">
            AI Women Rising:
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">
              {" "}
              Empowering Marginalized Women Through AI{" "}
            </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <Link
          to="/9care-ai"
          className="group mt-5 flex w-full max-w-[470px] items-center gap-4 rounded-2xl border border-secondary/30 bg-white/[0.06] p-4 transition-colors hover:border-secondary/70 hover:bg-white/[0.1] sm:p-5"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/20 text-2xl text-secondary">
            <FaHeartbeat aria-hidden="true" />
          </span>
          <span className="flex-1">
            <span className="block font-poppins text-base font-semibold text-white sm:text-lg">
              Meet 9Care AI
            </span>
            <span className="mt-1 block font-poppins text-sm leading-5 text-dimWhite">
              Smarter pregnancy care, right by your side
            </span>
          </span>
          <span
            aria-hidden="true"
            className="text-xl text-secondary transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </Link>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Unlock the power of AI to transform lives and foster economic
          independence.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
