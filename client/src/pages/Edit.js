import React from "react";

const Edit = () => {
  return (
    <div>
      <div class="upload-files-container">
        <div class="drag-file-area">
          <label class="label">
            <span class="browse-files">
              {" "}
              <input type="file" class="default-file-input" />{" "}
              <span
                style={{
                  backgroundColor: "#e6e6e6",
                  padding: "10px",
                  borderRadius: "20px",
                }}
                class="browse-files-text"
              >
                Upload file
              </span>{" "}
            </span>{" "}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Edit;
