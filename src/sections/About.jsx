import React from "react";

const About = () => {
    return (
        <section className="c-space my-2">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3 bg-[#121111] border-back-300 rounded-lg">
                    <div className="container  p-2 flex flex-col">
                        <img
                            src="/assets/grid1.png"
                            alt="grid-1"
                            className="w-fulls sm:h-[271px] h-fit object-contain my-6 "
                        />

                        <div>
                            <p className="grid-headtext">Hi, I'm Vignesh N</p>
                            <p className="grid-subtext">
                                A web developer with a passion for turning ideas into innovative
                                web applications.{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3  ">
                    <div className="grid-container bg-[#121111] border-black ">
                        <div className="flex justify-center">
                            <img
                                src="assets/grid2.png"
                                alt="grid-2"
                                className="w-full sm:w-[276px] h-fit object-contain"
                            />
                        </div>

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in Javascript with a focus on React and Next.js
                                ecosystems
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container bg-[#121111] border-black ">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit justify-center items-center"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
