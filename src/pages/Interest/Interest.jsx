import React, { useState } from "react";
import style from "./style.module.css";
import Container from "../../components/Container/Container";
import Back from "../../components/UI/Back/Back";

const Interest = () => {
  const [interest, setInterest] = useState("");
  const [data, setData] = useState([]);

  const addInterestHandler = (name) => {
    setData((prevState) => {
      return [...prevState, { id: Math.random().toString(), name: name }];
    });
    setInterest("");
  };

  const deleteInterestHandler = (id) => {
    const deleteData = data.filter((data) => data.id !== id);
    setData(deleteData);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addInterestHandler(interest);
    }
  };

  return (
    <Container className={style.interest}>
      <Back to="/profile" page="interest" />
      <section className={style.section}>
        <p>Tell everyone about yourself</p>
        <p>What interest you?</p>
        <input
          type="text"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        {data.length > 0 && (
          <ul className={style.listData}>
            {data.map((item) => (
              <li key={item.id}>
                {item.name}
                <button onClick={() => deleteInterestHandler(item.id)}>
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Container>
  );
};

export default Interest;
