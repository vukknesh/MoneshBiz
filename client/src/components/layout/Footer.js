import React from "react";

export default function Footer() {
  return (
    <ul className="nav justify-content-center position-relative">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link disabled"
          href="#"
          tabIndex="-1"
          aria-disabled="true"
        >
          Disabled
        </a>
      </li>
    </ul>
  );
}
