import React, { useState } from "react";

function Todo() {
  const [data, setData] = useState("");
  const [listData, setlistData] = useState([]);
  const addFun = () => {
    setlistData([...listData, data]);
    setData("");
  };
  const removeTask = (i) => {
    const updatedListData = listData.filter((ele, id) => {
      return i !== id;
    });
    setlistData(updatedListData);
  };
  const removeAll = () => {
    setlistData([]);
  };
  return (
    <>
      <div>
        <h1>TODO APP</h1>
        <input
          type="text"
          placeholder="Add Task"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button onClick={addFun}>ADD</button>

        {listData !== [] &&
          listData.map((ele, i) => {
            return (
              <>
                <p key={i}>
                  <div>{ele}</div>
                  <button onClick={() => removeTask(i)}>REMOVE</button>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button onClick={removeAll}>REMOVE ALL</button>
        )}
      </div>
    </>
  );
}
export default Todo;
