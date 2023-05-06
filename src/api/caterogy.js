import axios from "axios";

export const addCaterogyApi = async (caterogy) => {
  const respone = await axios({
    method: "POST",
    url: "http://localhost:9000/api/v1/caterogy",
    data: caterogy,
  });
  return respone.data;
};

export const getAllCaterogyApi = async () => {
  const respone = await axios({
    method: "GET",
    url: "http://localhost:9000/api/v1/caterogy",
  });
  return respone.data;
};

export const getDetailCaterogyApi = async (id) => {
  const respone = await axios({
    method: "GET",
    url: `http://localhost:9000/api/v1/caterogy/${id}`,
  });
  return respone.data;
};

export const deleteCaterogyApi = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `http://localhost:9000/api/v1/caterogy/${id}`,
  });
  return res.data;
};

export const updateCaterogyApi = async (caterogy) => {
  const res = await axios({
    method: "PUT",
    url: `http://localhost:9000/api/v1/caterogy/${caterogy.id}`,
    data: caterogy,
  });
  return res.data;
};
