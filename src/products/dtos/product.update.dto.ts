import { PartialType } from "@nestjs/mapped-types";
import { IsNumber } from "class-validator";
import { ProductCreateDTO } from "./product.create.dto";

export class ProductUpdateDTO extends PartialType(ProductCreateDTO) {
    @IsNumber()
    id: number;
}