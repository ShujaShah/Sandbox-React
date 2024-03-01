import { useState } from "react";
export default function App() {
  const [advice, setAdvice] = useState("");
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>{advice} </p>
    </div>
  );
}
