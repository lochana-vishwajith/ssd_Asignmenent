import React, { useState } from 'react';
import "./message.css";

export default function Message() {
    const [message,setMessage] = useState();

    const onSubmit = () => {
        console.log(message);
      };

  return (
    <div className="Auth-form-container container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Messages</h3>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onSubmit()}
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
