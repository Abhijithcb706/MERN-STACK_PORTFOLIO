const Hero = require("../models/Hero");

exports.getHero = async (req, res, next) => {
  try {
    const hero = await Hero.findOne();
    res.json(hero);
  } catch (err) {
    next(err);
  }
};

exports.upsertHero = async (req, res, next) => {
  try {
    const data = req.body;
    let hero = await Hero.findOne();

    if (hero) {
      Object.assign(hero, data);
      await hero.save();
      return res.json(hero);
    }
    hero = await Hero.create(data);
    res.status(201).json(hero);
  } catch (err) {
    next(err);
  }
};
