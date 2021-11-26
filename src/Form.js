import React from "react";
import Alert from "./Alert";
import List from "./List";
const Form = ({ alert, isEdit, name, setName, list, setList, setAlert,editID, setEditID, setIsEdit}) => {
  const { show, msg, type } = alert;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      showAlert(true,"danger", 'Please enter the value' )
    }
    else if(name && isEdit){
      setList(list.map((item)=>{
        if(item.id===editID){
          return{...item, title:name}
        }
        return item;
      }))
      setName('');
      setEditID(null);
      setIsEdit(false);
      showAlert(true, 'success', 'Item Changed');
    }
    else{
      showAlert(true, 'success', 'Item Added');
      const newItem ={id:new Date().getTime().toString(),
      title:name};
      setList([...list, newItem]);
      setName("");
    }
  };
  React.useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list));
  },[list])
const showAlert = (show = false, type = "", msg = "") => {
  setAlert({ show, type, msg });
};
  return (
    <form className="grocery-form" onSubmit={handleSubmit}>
    {show && <Alert {...alert}showAlert={showAlert}/>}
      <h3>Lister</h3>
      <div className="form-control">
        <input
          type="text"
          className="grocery"
          placeholder="Add Here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          {isEdit ? "edit" : "submit"}
        </button>
      </div>
    </form>
  );
};

export default Form;
