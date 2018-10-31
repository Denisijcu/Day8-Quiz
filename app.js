let peoples = ['Cindy', 'Daniel', 'Cristal', 'Julia', 'Robert', 'Paul', 'Milly', 'John', 'Rebeca', 'Sean', 'Viky', 'David'];

let images = ['img/cindy.jpg', 'img/daniel.jpg', 'img/cristal.jpg', 'img/julia.jpg', 'img/robert.jpg', 'img/paul.jpg', 'img/milly.jpg', 'img/john.jpg', 'img/rebeca.jpg', 'img/sean.jpg', 'img/viky.jpg', 'img/david.jpg'];

let temp = [];

const peopleWaiting = document.querySelector('#peoples');
const numTable = document.querySelector('#numTable');
const btnBell = document.querySelector('#btnBell');

let names = [];


let p = 0;
let len = peoples.length - 1;

btnBell.addEventListener('click', () => {


  if (p > len) {
    return;
  }


  temp.push(images.shift());
  names.push(peoples.shift());
  onCustomers();


  let fullTables = ` <audio id="cAudio"  autoplay>
 
  <source src="ding.wav" type="audio/wav">
</audio>`;
  for (let j = 0; j < temp.length; j++) {
    fullTables += ` <div class="busyTable"> Table ${j} <p> ${names[j]} </p>
  
<img class="pictures" src="${temp[j]}" />
  </div>`;
  }
  numTable.innerHTML = fullTables;


  p++;

});



function onCustomers() {
  var customers = ' <ol>';
  images.forEach((pic, i) => {

    customers += `
   
    <li>
    <img src="${pic}" />
  
    <p>${peoples[i]} </p>
  
    </li>
   
    `;

  });
  console.log('images', customers);

  peopleWaiting.innerHTML = customers + '</ol>';

  let busyTables = '';
  for (let j = 0; j < 13; j++) {
    busyTables += ` <div class="busyTable"> Table ${j} <p> Busy Now </p>

  </div>`;
  }
  numTable.innerHTML = busyTables;
  console.log(busyTables);

}

onCustomers();