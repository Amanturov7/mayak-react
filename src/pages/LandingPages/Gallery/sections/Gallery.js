import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import UploadForm from "./UploadForm"; // Правильный путь до компонента UploadForm
import Modal from "react-modal"; // Импортируем react-modal
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { isUserAuthenticated } from "../../../../auth";
const isAuthenticated = isUserAuthenticated();
const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      backdropFilter: "blur(10px)", // Эффект размытия фона
    },
    content: {
      maxWidth: "90%",
      maxHeight: "80%",
      width: "100%",
      height: "100%",
      margin: "auto",
      top: "95%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      border: "none",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "transparent", // Прозрачный фон внутри окна
      position: "fixed", // Добавляем позиционирование fixed
      zIndex: 9999, // Поверх всего контента
      // top: "10%", // Отступ сверху
      // left: "10%", // Отступ слева
      right: "10%", // Отступ справа
      bottom: "10%", // Отступ снизу
    },
  };
  if (isUserAuthenticated()) {
    console.log("пользователь авторизован");
  } else {
    console.log("пользователь не авторизован");
  }
  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/getAllPhotos");
      setPhotos(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке фотографий:", error);
    }
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleDeletePhoto = async (photoId) => {
    try {
      console.log("Deleting photo with ID:", photoId); // Добавьте эту строку
      await axios.delete(`http://localhost:8080/api/deletePhoto/${photoId}`);
      fetchPhotos();
    } catch (error) {
      console.error("Error deleting photo:", error);
    }
  };
  return (
    <MKBox component="section" py={12} my={2}>
      <div>{isAuthenticated && <UploadForm onUploadSuccess={fetchPhotos} />}</div>
      <Container>
        <div>
          <h1>Галерея фотографий</h1>
        </div>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={20} sx={{ ml: "auto" }}>
            <Grid item xs={12} lg={12} sx={{ ml: "auto" }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  {/* Ваш контент для первого блока */}
                </Grid>
                <Grid item xs={12} md={6}>
                  {/* Ваш контент для второго блока */}
                </Grid>
              </Grid>
            </Grid>
            <MKBox
              component={Grid}
              container
              spacing={3}
              sx={{
                mt: { xs: 0, md: 3 },
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                "@media (maxWidth: 600px)": {
                  flexDirection: "column",
                },
              }}
            >
              {photos.map((photo) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={photo.id}
                  style={{
                    flex: "0 0 50%",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={`http://localhost:8080/api/photos/${photo.id}`}
                      alt="Загруженное фото"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        cursor: "pointer",
                      }}
                      onClick={() => handlePhotoClick(photo)}
                    />
                    {isAuthenticated && (
                      <button
                        onClick={() => handleDeletePhoto(photo.id)}
                        style={{
                          position: "absolute",
                          top: "0.5rem",
                          right: "0.5rem",
                          background: "none",
                          border: "none",
                          color: "red",
                          cursor: "pointer",
                        }}
                      >
                        Удалить
                      </button>
                    )}
                  </div>
                </Grid>
              ))}
            </MKBox>
          </Grid>
        </Grid>
      </Container>
      {/* Модальное окно для полноэкранного просмотра фотографии */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles} // Применяем стили модального окна
      >
        <IconButton
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            color: "white",
          }}
        >
          <Close />
        </IconButton>
        <img
          src={`http://localhost:8080/api/photos/${selectedPhoto?.id}`}
          alt="Загруженное фото"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Modal>
    </MKBox>
  );
};

export default Gallery;
