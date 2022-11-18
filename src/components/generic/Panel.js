import React from "react";

const Panel = ({children, style, ...props}) => {
  return <div {...props} style={{ ...style}}>{children}</div>;
};

export default Panel;
