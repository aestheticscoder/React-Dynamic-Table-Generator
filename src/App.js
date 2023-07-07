import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNumber(value);

    if (!isNaN(value) && value !== "") {
      const table = [];
      for (let i = 1; i <= value; i++) {
        table.push(
          <tr key={i}>
            <td>{i}</td>
          </tr>
        );
      }
      setTableData(table);
    } else {
      setTableData([]);
    }
  };

  return (
    <div className="container">
      <h1>Dynamic Table Generator</h1>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />

      {tableData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      )}
    </div>
  );
}

export default App;
