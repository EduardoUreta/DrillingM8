import * as db from "../models/index.cjs"
const { Bootcamp, user_bootcamp, User } = db.default;

export const BootcampController = {}

BootcampController.create = async (req, res, next) => {
    const data = req.body;
    try {
        const bootcamp = await Bootcamp.create(data);
        return res.status(201).json({message: {"Bootcamp Creado": bootcamp}});
    } catch (error) {
        next(error);
    };
};

BootcampController.addUser = async(req, res, next) => {
    const data = req.body;
    try {
        const addUserToBootcamp = await user_bootcamp.addUser(data);
        return res.status(201).json({message: {"Usuario agregado al bootcamp": addUserToBootcamp}});
    } catch (error) {
        next(error);
    }
};

BootcampController.findById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const bootcamp = await Bootcamp.findByPk(id, {include: User});
        if(!bootcamp) return res.status(404).json({message: "Bootcamp no encontrado"});
        return res.status(200).json(bootcamp);
    } catch (error) {
        next(error);
    };
};

BootcampController.findAll = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.findAll({include: User});
        if(!bootcamps) return res.status(404).json({message: "Aún no hay bootcamps"});
        return res.status(200).json(bootcamps);
    } catch (error) {
        next(error);
    };
};