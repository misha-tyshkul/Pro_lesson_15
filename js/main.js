const order = [];

//Show laptop menu
const menuLaptop = document.getElementById("menu-laptop");
const laptopList = document.getElementsByClassName("laptop-list")[0];
menuLaptop.addEventListener("click", function (event) {
  laptopList.classList.toggle("show");
});
//Laptop 1
const laptop1 = document.querySelector("#laptop-1 > h3");
const laptop1Info = document.querySelector("#laptop-1 > .laptop-description");
laptop1.addEventListener("click", function (event) {
  laptop1Info.classList.toggle("show");
});
//Laptop2
const laptop2 = document.querySelector("#laptop-2 > h3");
const laptop2Info = document.querySelector("#laptop-2 > .laptop-description");
laptop2.addEventListener("click", function (event) {
  laptop2Info.classList.toggle("show");
});
//Laptop3
const laptop3 = document.querySelector("#laptop-3 > h3");
const laptop3Info = document.querySelector("#laptop-3 > .laptop-description");
laptop3.addEventListener("click", function (event) {
  laptop3Info.classList.toggle("show");
});
//Laptop button
var col1 = document.querySelector("tbody > tr > td:first-child");
const laptop1Title = document.querySelector("#laptop1");
const laptop1Btn = document.querySelector("#laptop-1 > .laptop-description > .info-btn");
const laptop1Data = document.querySelector("#laptop-1 > .laptop-description > .info");
laptop1Btn.addEventListener("click", function (event) {
  alert("Куплено");
  laptop1Info.classList.toggle("show");
  laptopList.classList.toggle("show");
  addForme();
  order.push({ description: laptop1Data });
  const sessionStoragelaptop = laptop1Title.innerText;
  sessionStorage.setItem("product", sessionStoragelaptop);

  col1.innerText = sessionStoragelaptop;
});
const laptop2Title = document.querySelector("#laptop2");
const laptop2Btn = document.querySelector("#laptop-2 > .laptop-description >  .info-btn");
const laptop2Data = document.querySelector("#laptop-2 > .laptop-description > .info");
laptop2Btn.addEventListener("click", function (event) {
  alert("Куплено");
  laptop2Info.classList.toggle("show");
  laptopList.classList.toggle("show");
  addForme();
  order.push({ description: laptop2Data });

  const sessionStoragelaptop = laptop2Title.innerText;
  sessionStorage.setItem("product", sessionStoragelaptop);

  col1.innerText = sessionStoragelaptop;
});
const laptop3Title = document.querySelector("#laptop3");
const laptop3Btn = document.querySelector("#laptop-3 > .laptop-description >  .info-btn");
const laptop3Data = document.querySelector("#laptop-3 > .laptop-description > .info");
laptop3Btn.addEventListener("click", function (event) {
  alert("Куплено");
  laptop3Info.classList.toggle("show");
  laptopList.classList.toggle("show");
  addForme();
  order.push({ description: laptop3Data });

  const sessionStoragelaptop = laptop3Title.innerText;
  sessionStorage.setItem("product", sessionStoragelaptop);

  col1.innerText = sessionStoragelaptop;
});

//Show smartphone menu
const menuSmartphone = document.getElementById("menu-smartphone");
const smartphoneList = document.getElementsByClassName("smartphone-list")[0];
menuSmartphone.addEventListener("click", function (event) {
  smartphoneList.classList.toggle("show");
});
//Smartphone1
const smartphone1 = document.querySelector("#smartphone-1 > h3");
const smartphone1Info = document.querySelector("#smartphone-1 > .smartphone-description");
smartphone1.addEventListener("click", function (event) {
  smartphone1Info.classList.toggle("show");
});
//Smartphone2
const smartphone2 = document.querySelector("#smartphone-2 > h3");
const smartphone2Info = document.querySelector("#smartphone-2 > .smartphone-description");
smartphone2.addEventListener("click", function (event) {
  smartphone2Info.classList.toggle("show");
});
//Smartphone3
const smartphone3 = document.querySelector("#smartphone-3 > h3");
const smartphone3Info = document.querySelector("#smartphone-3 > .smartphone-description");
smartphone3.addEventListener("click", function (event) {
  smartphone3Info.classList.toggle("show");
});
//Smartphone button
const smartphone1Title = document.querySelector("#smartphone1");
const smartphone1Btn = document.querySelector("#smartphone-1 > .smartphone-description >  .info-btn");
const smartphone1Data = document.querySelector("#smartphone-1 > .smartphone-description > .info");
smartphone1Btn.addEventListener("click", function (event) {
  alert("Куплено");
  smartphone1Info.classList.toggle("show");
  smartphoneList.classList.toggle("show");
  addForme();
  order.push({ description: smartphone1Data });

  const sessionStoragelaptop = smartphone1Title.innerText;
  sessionStorage.setItem("product", sessionStoragelaptop);

  col1.innerText = sessionStoragelaptop;
});
const smartphone2Title = document.querySelector("#smartphone2");
const smartphone2Btn = document.querySelector("#smartphone-2 > .smartphone-description >  .info-btn");
const smartphone2Data = document.querySelector("#smartphone-2 > .smartphone-description > .info");
smartphone2Btn.addEventListener("click", function (event) {
  alert("Куплено");
  smartphone2Info.classList.toggle("show");
  smartphoneList.classList.toggle("show");
  addForme();
  order.push({ description: smartphone2Data });

  const sessionStoragelaptop = smartphone2Title.innerText;
  sessionStorage.setItem("product", sessionStoragelaptop);

  col1.innerText = sessionStoragelaptop;
});
const smartphone3Title = document.querySelector("#smartphone3");
const smartphone3Btn = document.querySelector("#smartphone-3 > .smartphone-description >  .info-btn");
const smartphone3Data = document.querySelector("#smartphone-3 > .smartphone-description > .info");
smartphone3Btn.addEventListener("click", function (event) {
  alert("Куплено");
  smartphone3Info.classList.toggle("show");
  smartphoneList.classList.toggle("show");
  addForme();
  order.push({ description: smartphone3Data });

  const sessionStoragelaptop = smartphone3Title.innerText;
  sessionStorage.setItem("product", sessionStoragelaptop);

  col1.innerText = sessionStoragelaptop;
});

