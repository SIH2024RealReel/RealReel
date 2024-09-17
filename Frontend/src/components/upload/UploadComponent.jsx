import React, { useState } from 'react';
import './UploadComponent.css';

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [email, setEmail] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your upload functionality here (API call or file handling logic)
    console.log(`Uploading file: ${selectedFile.name} to email: ${email}`);
    // Reset the state after submission
    setSelectedFile(null);
    setEmail('');
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Upload Files</h3>
        <div className="drop_box">
          {selectedFile ? (
            <form onSubmit={handleSubmit}>
              <div className="form">
                <h4>{selectedFile.name}</h4>
                <input
                  type="email"
                  placeholder="Enter email to upload file"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn">
                  Upload
                </button>
              </div>
            </form>
          ) : (
            <>
              <header>
                <h4>Select File here</h4>
              </header>
              <p>Files Supported: PNG, JPEG, MP4</p>
              <input
                type="file"
                accept=".jpeg,.png,.mp4"
                onChange={handleFileChange}
                hidden
                id="fileID"
              />
              <button
                className="btn"
                onClick={() => document.getElementById('fileID').click()}
              >
                Choose File
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploadComponent;
