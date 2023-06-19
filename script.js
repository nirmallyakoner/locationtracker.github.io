const findmyLocation = () => {
    const status = document.getElementById("status");

    const success = (position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // console.log(latitude + "" + longitude);

        const geoAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

        fetch(geoAPI)
            .then(res => res.json())
            .then(data => {
                status.textContent = data.principalSubdivision
            })
    }

    const error = () => {
        status.innerHTML = "Error"
    }



    navigator.geolocation.getCurrentPosition(success, error);
}

document.getElementById("location").addEventListener("click", findmyLocation);
