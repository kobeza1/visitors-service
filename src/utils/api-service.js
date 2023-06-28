import axios from "axios";
const BASE_URL = "https://czlfqe0t6k.execute-api.us-east-1.amazonaws.com";
// const KEY = "724fbc146559c3ae1940072aea85abed";
let path = "";

export const fetchVisitors = async () => {
  path = "/visitors";
  const response = await axios.get(`${BASE_URL + path}`);
  return response.data.Items;
};

export const addVisitor = async (object) => {
  path = "/visitors";
  const response = await axios.post(`${BASE_URL + path}`, object);
  return response.data.Items;
};

export const deleteVisitor = async (id) => {
  path = `/visitors/${id}`;
  const response = await axios.delete(`${BASE_URL + path}`);
  return response.data.Items;
};
