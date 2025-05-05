import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://api.example.com", // Đổi thành API khác của bạn
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Hàm gọi API với các tham số truyền vào
export const callApi = async (url: string, method: "GET" | "POST" | "PUT" | "DELETE", data?: any) => {
  try {
    const response = await apiInstance.request({
      url,
      method,
      data,
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
