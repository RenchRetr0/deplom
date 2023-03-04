import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Profile } from "../entities/profile.entity";

@Injectable()
export class ProfileRepository extends Repository<Profile> {}