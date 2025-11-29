import { MessagePattern, Payload } from '@nestjs/microservices';
import { Controller, ParseIntPipe } from '@nestjs/common';

import { ProductsService } from './products.service';
import { ProductCreateDTO } from './dtos/product.create.dto';
import { ProductUpdateDTO } from './dtos/product.update.dto';

@Controller('products')
export class ProductsController {

    constructor(private readonly service: ProductsService) { }

    @MessagePattern({ cmd: 'products.findall' })
    findAll() {
        return this.service.findAll();
    }

    @MessagePattern({ cmd: 'products.findone' })
    findOne(@Payload('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @MessagePattern({ cmd: 'products.create' })
    create(@Payload() productCreateDTO: ProductCreateDTO) {
        return this.service.create(productCreateDTO);
    }

    @MessagePattern({ cmd: 'products.update' })
    update(@Payload() productUpdateDTO: ProductUpdateDTO) {
        return this.service.update(+productUpdateDTO.id, productUpdateDTO)
    }

    @MessagePattern({ cmd: 'products.delete' })
    delete(@Payload('id', ParseIntPipe) id: number) {
        return this.service.delete(id);
    }
}
