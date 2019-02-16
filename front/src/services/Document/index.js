import { API_DEV_URL } from "../../util";

const getDocuments = async () => {
  return fetch(`${API_DEV_URL}documents`);
};
const getDocument = async id => {
  return fetch(`${API_DEV_URL}documents/${id}`);
};

export default {
  getDocument,
  getDocuments
};
