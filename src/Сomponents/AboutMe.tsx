import Yulduz from "../Imgs/yulduz.jpg";

export default function AboutMe() {
  return (
    <div>
      <div className="bg-Collects-about" id="aboutme">
        <div className="container">
          <div>
            <h2 className="About-h1">About Me</h2>
            <div className="About-all">
              <img className="About-img" src={Yulduz} alt="" />
              <p className="About-p">
                I'm Yulduz! I've been a local guide here since 2017, and I'm
                excited to share my knowledge with you. My love for my home is
                supported by my tourism education and a Master's degree in
                religious tourism. I look forward to showing you the heart of
                our region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
