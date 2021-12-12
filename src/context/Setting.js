import React from "react";

export const SettingContext = React.createContext();

export default function Setting(props) {
  const state = {
    hideCompletedItems: true,
    items: 5,
    sort: "all",
  };

  return (
    <SettingContext.Provider value={state}>
      {props.children}
    </SettingContext.Provider>
  );
}
