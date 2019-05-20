// window.onload = function() {
//   get();
// };

// window.onload = function() {
//   getMany();
// };  


const newArr = [];
const allUsers = document.querySelector('#users');

// class for users so new ones can be added on click
class User {
  constructor(name, image) {
    this.name = name;
    this.image =  image;
  }
}

// pulling initial info about user from api to the DOM
function get(){
    fetch("https://randomuser.me/api/")
      .then( response => response.json())
      .then( data => {
        data.results.forEach(function(element) {
          let name = element.name.first;
          let image = element.picture.large;
          let birthday = element.dob.date;
          let age = element.dob.age;
          let address = element.location.street;
          let index = newArr.length;
          newArr.push(new User(name, image, birthday, age, address, index));
          createUser(name, image, birthday, age, address, index);
          console.log(newArr)
        }); 
      })
      .catch( error => console.log("oops, looks like we got an error: ", error))
      .finally( ()=> console.log("finally, This function always runs...")) // Whether or not there's an error or success, this will happen such as stopping a loading wheel on the front end
}

// what the card will look like when pulled to the DOM
  const createUser = (name, image, birthday, age, address, index) => {
    allUsers.innerHTML += `
      <div style='display:inline-block'; class='eachUser'>
        <div>
        ${name}
        <br>
        <img src='${image}'/>
        <br>
        <button onclick='moreInfo()'id=${index}> More Info </button>
        <p style='display:none' ; id=${index}>
        ${birthday}
        <br>
        ${age}
        <br>
        ${address}
        </p>
        </div>
      </div>
    `
  }

function moreInfo(index) {
    // document.querySelector("p.moreinfo").style.display = "inline-block";
    document.querySelector(index).style.display = "inline-block";
}







// function getMany() {
//   fetch("https://randomuser.me/api/?results=5")
//   .then(response => response.json())
//   .then(data => {
//   console.log(data);
//   data.results.map(y => {
//   let key = x;
//   let name = y.name.first + " " + y.name.last;
//   let image = y.picture.thumbnail;
//   let moreInfo = {
//   dob: y.dob,
//   email: y.email
//   };
//   users.push(new User(name, image, moreInfo));
//   createDom(name, image, moreInfo, key);
//   });
//   });
//   console.log(users);
//   }