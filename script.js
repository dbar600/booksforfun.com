let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=kindred`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  document.querySelector("#content").innerHTML += `<h3>Title: ${data.items[0].volumeInfo.title} <h3>`
  document.querySelector("#content").innerHTML += `<img src = "${data.items[0].volumeInfo.imageLinks.thumbnail}">`
  
}
