import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import SettingsRepository from "../repositories/SettingsRepository";

export default class SettingsController {

    public async create(request: Request, response: Response) {

    const {chat, username} = request.body;
    const settingsRepository = getCustomRepository(SettingsRepository)    

    const settings =   settingsRepository.create({
        chat,
        username,
    })

    await settingsRepository.save(settings); 

    return response.status(201).json(settings);
    
    }
}