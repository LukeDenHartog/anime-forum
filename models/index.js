const User = require("./User");
const Comment = require("./Comment");

User.hasMany(Comment);

Comment.belongsTo(User, {
    foreignKey: "user_id",
  });

module.exports = { User, Comment };