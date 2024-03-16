import { useState } from "react";
import messages from "../../public/messages";
import Button from "./Button";

const Steps = () => {
  console.log("here are the messages", messages);
  //const step = 2;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  return (
    <>
      {isOpen ? (
        <button
          className="close"
          onClick={() => setIsOpen((currentState) => !currentState)}
        >
          &times;
        </button>
      ) : (
        <button
          className="close"
          onClick={() => setIsOpen((currentState) => !currentState)}
        >
          &equiv;
        </button>
      )}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              bgColor={"#7950f2"}
              textColor="#fff"
              onClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>
            <Button bgColor={"#7950f2"} textColor="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Steps;
