import React, { useState } from "react";

interface appStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}

const defaultContext: appStateValue = {
  username: "aZan",
  shoppingCart: { items: [] }
};

export const AppState = React.createContext(defaultContext);
export const AppSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<appStateValue>> | undefined
>(undefined);

export const AppStateProvider: React.FC = props => {
  const [state, setState] = useState(defaultContext);
  return (
    <AppState.Provider value={state}>
      <AppSetStateContext.Provider value={setState}>
        {props.children}
      </AppSetStateContext.Provider>
    </AppState.Provider>
  );
};
