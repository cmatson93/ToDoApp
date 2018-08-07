import React from "react";

export const FormBtn = props =>
<div>
  <button {...props} style={{ float: "right" }} className="btn btn-success" />
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    {props.children}
  </button>
</div>