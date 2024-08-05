import xghLogo from "./assets/xgh.png";
import "./App.css";
import { useCallback, useState } from "react";
import { Form } from "./form/Form";

function App() {
  const [state, setState] = useState<"start" | "quiz" | "results">("start");
  const [result, setResult] = useState<number>();

  const onEnd = useCallback((percentageResult: number) => {
    setResult(percentageResult);
    setState("results");
  }, []);

  return (
    <>
      <h1 style={{ fontFamily: "Dearkatienbp" }}>eXtreme Go Horse Quiz</h1>
      {state === "start" ? (
        <>
          <div>
            <img src={xghLogo} className="logo react" alt="React logo" />
          </div>
          <div className="card">
            <p>
              Discover how much of teh XGH process your project is following
            </p>
            <button onClick={() => setState("quiz")}>Start</button>
          </div>
        </>
      ) : null}
      {state === "quiz" ? <Form onEnd={onEnd} /> : null}
      {state === "results" && result !== undefined ? (
        <div>
          <div>Congrats! you are {result * 100}% XGH</div>
          <button onClick={() => setState("start")}>Reset</button>
        </div>
      ) : null}
    </>
  );
}

export default App;
