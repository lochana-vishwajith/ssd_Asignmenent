import axios from 'axios';
import React, { useState } from 'react';
import CryptoJS from "crypto-js";
import "./message.css";

export default function Message() {
    const [message,setMessage] = useState("");
    const [encryptedMessage,setEncryptedMessage] = useState("");

    const onSubmit = () => {
        console.log(message);
        var sendingText = CryptoJS.enc.Utf8.parse(message);
        var key = CryptoJS.enc.Utf8.parse("JaNdRgUkXp2s5v8y");
        var encryptedText = CryptoJS.AES.encrypt(sendingText,key,{
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.ZeroPadding,
        });
        encryptedText = encryptedText.ciphertext.toString(CryptoJS.enc.Hex);
        setEncryptedMessage(encryptedText);
        console.log("Message: ",message," Encrypted: ",encryptedMessage);

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
