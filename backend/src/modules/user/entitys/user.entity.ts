import { 
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import * as bcrypt from 'bcrypt';
import { Profile } from "./profile.entity";
import { UserRole } from "../enums/user.enum";

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The user unique identifier'
    })
    userId: number;

    @Column({
        type: 'varchar',
        unique: true,
    })
    email: string;

    @Column({
        type: 'varchar',
    })
    password: string;

    @Column({
        type: 'varchar',
        default: UserRole.USER
    })
    role: string;

    @OneToOne(() => Profile)
    @JoinColumn({ name: 'profileId'})
    profileId: Profile

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @BeforeInsert()
    async setPassword(password: string) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(password || this.password, salt);
    }
}