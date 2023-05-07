import axios from "axios";

export const getAllOrder = async () => {
  const respone = await axios({
    method: "GET",
    url: "http://localhost:9000/api/v1/order",
  });
  return respone.data;
};

export const getDetailsOrder = async (id) => {
  const respone = await axios({
    method: "GET",
    url: `http://localhost:9000/api/v1/order/${id}`,
  });
  return respone.data;
};

export const updateOrder = async (order) => {
  const respone = await axios({
    method: "PUT",
    url: `http://localhost:9000/api/v1/order/${order.id}`,
    data: order,
  });
  return respone.data;
};
