import React from "react";
import HeaderContainer from "./header/header_container";

const App = ({children}) => {
  return(
    <div>
      <header className="header">
        <HeaderContainer />
      </header>
      {children}
    </div>
  );
};

export default App;
