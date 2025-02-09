import React, { Button, Text, useState, number, style } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";

function MypageSet({ member, setMember, position }) {
  const navigate = useNavigate();
  const [id, setId] = useState(member[position].ID);
  const [pw, setPw] = useState(member[position].PW);
  const [name, setName] = useState(member[position].name);
  const [phone, setPhone] = useState(member[position].phone);
  const [address, setAddress] = useState(member[position].address);
  const [bank, setBank] = useState(member[position].bank);
  const [account, setAccount] = useState(member[position].account);
  const btnStyle = {
    color: "white",
    background: "#6CC0FF",
    padding: ".3rem .6rem",
    margin: "2rem 1rem",
    border: "1px #6CC0FF",
    borderRadius: ".40rem",
    fontSize: "1rem",
  };
  const Update = () => {
    /*myinfo는 배열형태가 아님, 수정기능 구현할때 주의할것(*[] 대괄호미사용)*/
    let tmp = member;
    tmp = {
      ...tmp,
      PW: pw,
      name: name,
      phone: phone,
      address: address,
      bank: bank,
      account: account,
    };
    console.log(tmp);
    setMember({ ...tmp });
  };

  return (
    <div
      style={{
        display: "block",
        flexWrap: "wrap",
        padding: "2rem 13rem",
        justifyContent: "center",
      }}
    >
      <p>
        <img
          src={member[position].src}
          alt={member[position].alt}
          title={member[position].title}
          width={member[position].width}
        />
      </p>
      <p>
        <h1>{member[position].name} 님</h1>
      </p>
      <p>아이디 {member[position].ID}</p>
      <p>
        비밀번호
        <input
          onChange={(e) => {
            setPw(e.target.value);
          }}
          value={pw}
        />
      </p>
      <p>
        연락처
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          value={phone}
        />
      </p>
      <p>
        주 소
        <input
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={address}
        />
      </p>

      <p>
        은행명
        <input
          onChange={(e) => {
            setBank(e.target.value);
          }}
          value={bank}
        />
      </p>
      <p>
        계좌번호
        <input
          onChange={(e) => {
            setAccount(e.target.value);
          }}
          value={account}
        />
      </p>
      <button style={btnStyle} onClick={() => navigate("/Mypage")}>
        <text>취소</text>
      </button>
      <button
        style={btnStyle}
        onClick={() => {
          navigate("/Mypage");
          Update();
        }}
      >
        <text>저장</text>
      </button>
    </div>
  );
}

export default MypageSet;
