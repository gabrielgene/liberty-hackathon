import { API_DEV_URL } from "../../util";

const getLeads = async () => fetch(`${API_DEV_URL}leads`);

const getLead = async id => fetch(`${API_DEV_URL}leads/${id}`);

const addLead = async lead =>
  fetch(`${API_DEV_URL}leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(lead)
  });

const updateLead = async (lead, id) =>
  fetch(`${API_DEV_URL}leads/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(lead)
  });

export default {
  getLead,
  getLeads,
  addLead
};
