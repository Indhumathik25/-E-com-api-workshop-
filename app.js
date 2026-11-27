async function getfact(){
   let response =await  fetch('https://meowfacts.herokuapp.com/');
   let finalreponse = await response.json()
   document.getElementById('box').innerText=finalreponse.data[0]
   console.log(finalreponse.data[0])
}