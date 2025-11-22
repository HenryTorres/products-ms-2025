import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductCreateDTO } from './dtos/product.create.dto';
import { ProductUpdateDTO } from './dtos/product.update.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {

    constructor(private readonly prisma: PrismaService) { };

    create(productCreateDTO: ProductCreateDTO) {
        return this.prisma.product.create({
            data: productCreateDTO
        });
    }

    findAll() {
        return this.prisma.product.findMany();
    }

    findOne(id: number) {
        const product = this.prisma.product.findUnique({ where: { id } });

        if (!product) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }

        return product;
    }

    async update(id: number, productUpdateDTO: ProductUpdateDTO) {

        await this.findOne(id);

        const product = await this.prisma.product.update({
            where: { id },
            data: productUpdateDTO
        });

        return product;
    }

    async delete(id: number) {
        await this.findOne(id);

        const product = await this.prisma.product.delete({ where: { id } });
        return product
    }

}
