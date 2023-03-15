import { AppDataSource } from '../utils/data-source'
import { NextFunction, Request, Response } from "express"
import { Position } from "../entities/Position"

export class PositionController {

    private positionRepository = AppDataSource.getRepository(Position)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.positionRepository.find()
    }

    async allFromSingleCompany(request: Request, response: Response, next: NextFunction) {
        const cnpj = request.params.cnpj
        const company = await this.positionRepository.findOne({
            where: { cnpj }
        })

        if (!company) {
            return "Position not found!"
        }
        return company
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { cnpj,
                type,
                description,
                main_work,
                required_skills,
                salary,
                benefits } = request.body;

        const position = Object.assign(new Position(), {
            cnpj,
            type,
            description,
            main_work,
            required_skills,
            salary,
            benefits
        })

        return this.positionRepository.save(position)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id
        let positionToRemove = await this.positionRepository.findOneBy({ id })

        if (!positionToRemove) {
            return "This position does not exist!"
        }

        await this.positionRepository.remove(positionToRemove)

        return "Position has been removed!"
    }

}