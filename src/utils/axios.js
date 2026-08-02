import axios from "axios";
const apiKEY = import.meta.env.VITE_APIKEY;
const apiEP = `https://www.omdbapi.com/?apikey=${apiKEY}&`;

// user axio is without JSON() convertion
export const fetchMovie = async (title) => {
  try {
    const url = apiEP + "t=" + title;
    const response = await axios.get(url);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const fetchMovie = async (title) => {
//   try {
//     //const url = `https://www.omdbapi.com/?t=${title}&apikey=2f439848`;
//     const url = apiEP + "t=" + title;
//     const response = await fetch(url);
//     const data = await response.json();
//     //setMovie(data);
//     if (data.Response === "false") {
//       //console.log(data.Error);
//       return null;
//     }
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
