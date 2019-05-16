const newArr = [];

function get(){
    fetch("https://randomuser.me/api/")
      .then( response => response.json())
      .then( data => {
        // newArr.push(data)
        // console.log(data)
        // console.log("First Name: ",newArr["0"].results)["0"].name.first))
        newArr.push(data);
        console.log(newArr)

        const firstName = newArr[i].results['0'].name.first;
        [i].results["0"].name.first
        // const picture = 
        firstName.innerHTML = `
            User Name: ${firstName}
        `
      })
      .catch( error => console.log("oops, looks like we got an error: ", error))
      .finally( ()=> console.log("finally, This function always runs...")) // Whether or not there's an error or success, this will happen such as stopping a loading wheel on the front end
}

  console.log('Entire new array: ', newArr);
  console.log('Just the name : ', newArr.results);

  const createDom = (name, image) => {
    allUsers.innerHTML += `
      <div style='display:inline-block'; class='eachUser'>
        <div>
        ${name}
        <br>
        <img src='${image}'/>
        </div>
      </div>
    `
  }