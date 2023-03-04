import { TimestampEmtity } from "@common/interfaces/TimestampEmtity";

export interface ProfileProps extends TimestampEmtity {
    last_name: string;
    first_name: string;
    patronymic: string;
    phone: string;
}