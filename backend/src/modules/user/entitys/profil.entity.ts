import { 
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity('Profil')
export class Profil extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The profil unique identifier'
    })
    profilId: number;

    @Column({
        type: 'varchar',
    })
    surname: string;

    @Column({
        type: 'varchar',
    })
    name: string;

    @Column({
        type: 'varchar',
        nullable: true
    })
    patronymic: string;

    @Column({
        type: 'varchar',
    })
    phone: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}