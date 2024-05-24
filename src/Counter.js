import React, { useState } from "react";

const App = () => {
  const [names, setNames] = useState([
    { id: 1, text: "떡볶이" },
    { id: 2, text: "탕수육" },
    { id: 3, text: "치킨" },
    { id: 4, text: "찜닭" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(names.length + 1);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    // hint : concat 함수
  };
  const onRemove = (id) => {
    // hint : filter 함수
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default App;
