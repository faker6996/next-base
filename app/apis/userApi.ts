import { callApi } from "./api"; // Dùng API wrapper đã tạo

export const getUsers = async () => {
  return await callApi("/users", "GET");
};
