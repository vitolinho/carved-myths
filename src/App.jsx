import { useState, useEffect } from "react"
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"

import Navbar from "./components/navbar/navbar"
import Button from "./components/button/button"

import img1 from "/pictures/1.png"
import img2 from "/pictures/2.png"
import img3 from "/pictures/3.png"
import img5 from "/pictures/5.png"
import img6 from "/pictures/6.png"
import img7 from "/pictures/7.png"
import img8 from "/pictures/8.png"

function App() {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const handleWindowResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }
    window.addEventListener("resize", handleWindowResize)
    handleWindowResize()
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])
  return (
    <>
      <ParallaxBanner className="h-screen relative z-0">
        <ParallaxBannerLayer image={isDesktop ? img1 : img2} speed={-10} className="z-0" />
      </ParallaxBanner>
      <Navbar/>
      <div className="absolute top-0 w-full h-screen flex justify-center items-center">
        <p className="text-center text-5xl leading-[5.75rem] uppercase Gallery-Modern text-white lg:header-1">
          carved<br></br>myths
        </p>
      </div>
      <div className="bg-egg-shell relative w-full mt-[-4rem] flex flex-col justify-center items-center gap-y-[3.75rem] px-5 py-20 rounded-t-3xl mb-[12.5rem] lg:mb-[15rem] lg:px-[4.5rem] lg:gap-y-20">
        <p className="body-lg text-carbone">welcome to</p>
        <div className="w-full flex flex-col justify-center items-center gap-y-10 lg:gap-y-20">
          <div className="w-full flex flex-col justify-center items-center gap-y-10 lg:flex-row lg:justify-between">
            <p className="header-3 text-black lg:header-2">Carved</p>
            <p className="body-md text-carbone w-[18.75rem] text-center lg:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          </div>
          <img src={img3} alt="3rd picture" className="w-full"/>
        </div>
      </div>
      <div className="w-full relative mb-[12.5rem] lg:mb-[15rem]">
        <ParallaxBanner className="h-screen relative brightness-50 lg:hidden">
          <ParallaxBannerLayer image={img5} speed={-10} className="z-0" />
        </ParallaxBanner>
        <video src="/statue.mp4" loop autoPlay muted className="w-screen h-screen object-cover brightness-50 hidden lg:block"/>    
        <div className="absolute top-0 w-full h-full flex flex-col gap-y-10 px-5 py-10 items-start justify-center lg:px-[4.5rem] lg:gap-y-[3.75rem]">
          <p className="header-2 text-white">
            Myths
          </p>
          <p className="body-md text-silver lg:w-[18.75rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </p>
          <Button value="button" className="lg:w-fit"/>
        </div>
      </div>
      <div className="flex flex-col gap-y-[3.75rem] py-10 mb-[12.5rem] lg:mb-[15rem]">
        <div className="w-full flex flex-row items-center px-5 lg:px-[4.5rem]">
          <img src={img6} alt="sixth picture" className="w-[19rem] h-[15.313rem] lg:w-[41.688rem] lg:h-[35rem]"/>
        </div>
        <div className="flex flex-row items-center justify-between px-5 lg:px-[4.5rem] lg:justify-end lg:gap-x-[17.5rem]">
          <p className="header-3 text-black lg:header-2">Geia</p>
          <img src={img7} alt="seventh picture" className="w-[11.563rem] h-[17.313rem] lg:w-[27.375rem] lg:h-[39.375rem]"/>
        </div>
        <div className="w-full flex flex-row items-center px-5 lg:px-[4.5rem]">
        <img src={img8} alt="eighth picture" className="w-[13.813rem] h-[6.5rem] lg:w-[28.25rem] lg:h-[16.125rem]"/>
        </div>
      </div>
      <div className="bg-carbone rounded-t-3xl flex flex-col gap-y-[3.75rem] items-center justify-center px-5 py-20 lg:px-[4.5rem]">
        <div className="w-full flex flex-col gap-y-[3.75rem] items-center justify-center lg:flex-row lg:justify-between">
          <a href="#" className="button text-white">carved myths</a>
          <div className="w-full flex flex-row justify-between lg:gap-x-5 lg:justify-normal lg:w-fit">
            <a href="#" className="button text-silver">Link 1</a>
            <a href="#" className="button text-silver">Link 2</a>
            <a href="#" className="button text-silver">Link 3</a>
            <a href="#" className="button text-silver">Link 4</a>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-between">
          <a href="https://www.linkedin.com/in/vitomirlaces/" target="_blank" className="body-md text-silver" rel="noreferrer">© VITOMIRLACES</a>
          <p className="body-md text-silver">2023</p>
        </div>
      </div>
    </>
  )
}

export default App
