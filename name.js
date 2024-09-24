// window.onload = function() {
//   const correctAnswers = JSON.parse(localStorage.getItem('correctAnswers')) || [];
//   const correctAnswersList = document.getElementById('correct-answers-list');
  
//   correctAnswers.forEach(answer => {

//     if (answer === 1) {
//       document.getElementById('pin-dammam').style.display = 'block';  // إظهار دبوس الدمام
//     }
//     if (answer === 2) {
//       document.getElementById('pin-riyadh').style.display = 'block';  // إظهار دبوس الرياض
//     }
//     if (answer === 3) {
//       document.getElementById('pin-zhahran').style.display = 'block';  // إظهار دبوس الظهران
//     }
//     if (answer === 4) {
//   document.getElementById('pin-mecca').style.display = 'block';  // إظهار دبوس مكة
// }     if (answer === 5) {
//   document.getElementById('pin-taif').style.display = 'block';  // إظهار دبوس الطائف
// }   if (answer === 6) {
//   document.getElementById('pin-jouf').style.display = 'block';  // إظهار دبوس الجوف
// }     if (answer === 7) {
//   document.getElementById('pin-qassim').style.display = 'block';  // إظهار دبوس القصيم
// }
// if (answer === 8) {
//   document.getElementById('pin-ahsa').style.display = 'block';  // إظهار دبوس الأحساء
// }
//   });
// }


// window.onload = function() {
//   const correctAnswers = JSON.parse(localStorage.getItem('correctAnswers')) || [];
//   correctAnswers.forEach(answer => {
//     const pinId = {
//       1: 'pin-dammam',
//       2: 'pin-riyadh',
//       3: 'pin-zhahran',
//       4: 'pin-mecca',
//       5: 'pin-taif',
//       6: 'pin-jouf',
//       7: 'pin-qassim',
//       8: 'pin-ahsa'
//     }[answer];

//     if (pinId) {
//       document.getElementById(pinId).style.display = 'block';  // إظهار الدبوس
//     }
//   });
// };
