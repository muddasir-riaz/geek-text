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
      .post("http://localhost:5000/auth/create", data/*,{ httpsAgent: agent }*/)
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
};