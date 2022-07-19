import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // fecth call
  const createCar = async (data) => {
    const respone = await fetch(
      "https://621dddd8849220b1fc879a8e.mockapi.io/cars",
      {
        method: "POST",
        body: data,
      },
    );
    const result = await respone.json();
    setCars(result);
    console.log(result);
  };

  // states
  // const [open, setOpen] = useState(false);
  const [cars, setCars] = useState([]);
  const [name, setName] = useState("");
  const [engine, setEngine] = useState("");
  const [drivenkm, setDrivenkm] = useState("");
  const [fuel_type, setFuel_type] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");

  const datas = {
    vehicle_name: name,
    engine: engine,
    driven_km: drivenkm,
    fuel_type: fuel_type,
    image: image,
    year: year,
  };

  console.log(name);
  console.log(engine);
  console.log(drivenkm);
  console.log(fuel_type);
  console.log(image);
  console.log(year);

  // hooks
  // useEffect(() => {
  //   getCar();
  // }, []);

  return (
    <div className='container'>
      {/* {cars.map((car) => (
        <div>
          <h1>{car.vehicle_name}</h1>
          <p>{car.price}</p>
        </div>
      ))} */}
      <form action=''>
        <label htmlFor='name'>Name</label>
        <input
          name='name'
          type='text'
          className='inputs'
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor='engine'>engine</label>
        <input
          name='engine'
          type='text'
          className='inputs'
          onChange={(event) => setEngine(event.target.value)}
        />
        <label htmlFor='drivenkm'>drivenkm</label>
        <input
          name='drivenkm'
          type='text'
          className='inputs'
          onChange={(event) => setDrivenkm(event.target.value)}
        />
        <label htmlFor='fuel_type'>fuel_type</label>
        <input
          name='fuel_type'
          type='text'
          className='inputs'
          onChange={(event) => setFuel_type(event.target.value)}
        />
        <label htmlFor='image'>image</label>
        <input
          name='image'
          type='text'
          className='inputs'
          onChange={(event) => setImage(event.target.value)}
        />
        <label htmlFor='year'>year</label>
        <input
          name='year'
          type='text'
          className='inputs'
          onChange={(event) => setYear(event.target.value)}
        />
        <button type='button' onClick={() => createCar(datas)}>
          create
        </button>
      </form>
    </div>
  );
}

export default App;

// fetch(url,{method,headers}).then()

// jwt

// promise(respone,reject)

// const variable = function async() {
// const variable1= await fetch(url,{method})
// const variable2 = await variable1.json()

// }

// let data =31231;
// data=1321;

// const [data,setData]=useState("")

// setData("hello world");

// console.log(data);

// useEffect(()=>{hai()},[dep,dep2,dep3])

// curd
// C - Create - POST
// U - Update - UPDATE
// R - Read   - GET
// D - Delete - DELETE
