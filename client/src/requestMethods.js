import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2RhMzZjZjI1NjYyMzE0NDc4MzZmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTc1NjUwNCwiZXhwIjoxNjk2ODYwNTA0fQ.YqrfS9NdiYZ2yLACw7KJI1B1BJVSwRRhLcxxhbtmwDc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}

  });
