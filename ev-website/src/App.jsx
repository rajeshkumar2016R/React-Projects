import { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbbar/Navbar";
import Hero from "./Components/Hero/Hero";



const App = () => {

  let HeroData = [
    {text1:"Dive into", text2: "What you Love"},
    {text1:"Indulge", text2: "Your Passion"},
    {text1:"Give into", text2: "Your passions"}
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false)
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero 
      playStatus={playStatus}
      HeroData = {HeroData[heroCount]}
      setPlayStatus = {setPlayStatus}
      setHeroCount = {setHeroCount}
      heroCount = {heroCount}
      />
    </div>
  )
}

export default App;