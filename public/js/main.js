const submitBtn=document.getElementById("submitBtn")
let cityName=document.getElementById("cityName");



submitBtn.addEventListener("click",function (e) {
    e.preventDefault();
   
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=YOUR_API_KEY&units=metric`
    fetch(url).then(function(response){
        return response.json();
    }).then(function (data) {

        if(data.cod==404){
            let cityInfo=document.getElementById('cityInfo');
            cityInfo.innerText=`${data.message}`;
        }
        
        else{
            let cityInfo=document.getElementById('cityInfo');
            cityInfo.innerText=`City : ${data.name}`;
    
            let temp=document.getElementById('temp');
            temp.innerText=`temperature : ${data.main.temp} C`;

            let maxtemp=document.getElementById('maxtemp');
            maxtemp.innerText=`Max temperature : ${data.main.temp_max} C`;
        
            let mintemp=document.getElementById('mintemp');
            mintemp.innerText=`Min temperature : ${data.main.temp_min} C`;
        }
        
    })
});
