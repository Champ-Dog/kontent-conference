import { deliveryClient } from '../Client'

const hero = await deliveryClient.items()
    .type('hero_image___landing_page')
    .toPromise();

console.log(hero)