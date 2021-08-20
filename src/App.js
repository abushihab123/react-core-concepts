import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ["Shahruk", "Salman", "Amir", "Imran", "Sanju"];
  const products = [
    { name: "Photoshop", price: "$98.99" },
    { name: "Camera", price: "$598.99" },
    { name: "PDF Reader", price: "$8.99" },
    { name: "Premiere El", price: "$249.99" },
  ];

  // const productNames = products.map((product) => product.name);

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Guy</p>
        <Counter> </Counter>
        <Users></Users>

        <ul>
          {nayoks.map((nayok) => (
            <li>{nayok}</li>
          ))}
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>
          <li>{nayoks[4]}</li> */}

          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>

        {products.map((product) => (
          <Product product={product}></Product>
        ))}

        {/* <Product product={products[0]}> </Product>
        <Product product={products[1]}> </Product>
        <Product product={products[2]}> </Product> */}

        {/* <Person name="Sakib" job="Cricket"></Person>
        <Person name="Max" job="Dorshok"></Person> */}
      </header>
    </div>
  );
}
//how to declare the components//

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [] )


  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}



function Product(props) {
  const productStyle = {
    border: "1px solid salmon",
    backgroundColor: "lightgray",
    borderRadius: "5px",
    height: "200px",
    width: "200px",
    float: "left",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{ border: "2px solid gold", margin: "10px", width: "400px" }}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  );
}

// 2nd type //

// function Person(props) {
//   const personStyle = {
//     border: "5px solid golden",
//     margin: "10px",
//   };

//   return (
//     <div Style={{ border: "5px solid gold" }}>
//       <h3>Nayok:{props.name} </h3>
//       <h3>Hero of {props.female}</h3>
//       <h3>Love to drinks{props.food} </h3>
//     </div>
//   );
// }

export default App;
