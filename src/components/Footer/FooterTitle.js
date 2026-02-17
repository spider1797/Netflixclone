import React from "react";
import "./FooterStyles.css";

function FooterTitle({ children, ...restProps }) {
  return (
    <button type="button" className="footer-title" {...restProps}>
      {children}
    </button>
  );
}

export default FooterTitle;
