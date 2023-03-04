import { IsDate, IsNotEmpty } from "class-validator";

export abstract class UpdateDto {
    @IsDate()
    @IsNotEmpty()
    public readonly updatedAt: Date = new Date();
}

export abstract class CreateDto extends UpdateDto {
    @IsDate()
    @IsNotEmpty()
    public readonly createdAt: Date = new Date();
}