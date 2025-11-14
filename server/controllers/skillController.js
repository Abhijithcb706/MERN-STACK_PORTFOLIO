const Skill = require("../models/Skills");

exports.getSkills = async (req, res, next) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });

    res.json(skills);
  } catch (err) {
    next(err);
  }
};

exports.createSkill = async (req, res, next) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (err) {
    next(err);
  }
};

exports.updateSkill = async (req, res, next) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(skill);
  } catch (err) {
    next(err);
  }
};

exports.deleteSkill = async (req,res,next)=>{
    try {
        await Skill.findByIdAndDelete(req.params.id)
        res.json({message:"Skill deleted"})
    } catch (err) {
        next(err)
        
    }
}
