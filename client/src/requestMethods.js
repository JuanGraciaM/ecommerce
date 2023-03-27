import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWUzZTU1YjNlNzgwYmZjN2Q3NzAzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTg4Mzg0NiwiZXhwIjoxNjgwMTQzMDQ2fQ.12_m6OqVyYIj6FjTGaP9HNONst8h-zCbuLTlZEScoq8"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});