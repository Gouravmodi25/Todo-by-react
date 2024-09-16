/* eslint-disable no-unused-vars */
import { useState } from "react";

const DerivedState = () => {
  const [users, setUser] = useState([
    { name: "Alice", age: 25, id: 1 },
    { name: "Bob", age: 30, id: 2 },
    { name: "Charlie", age: 35, id: 3 },
    { name: "Angles", age: 45, id: 4 },
  ]);

  const userCount = users.length;

  const averageAge =
    users.reduce((accum, currELem) => {
      return accum + currELem.age;
    }, 0) / userCount;

  return (
    <>
      <div>
        <ul>
          {users.map((currElem) => {
            return <List key={currElem.id} data={currElem} />;
          })}
        </ul>
        <p>Total User:{userCount}</p>
        <p>Average Age:{averageAge}</p>
      </div>
    </>
  );
};

const List = (props) => {
  const { name, age } = props.data;
  return (
    <>
      <li>
        Name:{name} Age:{age}
      </li>
    </>
  );
};
export default DerivedState;
