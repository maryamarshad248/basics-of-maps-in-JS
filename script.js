'use strict';
const restaurant = new Map();
restaurant.set('Name', 'classico Italiano');
restaurant.set(1, 'firenze, Italy');
restaurant.set(2, 'lisbon, portugal');
console.log(restaurant);

restaurant
  .set('categories', ['italian', 'pizzeria', 'vegeterian', 'organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'we are open')
  .set(false, 'we are close:(');

console.log(restaurant.get('Name'));
console.log(restaurant.get('categories'));
console.log(restaurant.get(1));
console.log(restaurant.get(2));
console.log(restaurant.get(true));
console.log(restaurant.get(false));
console.log(restaurant.set('Open', 11));
console.log(restaurant.set('Close', 23));

const time = 21;
console.log(
  restaurant.get(
    time > restaurant.get('Open') && time < restaurant.get('Close')
  )
);

console.log(restaurant.has('categories'));
console.log(restaurant.has(1));

restaurant.delete(2);
console.log(restaurant);
console.log(restaurant.size);

//restaurant.clear();
//console.log(restaurant);

const arr = [1, 2];
restaurant.set(arr, 'Test');
restaurant.set(document.querySelector('h1'), 'Heading');
console.log(restaurant.get(arr));
console.log(restaurant);
console.log(restaurant.size);
