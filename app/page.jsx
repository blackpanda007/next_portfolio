import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import PageWrapper from "@/components/PageWrapper";
import { jetbrains } from "@/components/fonts";

const Home = () => {
  return (
    <PageWrapper>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-24 pl-0">
            {/* text */}
            <div
              className={`${jetbrains.className} text-black xl:text-white text-center xl:text-left order-2 xl:order-none`}
            >
              <span className="text-xl bg-gradient-to-b font-extrabold">
                Data Scientist | FrontEnd Developer
              </span>
              <h1 className="h1 mb-6 ">
                Hello I'm <br />
                <span className="text-green-500 [text-shadow:_10px_3px_8px_#000000]">
                  SATYAM KUMAR
                </span>
              </h1>
              <p className="max-w-[500px] mb-9 ">
                I excel in Data driven insights and I am a React developer too
                being proficient in various programming languges and frameworks.
              </p>
              {/* download button and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 text-white"
                >
                  <span className="font-extrabold">Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none ">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </PageWrapper>
  );
};

export default Home;
