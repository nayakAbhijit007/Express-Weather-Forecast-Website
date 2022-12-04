const cityName = document.getElementById('cityName')
const searchBtn = document.querySelector(".btn");
const city_name = document.getElementById("city_name")
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");



const getInfo = async (event) =>{

    event.preventDefault();
    
    
    let cityVal = cityName.value;
    
    if(cityVal === ''){
        alert("Enter a valid city name");
    }
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ed39ef2e4401e819cf0e3d392c27d402`
        const response = await fetch(url);
        // console.log(response);
        const data = await response.json();
        console.log(data);
        const arrData = [data];
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = `${arrData[0].main.temp} °C`;
        temp_status.innerText = arrData[0].weather[0].main;
        document.querySelector(".icons").src =`https://openweathermap.org/img/wn/${arrData[0].weather[0].icon}.png`
        }
        catch{
            alert("Some error is there please check")
        }
    }
    
  
    
}
searchBtn.addEventListener('click', getInfo);
  
