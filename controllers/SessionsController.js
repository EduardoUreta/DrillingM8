import * as db from "../models/index.cjs";
import { CreateSignature, verifyPassword } from "../utils/index.js";
const { User } = db.default;

export class SessionsController {

    static register = async (req, res, next) => {
        const data = req.body;
        try {
          const user = await User.create(data);
          return res.status(201).json({"Usuario Creado": user});
        } catch (error) {
            next(error);
        };
    };

    static login = async(req, res, next) => {
        const { email, password } = req.body;
        try {
            // Validar que existe el usuario, y validar su contraseña
            const usuario = await User.findOne({where: { email: email }});
            const validPassword = await verifyPassword(password, usuario.password);
            
            if(!usuario || !validPassword) throw new Error("Credenciales Inválidas", { cause: "INVALID_CREDENTIALS" });

            // Crear Firma
            const signature = CreateSignature({
                _id: usuario.id,
                email: usuario.email,
                role: usuario.role
            });
            
            return res.cookie('Bearer', signature).json({message: "Usuario logueado"});

        } catch (error) {
            next(error);
        };
    };

    static logout = async(req, res, next) => {
        if(req.user){
            return res.clearCookie('Bearer').json({message: "Sesión Cerrada"});
        };
        return res.json({message: "No estás logueado para cerrar sesión"})
    };

};