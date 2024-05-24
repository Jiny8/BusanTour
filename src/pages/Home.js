import React, { Button, Text, useState, number, style } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import "./Home.css";

function Home({ notice, tour, setTour, member, setMember, position }) {
  const navigate = useNavigate();
  const btnStyle = {
    color: "white",
    background: "#6CC0FF",
    padding: ".3rem .6rem",
    margin: "2rem",
    border: "1px #6CC0FF",
    borderRadius: ".40rem",
    fontSize: "1rem",
  };
  const divGroupStyle = {
    position: "static",
  };
  const divStyle = {
    display: "inline-block",
    margin: "10px",
  };
  return (
    <>
      <div class="slider">
        <div class="slide">
          {" "}
          <img
            src="https://visitbusan.net/uploadImgs/files/cntnts/20221115110556661_wufrotr"
            alt="여행상품1.png"
            title="여행상품1.png"
            width="
        600px"
          />
        </div>
        <div class="slide">
          {" "}
          <img
            src="https://visitbusan.net/uploadImgs/files/cntnts/20221115110556317_wufrotr"
            alt="여행상품1.png"
            title="여행상품1.png"
            width="
        600px"
          />
        </div>
        <div class="slide">
          {" "}
          <img
            src="https://visitbusan.net/uploadImgs/files/cntnts/20220413144137777_wufrotr"
            alt="여행상품1.png"
            title="여행상품1.png"
            width="
       600px"
          />
        </div>
        <div class="slide">
          {" "}
          <img
            src="https://visitbusan.net/uploadImgs/files/cntnts/20221115110601843_wufrotr"
            alt="여행상품1.png"
            title="여행상품1.png"
            width="
       600px"
          />
        </div>
      </div>
      <p />
      <hr color="#6CC0FF" />
      <h3>*대표 여행상품 TOP3</h3>
      <div style={divGroupStyle}>
        {tour.map((i) => (
          <div style={divStyle}>
            <Link to={"/Tourbook/" + i.idxx} key={i.idxx}>
              <p />
              <img src={i.src} alt={i.alt} title={i.title} width={i.width} />
              <p />
              <p />
              {i.name}
              <p />
            </Link>
          </div>
        ))}
      </div>
      <button
        style={btnStyle}
        onClick={() => {
          navigate("/TourList");
        }}
      >
        추천 더보기 ▶▶
      </button>
      <p />
      {console.log(tour)}
      <p />
    </>
  );
}

export default Home;
