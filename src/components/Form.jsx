import React from "react";

import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Subject</label>
        <input type="text" />
        <label>Detail</label>
        <textarea rows="6" placeholder="Type a short message here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
