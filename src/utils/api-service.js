import axios from "axios";
const BASE_URL = "https://8j8p5qz70h.execute-api.eu-north-1.amazonaws.com/dev";
let path = "";

export const fetchVisitors = async () => {
  path = "/visitors";
  const response = await axios.get(`${BASE_URL + path}`);
  return response.data.visitors;
};

export const addVisitor = async (object) => {
  path = "/visitors";
  const response = await axios.post(`${BASE_URL + path}`, object);
  return response.data.newVisitor;
};

export const deleteVisitor = async (ID) => {
  path = `/visitors/${ID}`;
  const response = await axios.delete(`${BASE_URL + path}`);
  return response.data.visitor;
};

export const updateVisitor = async (ID, object) => {
  path = `/visitors/${ID}`;
  const response = await axios.put(`${BASE_URL + path}`, object);
  return response.data;
};
