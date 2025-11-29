import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';


const main = async () => {
    const client: ClientProxy = ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
            host: 'localhost',
            port: 8080
        }
    });

    try {

        const rpta2 = await firstValueFrom(client.send(
            { cmd: 'products.create' },
            { name: 'Leche Gloria', price: 7.30 }))
        console.log(rpta2);

        const rpta = await firstValueFrom(client.send({ cmd: 'products.findall' }, {}))
        console.log(rpta);

    } catch (error) {
        console.log(error);
    } finally {
        console.log('Cerrando la conexión');
        client.close();
    }
}

main();