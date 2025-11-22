import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { products_db } from 'src/data/db.data';
import { ProductCreateDTO } from './dtos/product.create.dto';
import { ProductUpdateDTO } from './dtos/product.update.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect();
        console.log('Database connected');
    }

    findAll() {
        return products_db;
    }

    findOne(id: number) {
        const product = products_db.find(item => item.id == id);

        if (!product) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }

        return product;
    }

    create(productCreateDTO: ProductCreateDTO) {
        return this.product.create({
            data: productCreateDTO
        });
    }

    update(id: number, productUpdateDTO: ProductUpdateDTO) {

        const index = products_db.findIndex(item => item.id == id);

        if (index === -1)
            throw new NotFoundException('Producto no encontrado');

        const producto = { ...products_db[index], ...productUpdateDTO };

        products_db[index] = producto;

        return producto;
    }

    delete(id: number) {
        const index = products_db.findIndex(item => item.id == id);

        if (index === -1)
            throw new NotFoundException('Producto no encontrado');

        products_db.splice(index, 1);

        return { message: 'Producto eliminado correctamente' }
    }

}
