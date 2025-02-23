import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  withCredentials: true,
});
export async function getMenu(item) {
  const res = await api.get(`menu/${item}`);
  return res;
}
export async function signIn(data) {
  const res = await api.post("auth/login", data);
  return res;
}
export async function signOut() {
  const res = await api.get("auth/logout");
  return res;
}
export async function signup(data) {
  const res = await api.post("auth/signup", data);
  return res;
}
export async function getCurrent() {
  try {
    const res = await api.get("auth/current");
    return res.data;
  } catch (err) {
    console.log("");
  }
}
export async function createOrders(data) {
  const res = await api.post("/orders", data);
  return res;
}
export async function deleteOrderById(id) {
  const res = await api.delete(`/orders/${id}`);
  return res;
}
