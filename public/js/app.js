

const weatherForm = document.querySelector('form');
const searchAddress = document.querySelector('input');

const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const endPoint = '/weather/?address='+searchAddress.value
    fetch(endPoint).then((response)=>{
        response.json().then((data)=>{
            message1.textContent = 'Loading....'
           if(data.error){
            message1.textContent = data.error.toString()
           } else {
            message1.textContent = data.place_name.toString()
            message2.textContent = data.weatherReport.toString()
           }
        })
    })

})
