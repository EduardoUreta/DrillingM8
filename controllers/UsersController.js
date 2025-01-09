import * as db from "../models/index.cjs"
const { User, Bootcamp } = db.default;

export const UsersController = {};

UsersController.create = async (req, res, next) => {
    const data = req.body;
    try {
      const user = await User.create(data);
      return res.status(201).json({message: {"Usuario Creado": user}});
    } catch (error) {
        next(error);
    };
};

UsersController.findById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const user = await User.findByPk(id, {include: Bootcamp});
        if(!user) return res.status(404).json({message: "Usuario no encontrado"});
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    };
};

UsersController.findAll = async (req, res, next) => {
    try {
        const users = await User.findAll({include: Bootcamp});
        if(!users) return res.status(404).json({message: "Aún no hay usuarios"});
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    };
};

UsersController.update = async(req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const user = await User.findByPk(id);
        if(!user) return res.status(404).json({message: "Usuario no encontrado"});

        await User.update(data, {where: {id}});
        return res.status(200).json({message: "Usuario actualizado"});
    } catch (error) {
        next(error);
    };
};

UsersController.delete = async(req, res, next) => {
    const id = req.params.id;
    try {
        const user = await User.findByPk(id);
        if(!user) return res.status(404).json({message: "Usuario no encontrado"});

        await User.destroy({where: {id}});
        return res.status(200).json({message: "Usuario eliminado"})
    } catch (error) {
        next(error);
    }
};
