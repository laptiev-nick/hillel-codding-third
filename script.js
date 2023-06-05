const hours = prompt('Enter amount of hours');
let allSeconds = 0;

if(hours !== null && !isNaN(+hours) && hours?.trim() !== ''){
    allSeconds = hours * 3600;
    alert(`${allSeconds}`);
}
else{
    alert('You wrote not a number!');
}