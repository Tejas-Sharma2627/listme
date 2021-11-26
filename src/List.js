import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";




const List = ({ list, setList, setAlert, editItem }) => {
  const [strike, setStrike] = React.useState(false);
  const deleElement = (id) => {
    const newList = list.filter((item) => id !== item.id);
    showAlert(true, "Item " + { id } + " removed", "danger");
    setList(newList);
  };

  const showAlert = ({ show = true, msg = "", type = "" }) => {
    setAlert({ show, type, msg });
  };
  return (
    <div className="grocery-list">
      {list.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title" onClick={() => setStrike(!strike)}>
              {title}
            </p>
            <div className="btn-container">
              <button type="button" className="edit-btn" onClick={()=>editItem(id)}>
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => deleElement(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
