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
        const company = await this.positionRepository.find({
            where: { cnpj }
        })

        if (!company) {
            return "Position not found!"
        }
        return company
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id
        const position = await this.positionRepository.findOne({
            where: { id }
        })

        if (!position) {
            return "Position not found!"
        }
        return position
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
            benefits,
            approved: 'pending'
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

    async approveOrRejectPosition(request: Request, response: Response, next: NextFunction){
        const id = request.params.id
        const { approved } = request.body
        let position = await this.positionRepository.findOneBy({ id })

        if (!position) {
            return "This position does not exist!"
        }

        position.approved = approved

        return await this.positionRepository.save(position)
    }

}