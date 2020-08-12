const Dev = require("../models/Dev");
const api = require("../services/api");
const parseStringAsArray = require("../utils/parseStringAsArray");
const { findConnections, sendMessage } = require("../websocket.js");

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const { data } = await api.get(`/${github_username}`);

      const { name = login, avatar_url, bio } = data;

      const techsUser = parseStringAsArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsUser,
        location,
      });
      console.log("ok");
      // Filtrar conexãoes que estejam no máximo 10km de distãncia e com o novo dev com pelo menos 1 das tecnologias
      const sendMessageTo = findConnections({ latitude, longitude }, techsUser);
      console.log(sendMessageTo);
      sendMessage(sendMessageTo, "new-dev", dev);
    }

    return res.json(dev);
  },
};
