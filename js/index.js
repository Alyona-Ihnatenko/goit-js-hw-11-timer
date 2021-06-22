// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jun 30, 2021'),
//   });
  
function pad(value){
    return String(value).padStart(2,'0');
}

function getComponentsTime(time){
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad( Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins =  pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad( Math.floor((time % (1000 * 60)) / 1000));
    return {days,hours,mins,secs};
}


// const myBirthdayDate = new Date('Jun 30, 2021').getTime();

// function Timer({selector}) {
//     let id = 0;
//     document.querySelector(selector)
//         .insertAdjacentHTML('beforeend', template('0:0:0:0'));

//     const valueRef = document.querySelector(`${selector} .value`);

//     const updateValue = (value) => {
//         valueRef.textContent = value;
//     }

//     this.start = () => {
//         if(id) {
//             return;
//         }
//         id = setInterval(() => {
//             const diff = myBirthdayDate - Date.now();
//             const days = days(diff);
//             const hours = hours(diff);
//             const mins = mins(diff);
//             const seconds = secs(diff);
//             updateValue(`${days} days ${hours} hours ${mins} mins ${seconds} seconds`);
//         }, 100);
//     };

//     this.stop = () => {
//         clearTimeout(id);
//         id = 0;
//     }
// }