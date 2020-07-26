import decode from "jwt-decode";
export default {
  isAuthenticated: function () {
    const token = localStorage.getItem("auth_token");
    if (token) {
      return !!token && !this.isTokenExpired(token);
    } else {
      return false;
    }
  },
  isTokenExpired: function (token) {
    try {
      const decoded = decode(token, { header: true });
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  },
  getProfile: function () {
    return decode(localStorage.getItem("auth_token"));
  },
};
