const axios = require("axios");
// const https = require("https");

// const agent = new https.Agent({
//   rejectUnauthorized: false,
// });
export default {
  //Gets all Campaign names
  login: function (data) {
    console.log(data);
    return axios
      .post("http://localhost:5000/auth", data /*,{ httpsAgent: agent }*/)
      .catch(function (error) {
        if (error.response) {
          console.log("Error data : ", error.response.data);
          console.log("Error status : ", error.response.status);
          console.log("Error headers : ", error.response.headers);
        } else if (error.request) {
          console.log("Error request : ", error.request);
        } else {
          console.log("Error message : ", error.message);
        }
        console.log(error.config);
      });
  },
  createAccount: function (data) {
    return axios
      .post(
        "http://localhost:5000/auth/create",
        data /*,{ httpsAgent: agent }*/
      )
      .catch(function (error) {
        if (error.response) {
          console.log("Error data : ", error.response.data);
          console.log("Error status : ", error.response.status);
          console.log("Error headers : ", error.response.headers);
        } else if (error.request) {
          console.log("Error request : ", error.request);
        } else {
          console.log("Error message : ", error.message);
        }
        console.log(error.config);
      });
  },
  getUser: function (data) {
    let token = localStorage.getItem("auth_token");
    return axios.post("http://localhost:5000/user/getUser", data, {
      headers: {
        "x-access-token": token,
      },
    });
  },
  updateUser: function (data) {
    let token = localStorage.getItem("auth_token");
    return axios.post("http://localhost:5000/user/updateUser", data, {
      headers: {
        "x-access-token": token,
      },
    });
  },
  updateUserEmail: function (data) {
    let token = localStorage.getItem("auth_token");
    return axios.post("http://localhost:5000/user/updateUserEmail", data, {
      headers: {
        "x-access-token": token,
      },
    });
  },
  getShippingAddressesByUser: function (data) {
    let token = localStorage.getItem("auth_token");
    return axios.post(
      "http://localhost:5000/user/getShippingAddressesByUser",
      data,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
  },
  addShippingAddress: function (data) {
    let token = localStorage.getItem("auth_token");
    return axios.post("http://localhost:5000/user/addShippingAddress", data, {
      headers: {
        "x-access-token": token,
      },
    });
  },
  deleteShippingAddress: function (data) {
    let token = localStorage.getItem("auth_token");
    return axios.post(
      "http://localhost:5000/user/deleteShippingAddress",
      data,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
  },
  updateShippingAddress: function (data) {
    let token = localStorage.getItem("auth_token");
    return axios.post(
      "http://localhost:5000/user/updateShippingAddress",
      data,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
  },
  removeCreditCard: function (data) {
    let token = localStorage.getItem("auth_token");
    return axios.post("http://localhost:5000/user/removeCreditCard", data, {
      headers: {
        "x-access-token": token,
      },
    });
  },
  addCreditCard: function (data) {
    let token = localStorage.getItem("auth_token");
    return axios.post("http://localhost:5000/user/addCreditCard", data, {
      headers: {
        "x-access-token": token,
      },
    });
  },
  getCreditCardsByUser: function (data) {
    let token = localStorage.getItem("auth_token");
    return axios.post("http://localhost:5000/user/getCreditCardsByUser", data, {
      headers: {
        "x-access-token": token,
      },
    });
  },
  updateCreditCard: function (data) {
    let token = localStorage.getItem("auth_token");
    return axios.post("http://localhost:5000/user/updateCreditCard", data, {
      headers: {
        "x-access-token": token,
      },
    });
  },
};
