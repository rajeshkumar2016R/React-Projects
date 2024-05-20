import "./Hero.css";
import pause from '../../assets/pause_icon.png';
import play from '../../assets/play_icon.png';
const Hero = ({
  HeroData,
  playStatus,
  setPlayStatus,
  heroCount,
  setHeroCount,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{HeroData.text1}</p>
        <p>{HeroData.text2}</p>
        <div className="hero-dot-play">
            <ul className="hero-dot">
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?"orange":"herodot"}></li>
                <li onClick={()=>setHeroCount(1)} className={heroCount===1?"orange":"herodot"}></li>
                <li onClick={()=>setHeroCount(2)} className={heroCount===2?"orange":"herodot"}></li>
            </ul>
      </div>
      </div>
      
      <div className="hero-play">
            <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause:play} alt="" />
            <p>See the video</p>
      </div>
    </div>
  );
};

export default Hero;
