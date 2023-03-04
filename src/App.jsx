import { Tooltip, Skeleton, Result } from "antd";
import "antd/dist/antd.css";
import photo from "../src/img/photo.jpg";
import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { LINK_API_PORTO } from "./helper/constants";

const useFetch = ({ url, payload }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.post(url, payload);
      setData(res.data);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

const MediaSocialList = () => {
  const {
    data: { socialMedia },
    loading,
    error,
  } = useFetch({
    // url: "https://fd6d-18-141-193-247.ap.ngrok.io/api/get-dashboard",
    url: `${LINK_API_PORTO}get-dashboard`,
    payload: { lang: "en" },
  });

  console.log("data in MediaSocialList", socialMedia);

  if (loading) {
    return <Skeleton active />;
  }

  if (error) {
    return (
      <Result status="warning" title="There are some problems on servers" />
    );
  }

  const list = socialMedia
    .filter((data) => data.name !== "Link")
    .map((data) => {
      return (
        <Tooltip title="Click to Go">
          <div>
            <a href={data.link}>
              <div className="socialMediaCard">
                <img src={data.logo} alt="" srcset="" />
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
