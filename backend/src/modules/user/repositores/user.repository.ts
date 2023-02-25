import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "../entitys/user.entity";

@Injectable()
export class UserRepository extends Repository<User> {}