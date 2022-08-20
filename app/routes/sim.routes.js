module.exports = (app) => {
  const sim = require("../controllers/sim.controller.js");

  app.post("/sims", sim.create);

  app.get("/sims", sim.findAll);

//  app.post("/login", sim.findbycredantials);

  app.get("/sims/:simId", sim.findOne);

  app.put("/sims/:simId", sim.update);

  app.delete("/sims/:simId", sim.delete);
};
