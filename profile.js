let colorBtn = document.querySelector('#color');
let placeBtn = document.querySelector('#place');
let ritualBtn = document.querySelector('#ritual');

colorBtn.addEventListener('click', () => {
    alert('Your skin tone');
})
placeBtn.addEventListener('click', () => {
    alert(`Wherever I can see you but you can't see me.`);
})

ritualBtn.addEventListener('mouseover', () => {
    ritualBtn.style.background = 'black'; 
})


ritualBtn.addEventListener('click', () => {
    alert(`You'll see when you close your eyes and sleep tonight.`)
})