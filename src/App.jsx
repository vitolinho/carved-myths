import { useState, useEffect } from "react"
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"

import Navbar from "./components/navbar/navbar"

import img1 from "/pictures/1.png"
import img2 from "/pictures/2.png"

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
      <ParallaxBanner className="h-screen relative">
        <ParallaxBannerLayer image={isDesktop ? img1 : img2} speed={-10} className="z-0" />
      </ParallaxBanner>
      <Navbar/>
      <div className="absolute top-0 w-full h-screen flex justify-center items-center">
        <p className="text-center text-5xl leading-[5.75rem] uppercase Gallery-Modern text-white lg:header-1">
          carved<br></br>myths
        </p>
      </div>
      <div className="h-screen bg-blue-200"></div>
    </>
  )
}

export default App
