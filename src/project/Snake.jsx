import React, { useEffect, useState } from "react";
import "./snake.css";
// import snake from '../assets/icons/snake.svg'
export default function Snakes() {
  const [arr2d, setarr] = useState([
    [30, 10],
    [20, 10],
    [10, 10],
    [0, 10],
  ]);
  const [keyd, setKeyd] = useState("ArrowRight");
  const [food, setFood] = useState([40, 40]);
  const [score, setScore] = useState(0);
  const [inId, setIntId] = useState(0);
  const [over, setover] = useState(false);
  const [pause, setPause] = useState(false);
  useEffect(() => {
    const setin = setInterval(() => {
      setarr((pre) => {
        if (over) {
          return;
        }
        if (
          arr2d[0][0] < 390 &&
          arr2d[0][1] < 390 &&
          arr2d[0][0] > 0 &&
          arr2d[0][1] > 0
        ) {
          const head = pre[0];
          let newHead = pre[0];
          switch (keyd) {
            case "ArrowRight": {
              newHead = [head[0] + 10, head[1]];
              break;
            }
            case "ArrowLeft": {
              newHead = [head[0] - 10, head[1]];
              break;
            }
            case "ArrowDown": {
              newHead = [head[0], head[1] + 10];
              break;
            }
            case "ArrowUp": {
              newHead = [head[0], head[1] - 10];
              break;
            }
          }
          if (
            pre
              .slice(1, pre.lenght)
              .some(([x, y]) => x === newHead[0] && y === newHead[1])
          ) {
            setover(true);
            clearInterval(setin);
            return pre;
          }
          if (newHead[0] === food[0] && newHead[1] === food[1]) {
            setFood((pree) => {
              let x = pree;
              x[0] = Math.floor(Math.random() * 19) * 20;
              x[1] = Math.floor(Math.random() * 19) * 20;
              return x;
            });
            setScore(score + 100);
            return [newHead, ...pre];
          } else {
            return [newHead, ...pre.slice(0, -1)];
          }
        } else {
          setover(true);
          clearInterval(setin);
          return pre;
        }
      });
    }, 100);
    setIntId(setin);
    return () => clearInterval(setin);
  }, [arr2d, keyd, pause]);

  useEffect(() => {
    const arrowfun = (e) => {
      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowDown"
      ) {
        if (
          (keyd === "ArrowLeft" && e.key === "ArrowRight") ||
          (keyd === "ArrowRight" && e.key === "ArrowLeft") ||
          (keyd === "ArrowUp" && e.key === "ArrowDown") ||
          (keyd === "ArrowDown" && e.key === "ArrowUp")
        ) {
          return;
        }
        setKeyd(e.key);
      }
    };
    window.addEventListener("keydown", arrowfun);
    return () => window.removeEventListener("keydown", arrowfun);
  }, [keyd]);
  function handleStartGame(e) {
    setover(false);
    setarr([
      [30, 10],
      [20, 10],
      [10, 10],
      [0, 10],
    ]);
    setKeyd("ArrowRight");
    setScore(0);
    setFood([
      Math.floor(Math.random() * 19) * 20,
      Math.floor(Math.random() * 19) * 20,
    ]);
  }
  function handlePauseGame(e) {
    clearInterval(inId);
    setPause(false);
    console.log(arr2d);
  }
  function handleResume(e) {
    setPause(true);
  }
  return (
    <div className="game-wrapper">
      <h3 className="score-box">
        SCORE : <span>{score}</span>
      </h3>
      <div className="game-container">
        <div className="boundary">
          <span
            className="food"
            style={{ left: `${food[0]}px`, top: `${food[1]}px` }}
          ></span>
          {arr2d?.map((val, ind) => {
            return (
              <span
                className="snake"
                key={ind}
                style={{ left: `${val[0]}px`, top: `${val[1]}px` }}
              ></span>
            );
          })}
        </div>
      </div>
      <div className="button-section">
        <button type="button" className="start-btn" onClick={handleStartGame}>
          RESTART
        </button>
        <button type="button" className="start-btn" onClick={handlePauseGame}>
          PAUSE
        </button>
        <button type="button" className="start-btn" onClick={handleResume}>
          RESUME
        </button>
      </div>

      {over ? (
        <div className="game-over" onClick={() => setover(false)}>
          {" "}
          <div className="game-overBox">
            <h4>GAME OVER</h4>
            <h5>Your Score is : {score}</h5>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
