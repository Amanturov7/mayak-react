import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Box, Button, Typography, Grid } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadForm = ({ onUploadSuccess }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Выберите Фотографию");
      return;
    }
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post("http://localhost:8080/api/photo", formData);
      toast.success("Фотография успешно загружена!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setSelectedFile(null); // Reset selected file after successful upload
      onUploadSuccess(); // Call the onUploadSuccess function provided by Gallery component to update the photo list
    } catch (error) {
      console.error("Ошибка при загрузки:", error);
      toast.error("Ошибка при загрузке фотографии, попробуйте еще раз!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsUploading(false);
    }
  };

  const customButtonStyles = {
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    outline: "none",
    marginBottom: "10px",
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py={4}
            border="1px solid #ccc"
            borderRadius={4}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
          >
            <Typography variant="h2">Загрузить фотографию</Typography>
            <label htmlFor="file-input">
              <input
                id="file-input"
                type="file"
                name="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <Button
                component="span"
                style={customButtonStyles}
                disabled={isUploading}
                disableElevation
              >
                Обзор
              </Button>
            </label>
            {selectedFile && (
              <Typography variant="subtitle1"> Имя файла: {selectedFile.name} </Typography>
            )}
            <Button
              style={customButtonStyles}
              onClick={handleUpload}
              disabled={isUploading}
              disableElevation
            >
              {isUploading ? "Загрузка..." : "Загрузить"}
            </Button>
          </Box>
        </Grid>
      </Grid>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

UploadForm.propTypes = {
  onUploadSuccess: PropTypes.func.isRequired,
};

export default UploadForm;
