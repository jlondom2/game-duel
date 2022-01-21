import React, { useState, useEffect } from "react";


export const useFetch = ({ url }) => {
  const [images, setImages] = useState([]);



  // fetch with ASYNC #2
  const requestGif = async () => {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=yjRNRmo5Mi011SC8CymAH3V1lyK1SNyY&q=cheese&limit=10"
    );
    if (response.status === 200) {
      const { data } = await response.json();


      const gif = data.map((item) => {
        return {
          id: item.id,
          url: item.images.original.url,
          title: item.title,
        };
      });


      setImages(gif);

      
      //   El Estado de arriba es lo que obtecgo del fectch
    } else {
      console.log("error");
    }
  };

  //use efect ejecuta solo una vez para prevenir que ese ejecute de nuevo el fetch de arriba
  useEffect(() => {
    requestGif();
  }, []);

  return { images }
};