//Show tv menu
const menuTv = document.getElementById("menu-tv");
const tvList = document.getElementsByClassName("tv-list")[0];
menuTv.addEventListener("click", function (event) {
  tvList.classList.toggle("show");
});
//TV1
const tv1 = document.querySelector("#tv-1 > h3");
const tv1Info = document.querySelector("#tv-1 > .tv-description");
tv1.addEventListener("click", function (event) {
  tv1Info.classList.toggle("show");
});
//TV2
const tv2 = document.querySelector("#tv-2 > h3");
const tv2Info = document.querySelector("#tv-2 > .tv-description");
tv2.addEventListener("click", function (event) {
  tv2Info.classList.toggle("show");
});
//TV3
const tv3 = document.querySelector("#tv-3 > h3");
const tv3Info = document.querySelector("#tv-3 > .tv-description");
tv3.addEventListener("click", function (event) {
  tv3Info.classList.toggle("show");
});
//TV button
const tv1Title = document.querySelector("#tv1");
const tv1Btn = document.querySelector("#tv-1 > .tv-description >  .info-btn");
const tv1Data = document.querySelector("#tv-1 > .tv-description > .info");
tv1Btn.addEventListener("click", function (event) {
  alert("Куплено");
  tv1Info.classList.toggle("show");
  tvList.classList.toggle("show");
  addForme();
  order.push({ description: tv1Data });
  const sessionStoragelaptop = tv1Title.innerText;
  sessionStorage.setItem("product", sessionStoragelaptop);

  col1.innerText = sessionStoragelaptop;
});
const tv2Title = document.querySelector("#tv2");
const tv2Btn = document.querySelector("#tv-2 > .tv-description >  .info-btn");
const tv2Data = document.querySelector("#tv-2 > .tv-description > .info");
tv2Btn.addEventListener("click", function (event) {
  alert("Куплено");
  tv2Info.classList.toggle("show");
  tvList.classList.toggle("show");
  addForme();
  order.push({ description: tv2Data });

  const sessionStoragelaptop = tv2Title.innerText;
  sessionStorage.setItem("product", sessionStoragelaptop);

  col1.innerText = sessionStoragelaptop;
});
const tv3Title = document.querySelector("#tv3");
const tv3Btn = document.querySelector("#tv-3 > .tv-description >  .info-btn");
const tv3Data = document.querySelector("#tv-3 > .tv-description > .info");
tv3Btn.addEventListener("click", function (event) {
  alert("Куплено");
  tv3Info.classList.toggle("show");
  tvList.classList.toggle("show");
  addForme();
  order.push({ description: tv3Data });

  const sessionStoragelaptop = tv3Title.innerText;
  sessionStorage.setItem("product", sessionStoragelaptop);

  col1.innerText = sessionStoragelaptop;
});

//Lesson-15
const containerForm = document.querySelector(".container-form");
function addForme() {
  containerForm.classList.toggle("show");
}
// Validation
const myForm = document.querySelector(".form");
const formBtn = myForm.querySelector(".form-btn");
const nameForm = myForm.querySelector(".name");
const middleNameForm = myForm.querySelector(".middle-name");
const surnameForm = myForm.querySelector(".surname");
const cityForm = myForm.querySelector(".city");
const numberForm = myForm.querySelector(".number");
const commentForm = myForm.querySelector(".comment");
const fields = myForm.querySelectorAll(".field");

const validation = (form) => {
  let result = true;
  for (let i = 0; i < fields.length; i++) {
    const index = fields[i];
    if (!index.value) {
      index.classList.add("error");
      result = false;
    } else {
      index.classList.remove("error");
    }
  }
  return result;
};

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validation(this) == true) {
    informationAboutDelivery();
  }
});

//Show info delivery
const infoDiv = document.querySelector(".order-information");
function informationAboutDelivery() {
  infoDiv.classList.add("show");
  const infoCity = document.createElement("p");
  infoCity.innerText = cityForm.value;
  infoDiv.append(infoCity);
  infoDiv.append(order[0].description);
}

//Session Storage
const formFields = myForm.elements;

function saveData() {
  for (let i = 0; i < formFields.length; i++) {
    const item = formFields[i];
    item.addEventListener("change", function () {
      if (item.name) {
        sessionStorage.setItem(item.name, item.value);
      }
    });
  }
}
saveData();

//Order information
const orders = document.querySelector(".orders");
const orderBtn = document.querySelector(".order-btn");

const table = document.getElementsByTagName("table")[0];
orderBtn.addEventListener("click", function () {
  table.classList.toggle("block");
  const sessionStorageName = sessionStorage.getItem("name");
  const sessionStorageMiddleName = sessionStorage.getItem("middle-name");
  const sessionStorageSurname = sessionStorage.getItem("surname");

  // var col1 = document.querySelector("tbody > tr > td:first-child");

  const col2 = document.querySelector("tbody > tr > td:last-child");
  if (sessionStorageName == null) {
    return "";
  }
  if (sessionStorageMiddleName == null) {
    return "";
  }
  if (sessionStorageSurname == null) {
    return "";
  }
  const userCell = `${sessionStorageSurname} ${sessionStorageName} ${sessionStorageMiddleName}`;
  col2.innerText = userCell;
});
