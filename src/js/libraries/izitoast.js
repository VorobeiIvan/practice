// https://izitoast.marcelodolza.com/
// npm install izitoast --save
//  const promise = createPromise(i, delay)
//    .then(({ position, delay }) => {
//      showAlert('✅', `Fulfilled promise ${position} in ${delay}ms`, 'green');
//    })
//    .catch(({ position, delay }) => {
//      showAlert('❌', `Rejected promise ${position} in ${delay}ms`, 'red');
//    });

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showAlert(icon, message, color) {
  iziToast.show({
    title: icon,
    message,
    position: 'topRight',
    messageColor: 'black',
    color,
    timeout: 3000,
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
  });
}
