module.exports = {
  server: {
    // MONGODB_URL : "mongodb+srv://chamil:Chamil1996@online-shopping-store-2gpuz.gcp.mongodb.net/test?retryWrites=true&w=majority",

    MONGODB_URL:
      "mongodb://chamil:Chamil1996@online-shopping-store-shard-00-00-2gpuz.gcp.mongodb.net:27017,online-shopping-store-shard-00-01-2gpuz.gcp.mongodb.net:27017,online-shopping-store-shard-00-02-2gpuz.gcp.mongodb.net:27017/test?ssl=true&replicaSet=online-shopping-store-shard-0&authSource=admin&retryWrites=true&w=majority",

    DB_CONNECTED: "Database is connected ",
    DB_NOT_CONNECTED: "Can not connect to the database ",
    SERVER: "Server is running on Port : ",
  },

  emailConfigure: {
    Email: "chamilpearson@gmail.com",
    password: "Sliit#*1996",
  },

  JWTKEY: {
    key: "UserScret",
  },
};
