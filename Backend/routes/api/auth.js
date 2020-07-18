const router = require("express").Router();
const auth = require("../../controllers/auth");
const { Form } = require("react-bootstrap");

router.post("/", (req, res) => {
  const credentials = {
    email: req.body["email"],
    password: req.body["password"],
  };
  console.log(credentials);
  auth.authenticateUser(credentials, (status, data = "ok") =>
    res.status(status).send(data)
  );
});

router.post("/create", (req, res) => {
  const form = {
    firstName: req.body["firstName"],
    lastName: req.body["lastName"],
    email: req.body["email"],
    password: req.body["password"],
  };
  console.log(form);
  auth.createUser(form, (status, data = "ok") => res.status(status).send(data));
});

module.exports = router;