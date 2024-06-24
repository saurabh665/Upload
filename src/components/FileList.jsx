import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './FileList.css';  // Import CSS file for styling

const FileList = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Check if a file is selected
    if (selectedFile) {
      // Create a FormData object
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Replace 'your-upload-endpoint' with your actual server endpoint
      fetch('your-upload-endpoint', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (response.ok) {
            console.log('File uploaded successfully');
            // Optionally, handle success response from the server
          } else {
            console.error('Failed to upload file');
            // Optionally, handle error response from the server
          }
        })
        .catch(error => {
          console.error('Error uploading file:', error);
          // Handle network error or other errors
        });
    } else {
      console.log('No file selected');
    }
  };

  return (
    <label className="file-upload-container">
      <input type="file" onChange={handleFileChange} />
      <i className="fas fa-cloud-upload-alt file-upload-icon"></i>
      <span>Click here to upload a file</span>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      <button onClick={handleUpload}>Upload</button>
    </label>
  );
};

export default FileList;
