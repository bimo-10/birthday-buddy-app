import data from "./data";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);
  // console.log(data);

  return (
    <>
      <main className="">
        <div className="container">
          <h3 className="person">
            {people.length} {people.length > 0 ? "Birthdays" : "Birthday"} Today
          </h3>
          {people.map((person) => {
            const { id, name, age, image } = person;
            return (
              <div key={id} className="person">
                <div className="person">
                  <img src={image} alt="" className="person" />
                  <div>
                    <h4 className="person">{name}</h4>
                    <p className="person">{age} years</p>
                  </div>
                </div>
              </div>
            );
          })}
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople([])}
          >
            Remove All
          </button>
        </div>
      </main>
    </>
  );
};
export default App;
