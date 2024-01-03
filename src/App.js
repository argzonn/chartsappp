import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

function App() {
  const [userData, setUserData] = useState({
    label: "Users Gained",
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const handleLabelChange = (event) => {
    const newLabel = event.target.value;
    setUserData((prevData) => ({
      ...prevData,
      label: newLabel,
      datasets: [
        {
          ...prevData.datasets[0],
          label: newLabel,
        },
      ],
    }));
  };

  const handleLabelInput = (event) => {
    const labels = event.target.value.split(",").map((label) => label.trim());
    setUserData((prevData) => ({
      ...prevData,
      labels: labels,
    }));
  };

  const handleDataInput = (event) => {
    const data = event.target.value.split(",").map((value) => Number(value.trim()));
    setUserData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          data: data,
        },
      ],
    }));
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="labelInput">Enter Label: </label>
        <input
          type="text"
          id="labelInput"
          placeholder="Label Name"
          onChange={handleLabelChange}
        />
      </div>
      <div>
        <label htmlFor="labelDataInput">Enter Labels (comma-separated): </label>
        <input
          type="text"
          id="labelDataInput"
          placeholder="Label1, Label2, Label3, ..."
          onChange={handleLabelInput}
        />
      </div>
      <div>
        <label htmlFor="dataInput">Enter Data Points (comma-separated): </label>
        <input
          type="text"
          id="dataInput"
          placeholder="Value1, Value2, Value3, ..."
          onChange={handleDataInput}
        />
      </div>
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
