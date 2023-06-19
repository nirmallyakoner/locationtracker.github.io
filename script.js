const findmyLocation = () => {
    const status = document.getElementById("status");

    const success = (position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // console.log(latitude + 'and' + longitude);  //returns 23.2189447 88.3530653


        const geoAPI = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=38cbe763f0af4634b91d0b82ce02cf22`

        fetch(geoAPI)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                status.textContent = data.obj.results[0].formatted;
            })
    }
    const error = () => {
        status.innerHTML = "Error"
    }
    navigator.geolocation.getCurrentPosition(success, error); /*
     returns coords: GeolocationCoordinates {latitude: 23.2189447, longitude: 88.3530653, altitude: null, accuracy: 1980.0358315387675, altitudeAccuracy: null, …}
     timestamp: 1687185026892*/
}
document.getElementById("location").addEventListener("click", findmyLocation);
