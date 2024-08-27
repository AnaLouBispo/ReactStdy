import logo from "../assets/pensando-removebg-preview.png";
import "./banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <img src={logo} className="imgBanner" alt="" />
      <div className="content">
        <h1>Bussines Ideia</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Quas animi dolor fuga illum optio dolore esse officia eiusn <br />
          sciunt quo pariatur, ipsum ad vitae ut sit. At adipisci atqu <br />e
          dolores?
        </p>
        <p>Come Think With Us XD</p>
      </div>
    </div>
  );
};
export default Banner;
