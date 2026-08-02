export const storeInLocalSession = (mvArg) => {
  //convert mvArray movielist to String because localstorage store string not array
  //movieList is key, json.stringify(mvArg) is value now
  // console.log("saveing", mvArg);
  localStorage.setItem("movieList", JSON.stringify(mvArg));
};

export const accessFormLocalSession = () => {
  const str = localStorage.getItem("movieList");
  //convert string to json
  //if empty string is error so
  return str ? JSON.parse(localStorage.getItem("movieList")) : [];
};
