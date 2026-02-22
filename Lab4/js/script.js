let zipElement = document.querySelector("#zipCode");
let passElement = document.querySelector("#pass");
let useElement = document.querySelector("#username");

zipElement.addEventListener("change", displayCity);
zipElement.addEventListener("change", displayLatitude);
zipElement.addEventListener("change", displayLongitude);
passElement.addEventListener("click", displaySuggPass);
useElement.addEventListener("change", usernameVal);
zipElement.addEventListener("change", displayCounty);

displayStates();
async function displayStates() {
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);
        //alert(data[0].state);

        for (let i of data) {
            let optionEl = document.createElement("option");
            optionEl.textContent = i.state;
            optionEl.value = i.usps;

            document.querySelector("#state").append(optionEl);

        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } //catch    
}

async function displayCity() {
    //alert("displaying city...")
    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //alert(data.city);
    document.querySelector("#city").textContent = data.city;

}
async function displayLatitude() {
    //alert("displaying city...")
    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //alert(data.city);
    document.querySelector("#latitude").textContent = data.latitude;

}
async function displayLongitude() {
    //alert("displaying city...")
    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //alert(data.city);
    document.querySelector("#longitude").textContent = data.longitude;

}
async function displaySuggPass() {
    let suggPass = passElement.value;
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //alert(data.city);
    document.querySelector("#suggPass").textContent = data.password;
    if (passElement.value.length < 7)
    {
        document.querySelector("#issPass").textContent = "Error: password too small";
    }
    else((passElement.value.length > 7))
    {
        document.querySelector("#issPass").textContent = " ";
    }

}
async function usernameVal() {
    let username = useElement.value;
    let url = "https://csumb.space/api/usernamesAPI.php?username=" + username;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    if (data.available == true) {
        document.querySelector("#val").textContent = "Username available";
    }
    else {
        document.querySelector("#val").textContent = "Username Not available";
    }

}

async function displayCounty() {
 let url = " https://csumb.space/api/countyListAPI.php?state=ca";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);
        //alert(data[0].state);

        for (let i of data) {
            let optionEl = document.createElement("option");
            optionEl.textContent = i.state;
            optionEl.value = i.usps;

            document.querySelector("#county").append(optionEl);

        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } //catch    
}