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

    @Column()
    salary: string

    @Column()
    benefits: string

}
