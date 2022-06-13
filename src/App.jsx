import { Tooltip } from "antd";
import "antd/dist/antd.css";
import faceIcon from "../src/img/face.svg";
import githubIcon from "../src/img/github.svg";
import instaIcon from "../src/img/insta.svg";
import linkedinIcon from "../src/img/linkedin.svg";
import photo from "../src/img/photo.jpg";
import portoIcon from "../src/img/porto.svg";
import "./App.scss";

const arrayDataV1 = [
  {
    link: "https://eri-eri.web.app/linkedin/index.html",
    name: "LinkedIn",
    img: linkedinIcon,
  },
  {
    link: "https://eri-eri.web.app/github/index.html",
    name: "GitHub",
    img: githubIcon,
  },
  {
    link: "https://eri-eri.web.app/portofolio/index.html",
    name: "Portofolio",
    img: portoIcon,
  },
  {
    link: "https://eri-eri.web.app/instagram/index.html",
    name: "Instagram",
    img: instaIcon,
  },
  {
    link: "https://eri-eri.web.app/facebook/index.html",
    name: "Facebook",
    img: faceIcon,
  },
];

const arrayData = [
  {
    link: "https://www.linkedin.com/in/baariq-fairuuz-azhar-098561151/",
    name: "LinkedIn",
    img: linkedinIcon,
  },
  {
    link: "https://github.com/BaariqAzhar",
    name: "GitHub",
    img: githubIcon,
  },
  {
    link: "#",
    name: "Portofolio",
    img: portoIcon,
  },
  {
    link: "https://www.instagram.com/baariqazhar.oo00/",
    name: "Instagram",
    img: instaIcon,
  },
  {
    link: "https://web.facebook.com/raqioreki23",
    name: "Facebook",
    img: faceIcon,
  },
];

const MediaSocialList = () => {
  const list = arrayData.map((data) => {
    return (
      <Tooltip
        title={data.name === "Portofolio" ? "Under Maintenance" : "Click to Go"}
      >
        <div>
          {console.log(data.link)}
          <a href={data.link}>
            <div className="socialMediaCard">
              <img src={data.img} alt="" srcset="" />
              <h2>{data.name}</h2>
            </div>
          </a>
        </div>
      </Tooltip>
    );
  });
  return list;
};

const App = () => {
  return (
    <div className="App">
      <div className="card">
        <img className="img" align="center" src={photo} alt="profile" />
        <h1 align="center">
          Baariq Fairuuz Azhar <br /> (Eri)
        </h1>
        <h6>LIST ACCOUNTS</h6>
        <MediaSocialList />
      </div>
    </div>
  );
};

export default App;
