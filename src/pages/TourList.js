import React, { Button, Text, useState, number, style, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";

function TourList({ alltour, setAlltour, tour, setTour, mytour, setMyTour }) {
  const [datas, setDatas] = useState(alltour);
  const divGroupStyle = {
    position: "static",
  };
  const divStyle = {
    display: "inline-block",
    margin: "10px",
  };
  async function getDatas() {
    fetch(
      "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=ZlHtWroJ5vtZoCdZ24%2FYg25%2B%2F6l4ZCjrp19iGdmsJKQOng6tH28umr0KycuccrDvDy8ANWGyQHAO3iTL7Hdqyw%3D%3D&listYN=Y&arrange=A&contentTypeId=15&areaCode=6&sigunguCode=&cat1=&cat2=&cat3=&_type=json",
      {
        method: "GET",
      }
    )
      .then((res) => {
        //fetch를 통해 받아온 res객체 안에
        //ok 프로퍼티가 있음
        if (!res.ok) {
          throw Error("could not fetch the data that resource");
        }
        return res.json();
      })
      .then((data) => {
        setDatas(data.response.body.items.item);
      })
      .catch((err) => {
        console.log(err.message);
        //에러시 Loading메세지 사라지고
        //에러메세지만 보이도록 설정
      });
  }
  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>
      <div style={divGroupStyle}>
        {alltour.map((i) => (
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
        {datas.map((i) => (
          <div>
            <Link to={"/Tourbook/" + i.idxx} key={i.idxx}>
              <p />
              {i.title}
              <p />
              <p />
              <img
                src={alltour[0].src}
                alt={alltour[0].alt}
                title={alltour[0].title}
                width={alltour[0].width}
              />
              <p />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
export default TourList;
