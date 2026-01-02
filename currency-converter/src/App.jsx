import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [converted, setConverted] = useState(null);

  const rate = 2.17; // demo rate

  const handleConvert = () => {
    const result = amount * rate;
    setConverted(result.toFixed(2));
  };

  return (
    <div className="page">
      <div className="converter">
        <h1>Currency converter</h1>

        <div className="row">
          <div>
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleConvert}>Convert</button>
          </div>

          <div>
            <label>From</label>
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              <option>INR</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>

          <div className="swap">⇄</div>

          <div>
            <label>To</label>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              <option>USD</option>
              <option>INR</option>
              <option>EUR</option>
            </select>
          </div>
        </div>

        {converted && (
          <p className="result">
            {amount} {from.toLowerCase()} = {converted} {to.toLowerCase()}
          </p>
        )}

        <p className="footer">Currency Converter using ReactJS</p>
      </div>
    </div>
  );
}

export default App;
