import "../src/reset.css";
// import "../src/index.css";
import React from "react";

export const Wrapper: React.FC = ({ children }) => (
    <>
      <MyContext.Provider value={...}>
        <div className="wrapped">
          {children}
        </div>
      </MyContext.Provider>
    </>
  );
  