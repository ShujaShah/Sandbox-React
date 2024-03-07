import { useEffect, useState } from "react";
export default function Advice() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count + 1);
  }
  //useEffect is used to run the function everytime the component gets loaded first
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div>
      <h2>{advice} </h2>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <div>
      <p>
        You have read <strong>{props.count}</strong> pieces of advice
      </p>
    </div>
  );
}
