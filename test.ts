import { Mobile } from "./mobile";
import { MobileLibrary } from "./mobileLibrary";

let myPhone0: Mobile = new Mobile ('Nokia', '3210', 'Nokia', 0.016, 'grey', false, 0, 50);
let myPhone1: Mobile = new Mobile ('iPhone', '3G', 'Apple', 8, 'silver', false, 1, 150);
let myPhone2: Mobile = new Mobile ('Galaxy', '10', 'Samsung', 16, 'black', true, 2, 350);
let myPhone3: Mobile = new Mobile ('Xiaomi', 'Mi 11', 'Xiaomi', 64, 'blue', true, 2, 700);

let mobileArray: Mobile[] = [myPhone0, myPhone1, myPhone2, myPhone3];
let myMobileLibrary: MobileLibrary = new MobileLibrary ("myMobileLibrary", "Palencia", mobileArray);

console.log('\n\n\x1b[35m%s\x1b[0m','1.Comprobar todos los métodos:\n')
console.log('\x1b[36m%s\x1b[0m','a.Métodos get y totalPricesCal:');
console.log('- Nombre:', myMobileLibrary.getName());
console.log('- Listado de móviles', myMobileLibrary.getMobiles().length + ":", myMobileLibrary.getMobiles());
console.log('- Localización:', myMobileLibrary.getLocation());
console.log('- Precio de todos los dispositivos:', myMobileLibrary.getTotalPrice());

console.log('\n\x1b[36m%s\x1b[0m','b.Métodos set:');
myMobileLibrary.setName('MyNewMobileLibrary');
myMobileLibrary.setLocation('Lisboa');
let myPhone4: Mobile = new Mobile ('iPhone', '12 Pro', 'Apple', 256, 'purple', true, 4, 1000);
myMobileLibrary.setMobiles(myPhone4);
myMobileLibrary.setTotalPrice(2900);
console.log('- Nombre:', myMobileLibrary.getName());
console.log('- Listado de móviles:', myMobileLibrary.getMobiles().length + ":", myMobileLibrary.getMobiles());
console.log('- Localización:', myMobileLibrary.getLocation());
console.log('- Precio de todos los dispositivos:', myMobileLibrary.getTotalPrice());

console.log('\n\x1b[36m%s\x1b[0m','c.Método printLibrary:');
myMobileLibrary.printLibrary();