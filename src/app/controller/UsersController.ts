import { Request, Response } from "express";
import { UsersService } from "../service/UsersService";

class UsersController {

    async handle(req: Request, res: Response) {
        const usersService = new UsersService()
        const user = await usersService.handle(req.body) // {name, email, password, roles}
        return res.status(201).json(user)
    }

    async getaAllUsers(req: Request, res: Response) {
        
    }   
}

export { UsersController }