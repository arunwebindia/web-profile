import React, { useEffect, useRef, useState } from "react";
import "./TypingMaster.css";
export default function TypeMaster() {
  const typedata =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore officia numquam ad error soluta deserunt qui distinctio repellendus exercitationem voluptate veniam natus officiis eum tempore incidunt corrupti architecto, non in.";
  const [modal, setModal] = useState(false);
  const [input, setinput] = useState("");
  const [count, setCount] = useState({ error: 0, right: 0, word: 0 });
  const [timer, setTimer] = useState(0);
  const [stopwatch, setstopwatch] = useState(0);
  const [intID, setIntId] = useState(null);
  let textarea = useRef();
  useEffect(() => {
    setCount((pre) => {
      return { ...pre, right: document.querySelectorAll(".right").length };
    });
    setCount((pre) => {
      return { ...pre, error: document.querySelectorAll(".wrong").length };
    });
    let str = "";
    document.querySelectorAll(".right").forEach((elem, ind) => {
      str += elem.innerText;
    });
    let newdata = typedata.slice(0, input.split("").length);
    let arr = str.split(" ").filter((element, ind) => {
      return newdata.split(" ").includes(element);
    });
    setCount((pre) => {
      return { ...pre, word: arr.length - 1 };
    });
  }, [input]);

  function handleStart() {
    textarea.current.focus();
  }
  useEffect(() => {
    if (timer > 0) {
      let intervalId = setInterval(() => {
        setstopwatch((pre) => pre - 1);
        clearInterval(-1);
        console.log(intervalId);
      }, 1000);
      setIntId((pre) => intervalId);
      let x = setTimeout(() => {
        textarea.current.blur();
        clearInterval(intervalId);
        setModal(true);
      }, timer * 60 * 1000);
    }
  }, [timer]);
  function handleSelect(e) {
    if (intID) {
      clearInterval(intID);
    }
    setTimer((pre) => (pre = Number(e.target.value)));
    setstopwatch((pre) => (pre = Number(e.target.value) * 60));
  }
  return (
    <div className="main-container">
     
      <div className="containerr">
       
        <div className="start-box">
         
          <div className="drop-down">
           
            <select name="" id="" onChange={handleSelect} value={timer}>
             
              <option value="0">--select time--</option>
              <option value="1">1 Min</option> <option value="2">2 Min</option>
              <option value="3">3 Min</option> <option value="4">4 Min</option>
            </select>
          </div>
          <div className="btn">
           
            <button type="button" onClick={handleStart}>
              Start
            </button>
          </div>
        </div>
        <div className="timer">
         
          <span>
           
            {Math.floor(stopwatch / 60)} : {stopwatch % 60}
          </span>
        </div>
        <div className="word-box">
         
          {typedata.split("").map((char, ind) => {
            if (input.length > ind) {
              if (input[ind] === typedata[ind]) {
                return (
                  <span key={ind} className={`right`}>
                    {char}
                  </span>
                );
              } else {
                return (
                  <span key={ind} className={`wrong`}>
                    {char}
                  </span>
                );
              }
            } else {
              return <span key={ind}>{char}</span>;
            }
          })}
        </div>
        <div className="type-box">
         
          <textarea
            name="textType"
            ref={textarea}
            value={input}
            onChange={(e) => setinput(e.target.value)}
            placeholder="Type here ..."
          ></textarea>
        </div>
        {modal ? (
          <>
           
            <div className="modal">
             
              <div className="message-box">
               
                <div className="content">
                 
                  <div className="Paragraph">
                   
                    <h2>Typed words</h2>
                    {typedata.split("").map((char, ind) => {
                      if (input.length > ind) {
                        if (input[ind] === typedata[ind]) {
                          return (
                            <span key={ind} className={`right`}>
                              {char}
                            </span>
                          );
                        } else {
                          return (
                            <span key={ind} className={`wrong`}>
                              {char}
                            </span>
                          );
                        }
                      }
                    })}
                  </div>
                  <hr />
                  <div className="info">
                   
                    <div className="msg ">
                      <span>Time :</span>
                      {timer} MINUTES
                    </div>
                    <div className="msg error">
                      <span>Total Errors :</span>
                      {count.error} CHARACTORS
                    </div>
                    <div className="msg ">
                      <span>Total correct :</span>
                      {count.right} CHARACTORS
                    </div>
                    <div className="msg ">
                      <span>Correct Word :</span>
                      {count.word} WORDS
                    </div>
                    <div className="msg ">
                      <span>Speed word :</span>
                      {Number(count.word / timer)} WPM
                    </div>
                    <div className="msg ">
                      <span>Speed Charector :</span>
                      {count.right / timer} CPM
                    </div>
                  </div>
                </div>
                <div className="btn">
                  <button type="button" onClick={() => setModal(false)}>
                    OK
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
