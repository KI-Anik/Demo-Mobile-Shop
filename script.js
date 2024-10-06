const loadAllPhones = async () => {
    console.log('wow')
    document.getElementById('spinner').style.display = "none";

    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => console.log(data))

    const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await response.json();
    displayAllPhone(data.data);
};

const displayAllPhone = (phone) => {
    console.log(phone);
}

const handleSearch = () => {
    // console.log('object');
    document.getElementById('spinner').style.display = "block";
    setTimeout(() => {
        loadAllPhones()
    }, 3000);
};

loadAllPhones()