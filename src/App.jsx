import { useState, useEffect } from "react"
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"

import Navbar from "./components/navbar/navbar"

import img1 from "/pictures/1.png"
import img2 from "/pictures/2.png"
import img3 from "/pictures/3.png"

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
      <div className="h-screen bg-purple-500"></div>
    </>
  )
}

export default App
