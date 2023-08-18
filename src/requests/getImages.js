import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`http://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        console.log(response.data.collection.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
export default getImages;
