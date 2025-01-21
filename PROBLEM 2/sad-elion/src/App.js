import "./styles.css";
import axios from "axios";
import { useState } from "react";

const getRandomData = () => {
  const number = Math.trunc(Math.random() * 100);

  if (number > 80) {
    return getRandomData();
  } else {
    return number;
  }
};
export default function App() {
  const [MainData, setMainData] = useState([]);
  const getData = async () => {
    const number = getRandomData();
    console.log(number);

    const { data } = await axios.get(`https://swapi.dev/api/people/${number}`);

    console.log(data);

    setMainData([...MainData, data]);
  };

  const deletData = (id) => {
    const newData = MainData.filter(({ name }) => name !== id);
    setMainData(newData);
    console.log(id);
  };

  return (
    <div className="App">
      <div className="">
        <button onClick={getData}>Add Recode</button>
      </div>

      <table className="table">
        <th>Name</th>
        <tbody>
          {MainData.map((data) => {
            return (
              <tr>
                <td>{data.name}</td>
                <td>
                  <button onClick={() => deletData(data.name)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
