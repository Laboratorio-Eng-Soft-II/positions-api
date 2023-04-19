import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Enrollment {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    position_id: string

    @Column()
    student_nusp: string

    @Column()
    cv_link: string

    @Column()
    linkedin_link: string

}
