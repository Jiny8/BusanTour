import React, { Button, Text, useState, number, style, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";
import Session from "react-session-api";

function Login({ member, setMember, position, setPosition }) {
  function save(id, pw) {
    let member = { id: id, pw: pw };
    sessionStorage.setItem("member", JSON.stringify(member));
  }

  function load() {
    let member = JSON.parse(sessionStorage.getItem("member"));
    if (member?.id === "admin") {
      setPosition("1");
      navigate("/");
    } else if (member?.id === "user") {
      setPosition("2");
      navigate("/");
    } else {
      setPosition("0");
    }
  }
  useEffect(() => {
    load();
  }, []);

  const btnStyle = {
    color: "white",
    background: "#6CC0FF",
    padding: ".2rem .6rem",
    margin: ".5rem",
    border: "1px #6CC0FF",
    borderRadius: ".40rem",
    fontSize: "1rem",
    lineHeight: 1.5,
  };
  const btnStyleInput = {
    padding: "2rem 5rem",
  };

  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const navigate = useNavigate();
  const connect = () => {
    if (ID == member[1].ID && PW == member[1].PW) {
      /*return alert은 return 이후는 실행되지않으니, setPosition("admin");은 그 전에입력해줄것!*/
      setPosition("1");
      save(ID, PW);
      navigate("/");
      return alert("admin(관리자)님, 반갑습니다.");
    } else if (ID == member[2].ID && PW == member[2].PW) {
      setPosition("2");
      save(ID, PW);
      navigate("/");
      return alert("user(회원)님, 반갑습니다.");
    } else if (true) {
      return alert("아이디 와 비밀번호가 일치하지않습니다.");
    }
  };
  return (
    <>
      <h2>{member[position].name}</h2>

      <p style={btnStyleInput}>
        <h3>
          아이디
          <input
            onChange={(e) => {
              setID(e.target.value);
            }}
            value={ID}
            placeholder={""}
            type="text"
            id="ID"
          />
        </h3>
        <h3>
          비밀번호
          <input
            onChange={(e) => {
              setPW(e.target.value);
            }}
            value={PW}
            placeholder={""}
            type="password"
          />
          <button
            style={btnStyle}
            onClick={() => {
              connect();
            }}
          >
            로그인
          </button>
        </h3>
      </p>
    </>
  );
}

export default Login;
