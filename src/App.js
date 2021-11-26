import React, { useState, useEffect } from "react";
import Form from "./Form";
import Container from "./GroceryContainer";


const getLocal =()=>{
 let list = localStorage.getItem('list');
 if(list)
 return JSON.parse(localStorage.getItem('list'));
 else return[];
}
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocal());
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  return (
    <section className="section-center">
      <Form
        alert={alert}
        isEdit={isEdit}
        name={name}
        setName={setName}
        list={list}
        setList={setList}
        setAlert={setAlert}
        setIsEdit={setIsEdit}
        setEditID={setEditID}
        editID={editID}
      />
      <Container
        list={list}
        setList={setList}
        alert={alert}
        setAlert={setAlert}
        setEditID={setEditID}
        setName={setName}
        setIsEdit={setIsEdit}
      />
    </section>
  );
}

export default App;
