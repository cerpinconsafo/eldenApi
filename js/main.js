//Example fetch using eldenringapi
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
// I use 15 because this is the fixed number of classes for this endpoint
  let randomNum = Math.round(Math.random() * 14)
  console.log(`${randomNum} is the random number for this roll.`);

 
  // const choice = document.querySelector('input').value
  // console.log(choice)

  const url = `https://eldenring.fanapis.com/api/classes`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.data[randomNum].image
        document.querySelector('#className').innerText = data.data[randomNum].name
        document.querySelector('#description').innerText = data.data[randomNum].description
        document.querySelector('#stats').innerText = JSON.stringify(data.data[randomNum].stats)
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
// // 
// if( data.media_type === 'image' ){
//   document.querySelector('img').src = data.hdurl
// }else if(data.media_type === 'video'){
//   document.querySelector('iframe').src = data.url
// }

// document.querySelector('h3').innerText = data.explanation