import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController{
  async create(req:Request, resp:Response){
    const {name, email} = req.body;
    
    const userRepository = getRepository(User);
    
    const userAlreadyExists = await userRepository.findOne({
      email
    });

    if(userAlreadyExists){
      return resp.status(400).json({
        error: "User already exists!"
      });
    }
    
    const user = userRepository.create({
      name, 
      email
    });

    await userRepository.save(user);
    
    return resp.json(user);
  }
}

export {UserController};