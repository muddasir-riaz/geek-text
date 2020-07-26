const mongodbConnection = require("../dbconfig/connection.js");
const { ObjectID } = require("mongodb");
const user = {
  getUser: (data, cb) => {
    //Access User Collection in MongoDB
    const collection = mongodbConnection.db().collection("User");
    //Find user by primary key which is email
    collection.findOne({ email: data.email }, (findError, findResult) => {
      if (findResult) {
        const { password, _id, ...rest } = findResult;
        cb(200, rest);
      } else {
        cb(404, findError);
      }
    });
  },
  updateUserEmail: (data, cb) => {
    const creditCardCollection = mongodbConnection
      .db()
      .collection("CreditCard");

    // Update User
    creditCardCollection.updateMany(
      data.primaryKeys,
      data.updates,
      (creditCardLevelErr) => {
        if (!creditCardLevelErr) {
          const shippingAddressesCollection = mongodbConnection
            .db()
            .collection("ShippingAddress");

          shippingAddressesCollection.updateMany(
            data.primaryKeys,
            data.updates,
            (shippingAddressErr) => {
              if (!shippingAddressErr) {
                const userCollection = mongodbConnection
                  .db()
                  .collection("User");
                userCollection.updateOne(
                  data.primaryKeys,
                  data.updates,
                  (userLevelErr, result) => {
                    if (!userLevelErr) {
                      cb(200, result);
                    } else {
                      console.log(
                        "User Email UPDATE ERROR at EMAIL level: " +
                          userLevelErr
                      );
                      cb(500, userLevelErr);
                    }
                  }
                );
              } else {
                console.log(
                  "User Email UPDATE ERROR at SHIPPING_ADDRESS level: " +
                    shippingAddressErr
                );
                cb(500, shippingAddressErr);
              }
            }
          );
        } else {
          console.log(
            "User Email UPDATE ERROR at Credit Card level: " +
              creditCardLevelErr
          );
          cb(500, creditCardLevelErr);
        }
      }
    );
  },
  updateUser: (data, cb) => {
    const collection = mongodbConnection.db().collection("User");
    collection.updateOne(data.primaryKeys, data.updates, (error, result) => {
      if (!error) {
        cb(200, result);
      } else {
        console.log("UPDATE ERROR: " + error);
        cb(500, error);
      }
    });
  },
  getCreditCardsByUser: (data, cb) => {
    const collection = mongodbConnection.db().collection("CreditCard");
    collection.find({ email: data.email }).toArray((findError, findResults) => {
      if (findResults) {
        cb(200, findResults);
      } else {
        cb(404, "CREDIT CARDS NOT FOUND");
      }
    });
  },
  addCreditCard: (data, cb) => {
    const collection = mongodbConnection.db().collection("CreditCard");
    collection.insertOne(data, (addError, addResult) => {
      if (!addError) {
        cb(200, addResult);
      } else {
        console.log(addError);
        cb(500, addError);
      }
    });
  },
  removeCreditCard: (data, cb) => {
    const collection = mongodbConnection.db().collection("CreditCard");
    collection.deleteOne(
      { email: data.email, credit_card_num: data.credit_card_num },
      (deleteError, deleteResult) => {
        if (!deleteError) {
          cb(200, deleteResult);
        } else {
          console.log(deleteError);
          cb(500, deleteError);
        }
      }
    );
  },
  updateCreditCard: (data, cb) => {
    const collection = mongodbConnection.db().collection("CreditCard");
    collection.updateOne(data.primaryKeys, data.updates, (error, result) => {
      if (!error) {
        cb(200, result);
      } else {
        console.log(error);
        cb(500, error);
      }
    });
  },
  getShippingAddressesByUser: (data, cb) => {
    const collection = mongodbConnection.db().collection("ShippingAddress");
    collection.find({ email: data.email }).toArray((findError, findResults) => {
      if (findResults) {
        cb(200, findResults);
      } else {
        cb(404, findError);
      }
    });
  },
  addShippingAddress: (data, cb) => {
    const collection = mongodbConnection.db().collection("ShippingAddress");
    collection.insertOne(data, (addError, addResult) => {
      if (!addError) {
        cb(200, addResult);
      } else {
        console.log(addError);
        cb(500, addError);
      }
    });
  },
  removeShippingAddress: (data, cb) => {
    const collection = mongodbConnection.db().collection("ShippingAddress");
    collection.deleteOne(
      { _id: new ObjectID(data._id) },
      (deleteError, deleteResult) => {
        if (!deleteError) {
          cb(200, deleteResult);
        } else {
          console.log(deleteError);
          cb(500, deleteError);
        }
      }
    );
  },
  updateShippingAddress: (data, cb) => {
    const collection = mongodbConnection.db().collection("ShippingAddress");
    collection.updateOne(
      data.primaryKeys,
      data.updates,
      (updateError, updateResult) => {
        if (!updateError) {
          cb(200, updateResult);
        } else {
          console.log(updateError);
          cb(500, updateError);
        }
      }
    );
  },
};

module.exports = user;
