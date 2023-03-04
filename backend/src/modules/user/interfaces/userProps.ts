import { TimestampEmtity } from "@common/interfaces/TimestampEmtity";

export interface UserProps extends TimestampEmtity {
    email: string;
    password: string;
}