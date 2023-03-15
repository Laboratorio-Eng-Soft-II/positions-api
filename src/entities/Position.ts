import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Position {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    cnpj: string

    @Column()
    type: string

    @Column()
    description: string

    @Column()
    main_work: string

    @Column('text', { nullable: true, array: true })
    required_skills: string[]

    @Column()
    salary: number

    @Column()
    benefits: string

}
