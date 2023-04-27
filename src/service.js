import axios from 'axios';

// axios.defaults.baseURL = 'https://localhost:7094/items';
axios.defaults.baseURL =process.env.REACT_APP_VARIABLE;

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);
export default {
  getTasks: async () => {
    const result = await axios.get();
    return result.data;
  },

  addTask: async (name) => {
    const result = await axios.post('',{ Name: name, IsComplete: false })
    return result.data;
  },

  setCompleted: async (id, isComplete) => {
    const result = await axios.put(`/${id}?IsComplete=${isComplete}`)
    return result.data;
  },

  deleteTask: async (id) => {
    const result = await axios.delete(`/${id}`);
    return result.data;
  }
};