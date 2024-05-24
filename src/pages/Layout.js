import { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Session from "react-session-api";

const Layout = ({ member, position, setPosition, notice }) => {
  const btnStyle = {
    color: "black",
    background: "white",
    padding: ".2rem .7rem",
    margin: ".3rem",
    border: "1px #6CC0FF",
    borderRadius: ".40rem",
    font: "1rem italic bold",
    lineHeight: 1,
  };
  const btnStyleLogin = {
    float: "right",
    color: "white",
    background: "#6CC0FF",
    padding: ".2rem .6rem",
    margin: ".2rem",
    border: "1px #6CC0FF",
    borderRadius: "1.40rem",
    fontSize: "0.6rem",
    lineHeight: 1.5,
  };
  const btnStyleHome = {
    textalign: "center",
    color: "#6CC0FF",
    background: "white",
    padding: "0.1rem 3rem",
    margin: "0.1rem",
    border: "1px #6CC0FF",
    borderRadius: ".40rem",
    font: "2.5rem italic bold",
    lineHeight: 1,
  };
  const navigate = useNavigate();
  const [logname, setLogname] = useState("로그인");

  useEffect(() => {
    //let member = JSON.parse(sessionStorage.getItem("member"));
  }, []);

  const login = () => {
    if (position == 0) {
      navigate("/login");
      return alert("로그인 정보가 없습니다. 로그인 완료해주세요.");
    } else if (position != 0) {
      navigate("/Mypage");
    }
  };

  const logout = () => {
    let member = JSON.parse(sessionStorage.getItem("member"));
    member?.id === "admin" || member?.id === "user"
      ? sessionStorage.removeItem("member")
      : navigate("/login");
  };

  return (
    <>
      <nav>
        <p>
          <button
            style={btnStyleLogin}
            onClick={() => {
              logout();
            }}
          >
            <text>{member[position].ID == "" ? "로그인" : "로그아웃"}</text>
          </button>

          <text
            style={{ float: "right", padding: "0.5rem", fontWeight: "bold" }}
          >
            {member[position].name}
          </text>
        </p>
        <p>
          <button style={btnStyleHome} onClick={() => navigate("/")}>
            <text>부산어때?</text>
          </button>
        </p>
        <p>
          <ul display="block">
            <button style={btnStyle} onClick={() => navigate("/TourList")}>
              <text>추천여행</text>
            </button>
            <button style={btnStyle} onClick={() => navigate("/TourInfo")}>
              <text>축제.공연</text>
            </button>
            <button style={btnStyle} onClick={() => navigate("/Reviews")}>
              <text>여행리뷰</text>
            </button>
            <button style={btnStyle} onClick={() => navigate("/QnA")}>
              <text>QnA</text>
            </button>
            <button
              style={btnStyle}
              onClick={() => {
                login();
              }}
            >
              <text>마이페이지</text>
            </button>
          </ul>
        </p>
      </nav>
      <p>
        <hr color="#6CC0FF" />
      </p>
      <Outlet />
      {/* <Outlet /> 의 아래 작성된 내용은 홈페이지의 하단*/}
      <hr color="#6CC0FF" />
      <ul>
        <h3>
          대표전화 {notice.tel}
          {" ( "}콜센터 {notice.officehours}
          {"  )"}
        </h3>
        <p>
          사업자 : {notice.name}
          {"  ("} {notice.corporatenumber}
          {"  )"}
        </p>
        <p> 소재지 : {notice.address}</p>
        <p> 입금계좌 : {notice.account}</p>
      </ul>
    </>
  );
};

export default Layout;
