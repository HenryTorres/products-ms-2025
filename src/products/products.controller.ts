import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get()
    metodo_de_prueba() {
        return 'Hola Mundo desde Products!!!';
    }
}
