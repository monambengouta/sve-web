import axios  from "axios";

const dologin = async (credential) => {
  const baseURL = "http://localhost:3000";
  let data = {
    email: credential.email,
    password: credential.password,
  };
  // eslint-disable-next-line no-undef
  return await axios.post(baseURL + "/loginClient", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export { dologin };
