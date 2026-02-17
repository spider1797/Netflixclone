import React from "react";
import "./FooterStyles.css";

function FooterLink({ children, ...restProps }) {
  return (
    <button type="button" className="footer-link" {...restProps}>
      {children}
    </button>
  );
}

export default FooterLink;
