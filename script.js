const findmyLocation = () => {
    const status = document.getElementById("status");

    const success = (position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude + "   " + longitude);

        
        // const geoAPI = `http://api.ipstack.com/2409:40e1:2b:6f34:64b0:689c:3a97:3ec6?access_key=7c26bbd0fd1d4bfa8e7400b482b6a531&format=1`

        // fetch(geoAPI)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         status.textContent = data.zip;
        //     })
    }

    const error = () => {
        status.innerHTML = "Error"
    }



    navigator.geolocation.getCurrentPosition(success, error);
}

document.getElementById("location").addEventListener("click", findmyLocation);
