import { 
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { ProfileProps } from "../interfaces/profileProps";

@Entity('profile')
export class Profile extends BaseEntity implements ProfileProps {
    @PrimaryGeneratedColumn({
        comment: 'The profil unique identifier'
    })
    profileId: number;

    @Column({
        type: 'varchar',
    })
    last_name!: string;

    @Column({
        type: 'varchar',
    })
    first_name!: string;

    @Column({
        type: 'varchar',
        nullable: true
    })
    patronymic: string;

    @Column({
        type: 'varchar',
    })
    phone!: string;

    @Column({
        type: Boolean,
        default: false
    })
    confirm!: boolean;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updateAt?: Date;
}