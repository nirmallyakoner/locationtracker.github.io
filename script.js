const findmyLocation= ()=>{
    const status=document.getElementById("status");

const success=(position)=>{
    console.log(position);
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    console.log(latitude+""+longitude);
}

const error=()=>{
    status.innerHTML="Error"
}



    navigator.geolocation.getCurrentPosition(success, error); 
}

document.getElementById("location").addEventListener("click",findmyLocation);
