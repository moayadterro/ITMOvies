import React from "react";
import { Styles } from "./styles";

function AppTemplate({ header, nav, children, footer }) {
  return (
    <Styles>
      {header && <div className="app-template__header">{header}</div>}
      {nav && <div className="app-template__nav">{nav}</div>}
      {children && <div className="app-template__content">{children}</div>}
      {footer && <div className="app-template__footer">{footer}</div>}
    </Styles>
  );
}

export default AppTemplate;
