import React, { PureComponent } from "react";
import List from "./List";

const Container = ({ list, setList, alert, setAlert, setIsEdit, setEditID, setName }) => {
  const clear = () => {
    setList([]);
    showAlert(true, "danger", "List Cleared");
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEdit(true);
    setEditID(id);
    setName(specificItem);
  };
  return (
    <div className="grocery-container">
      <List list={list} setList={setList} setAlert={setAlert} editItem={editItem} />
      {list.length > 0 && (
        <button className="clear-btn" onClick={clear}>
          Clear Item
        </button>
      )}
    </div>
  );
};
export default Container;
