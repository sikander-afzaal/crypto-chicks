import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./Faq.css";
import { Fade } from "react-awesome-reveal";
function Faq() {
  // if you want to add more questions just add another false here or vice versa
  const [open, setOpen] = useState([false, false, false, false, false]);
  //function to check which faq is opened
  const clickHandler = (e) => {
    const num = e.target.dataset.num;
    setOpen((prev) => {
      let arr = [...prev];
      let newArr = arr.map((elem, index) => {
        if (index === parseInt(num)) {
          return !elem;
        } else {
          return elem;
        }
      });
      return newArr;
    });
  };
  return (
    <div id="faq" className="faq">
      <Fade triggerOnce direction="down" duration={500} delay={200}>
        <h1 className="section-heading kanit">FAQ'S</h1>
      </Fade>

      <div className="faq-div">
        <Fade triggerOnce direction="down" duration={600} delay={100}>
          <div className="faq-q-div">
            <div
              data-num={0}
              onClick={clickHandler}
              className={`faq-btn lulu ${open[0] ? "border-radius" : ""}`}
            >
              <p className={`${open[0] ? "active-btn" : ""}`}>WHAT IS Lorem?</p>
              {open[0] ? (
                <FontAwesomeIcon
                  className={`${open[0] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[0] ? "active" : ""}`}>
              <p className="answer futura">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat animi molestiae distinctio tempore, velit vitae quasi
                aut nulla. Voluptatem, minus.
              </p>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce direction="down" duration={600} delay={200}>
          <div className="faq-q-div">
            <div
              data-num={1}
              onClick={clickHandler}
              className={`faq-btn lulu ${open[1] ? "border-radius" : ""}`}
            >
              <p className={`${open[1] ? "active-btn" : ""}`}>
                WHY ARE WE LAUNCHING AN NFT PROJECT?
              </p>
              {open[1] ? (
                <FontAwesomeIcon
                  className={`${open[1] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[1] ? "active" : ""}`}>
              <p className="answer futura">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat animi molestiae distinctio tempore, velit vitae quasi
                aut nulla. Voluptatem, minus.
              </p>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce duration={600} delay={600}>
          <div className="faq-q-div">
            <div
              data-num={2}
              onClick={clickHandler}
              className={`faq-btn lulu ${open[2] ? "border-radius" : ""}`}
            >
              <p className={`${open[2] ? "active-btn" : ""}`}>
                quasi aut nulla. Voluptatem, minus.{" "}
              </p>
              {open[2] ? (
                <FontAwesomeIcon
                  className={`${open[2] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[2] ? "active" : ""}`}>
              <p className="answer futura">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat animi molestiae distinctio tempore, velit vitae quasi
                aut nulla. Voluptatem, minus.
              </p>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce direction="up" duration={600} delay={300}>
          <div className="faq-q-div">
            <div
              data-num={3}
              onClick={clickHandler}
              className={`faq-btn lulu ${open[3] ? "border-radius" : ""}`}
            >
              <p className={`${open[3] ? "active-btn" : ""}`}>WHEN LAUNCH?</p>
              {open[3] ? (
                <FontAwesomeIcon
                  className={`${open[3] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[3] ? "active" : ""}`}>
              <p className="answer futura">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat animi molestiae distinctio tempore, velit vitae quasi
                aut nulla. Voluptatem, minus.
              </p>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce direction="up" duration={600} delay={400}>
          <div className="faq-q-div">
            <div
              data-num={4}
              onClick={clickHandler}
              className={`faq-btn lulu ${open[4] ? "border-radius" : ""}`}
            >
              <p className={`${open[4] ? "active-btn" : ""}`}>
                IS THERE A WHITELIST? HOW DO I GET ON IT?
              </p>
              {open[4] ? (
                <FontAwesomeIcon
                  className={`${open[4] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[4] ? "active" : ""}`}>
              <p className="answer futura">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat animi molestiae distinctio tempore, velit vitae quasi
                aut nulla. Voluptatem, minus.
              </p>
            </div>
          </div>
        </Fade>

        {
          // when you add a new faq make sure to increment the value in the brackets
        }
      </div>
    </div>
  );
}

export default Faq;
