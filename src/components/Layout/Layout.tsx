import React, { FC } from "react";

import { StateContext, InitStateContext } from "../../utils";

export const Layout: FC<any> = ({ navigation, route, children, ...rest }) => {
  return (
    <StateContext.Provider value={InitStateContext({ navigation, route })}>
      {children}
    </StateContext.Provider>
  );
};
