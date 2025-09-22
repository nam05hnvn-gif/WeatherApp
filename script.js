const API_KEY = "c741fdd2e6293419d2d479fdcfd7548f";

const name_input = document.querySelector("#name_input");
const name_form = document.querySelector("#name_form");
const troll = document.querySelector("#troll");
const location_form = document.querySelector("#location_form");
const location_input = document.querySelector("#location_input");
const weather_info = document.querySelector(".weather_info");
const nhiet_do = document.querySelector("#nhiet_do");
const chi_tiet = document.querySelector("#chi_tiet");
const do_am = document.querySelector("#do_am");
const gio = document.querySelector("#gio");
const ten = document.querySelector("#ten");

name_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = name_input.value;
    troll.textContent = `Hello, ${name} GAY, TRỌC, BÉO!!!. Hẹ hẹ hẹ. ${name} bị troll chắc cay đỏ dái.`;
    troll.style.display = "block";
    location_form.style.display = "block";
    name_form.style.display = "none";
});

function returnData(url) {
    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then((data) => {
            ten.textContent = data.name;
            nhiet_do.textContent = `Nhiệt độ: ${data.main.temp} °C`;
            chi_tiet.textContent = `Chi tiết: ${data.weather[0].description}`;
            do_am.textContent = `Độ ẩm: ${data.main.humidity} %`;
            gio.textContent = `Tốc độ gió: ${data.wind.speed} m/s`;
            weather_info.style.display = "block";
        }).catch((error) => {
            alert("Viết đúng tên thành phố đi đm hoặc kiểm tra lại kết nối mạng");
        });
}

location_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = location_input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=vi`;
    returnData(url);
});