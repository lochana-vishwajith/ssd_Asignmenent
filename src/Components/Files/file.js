import React, { useState } from "react";
import "./file.css";

export default function File() {
  const [file, setFile] = useState("");

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setFile(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onSubmit = () => {
    console.log(file);
  };

  return (
    <div className="Auth-form-container container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">File Upload</h3>
          <div className="form-group mt-3">
            <input
              type="file"
              className="form-control mt-1"
              placeholder="Enter Message"
              onChange={(e) => {
                uploadFile(e);
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
  );
}
