import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import data from "./dummyData";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <h4>Welcome back 👋</h4>
        <TuneIcon />
      </div>

      <div className="overview">
        <div className="text">
          <p>Total Balance</p> <RemoveRedEyeIcon />{" "}
        </div>
        <div className="amount">
          {" "}
          <h1>$12,635.00</h1>
        </div>
      </div>

      <table className="table">
        <tr className="table-header">
          <th>Waste Type</th>
          <th>Kilogram</th>
          <th>Price</th>
        </tr>
        {data?.map((item, key) => {
          let { name, weight, price } = item;
          return (
            <tr>
              <td>{name}</td>
              <td>{weight}</td>
              <td>${price}</td>
            </tr>
          );
        })}
      </table>

      <div className="navigation">
        <div className="nav-item">
          <HomeOutlined />
          <p>Home</p>
        </div>

        <div className="nav-item">
          <AccessTimeIcon />
          <p>Transactions</p>
        </div>

        <div className="nav-item">
          <MapsUgcRoundedIcon />
          <p>Chat support</p>
        </div>

        <div className="nav-item">
          <AccountCircleOutlinedIcon />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
