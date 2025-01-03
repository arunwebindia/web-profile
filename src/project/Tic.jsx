

import React, { useEffect, useState } from "react";
import "./tic.css";
export default function Tic() {
  const winnerArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [active, seActive] = useState([]);
  const [player1, setPlayer1] = useState({ status: true, data: [] });
  const [player2, setPlayer2] = useState({ status: false, data: [] });
  const [matchStart, setMatchStart] = useState(true);
  const [restart, setRestart] = useState(false);
  function handlePlayer(number) {
    let d = [...active];
    d.push(number);
    seActive((preee) => (preee = d));
    if (player1.status) {
      if (player1.data.includes(number) || player2.data.includes(number)) {
        return;
      } else {
        let dataaa = [...player1.data];
        dataaa.push(number);
        setPlayer1((pre) => {
          console.log(dataaa);
          const x = winnerArray.filter((elem) => {
            return (
              elem.toString() ===
              elem
                .filter(
                  (items, ind) =>
                    items === dataaa.filter((v, i) => v == items)[0]
                )
                .toString()
            );
          });
          if (x[0]?.length === 3) {
            setMatchStart(false);
          }
          return { ...pre, status: false, data: dataaa };
        });
        setPlayer2((pre) => (pre = { ...pre, status: true }));
      }
    } else {
      if (player2.data.includes(number) || player1.data.includes(number)) {
        return;
      } else {
        let dataaaa = [...player2.data];
        dataaaa.push(number);
        setPlayer2((pre) => {
          console.log(dataaaa);
          const x = winnerArray.filter((elem) => {
            return (
              elem.toString() ===
              elem
                .filter(
                  (items, ind) =>
                    items === dataaaa.filter((v, i) => v == items)[0]
                )
                .toString()
            );
          });
          if (x[0]?.length === 3) {
            setMatchStart(false);
          }
          return { ...pre, status: false, data: dataaaa };
        });
        setPlayer1((pre) => (pre = { ...pre, status: true }));
      }
    }
  }
  function handleRestart() {
    setPlayer1({ status: true, data: [] });
    setPlayer2({ status: false, data: [] });
    seActive([]);
    setMatchStart(true);
  }
  return (
    <div className="ttt-container">
      {!matchStart ? (
        <div className="win-match-pop">
          {" "}
          <div className="win-container">
            {" "}
            <h3>
              {" "}
              Player{" "}
              <span className="box">
                {" "}
                {!player1.status ? (
                  <i className="fa-solid fa-xmark cross"></i>
                ) : (
                  <i className="fa-solid fa-check right"></i>
                )}{" "}
              </span>{" "}
              Won the Match{" "}
            </h3>{" "}
            <button onClick={handleRestart}>Start Again</button>{" "}
          </div>{" "}
        </div>
      ) : (
        ""
      )}{" "}
      <div className="ttt-wrapper">
        {" "}
        {Array.from({ length: 9 }, (_, i) => i++).map((items, inde) => {
          return (
            <div className="box" key={inde} onClick={() => handlePlayer(inde)}>
              {" "}
              {active?.includes(inde) ? (
                player1.data.includes(inde) ? (
                  <i className="fa-solid fa-xmark cross"></i>
                ) : (
                  <i className="fa-solid fa-check right"></i>
                )
              ) : (
                <i></i>
              )}{" "}
            </div>
          );
        })}{" "}
      </div>{" "}
      {[...player1.data, ...player2.data].length === 9 ? (
        <div className="text-center restart-btn">
          {" "}
          <button onClick={handleRestart} className="btn btn-primary">
            RESTART
          </button>{" "}
        </div>
      ) : (
        ""
      )}{" "}
    </div>
  );
}
