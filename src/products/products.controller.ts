import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductCreateDTO } from './dtos/product.create.dto';
import { ProductUpdateDTO } from './dtos/product.update.dto';

@Controller('products')
export class ProductsController {

    constructor(private readonly service: ProductsService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        const product = this.service.findOne(id);
        return product;
    }

    @Post()
    create(@Body() productCreateDTO: ProductCreateDTO) {
        return this.service.create(productCreateDTO);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() productUpdateDTO: ProductUpdateDTO) {

        return this.service.update(id, productUpdateDTO)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.service.delete(id);
    }
}
