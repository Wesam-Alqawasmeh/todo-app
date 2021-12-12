import React, { useContext, useState } from "react";

import { SettingContext } from "../../context/Setting";

export default function List(props) {
  const settings = useContext(SettingContext);
  //   const [start, setStart] = useState(0);
  //   const [end, setEnd] = useState(settings.items);

  return (
    <>
      <div>
        <p>maximum number of items: {settings.items}</p>
        <p>Hide/show completed items: {`${settings.hideCompletedItems}`}</p>
      </div>

      {props.list.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <div onClick={() => toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}
