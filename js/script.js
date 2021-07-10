"use strict";
class locations {
    constructor(place, zipCode, address, image, date) {
        this.place = place;
        this.zipCode = zipCode;
        this.address = address;
        this.image = image;
        this.date = date;
    }
    display() {
        return `
        <div class="card">
        <div class="teaserimage"><img src="${this.image}" alt="${this.place}"></div>
        <div class="description">
            <h3>${this.place}</h3>
            <p>${this.zipCode}</p>
            <p>${this.address}</p>       
        `;
    }
    closingDIV() {
        return ` 
        <p>Created: ${this.date.toLocaleString()}</p>  
        </div>
        </div>`;
    }
}
class restaurants extends locations {
    constructor(place, zipCode, address, image, date, telephone, cuisine, url) {
        super(place, zipCode, address, image, date);
        this.place = place;
        this.zipCode = zipCode;
        this.address = address;
        this.image = image;
        this.date = date;
        this.telephone = telephone;
        this.cuisine = cuisine;
        this.url = url;
        this.cuisine = cuisine;
        this.url = url;
    }
    display() {
        return `
        ${super.display()}
        <p>${this.telephone}</p>
        <p>${this.cuisine}</p>
        <p>${this.url}</p>        
        `;
    }
}
class events extends locations {
    constructor(place, zipCode, address, image, date, eventDate, eventTime, ticketPrice) {
        super(place, zipCode, address, image, date);
        this.place = place;
        this.zipCode = zipCode;
        this.address = address;
        this.image = image;
        this.date = date;
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
    }
    display() {
        return `
        ${super.display()}
        <p>${this.eventDate}</p>
        <p>${this.eventTime}</p>
        <p>${this.ticketPrice}€</p>        
        `;
    }
}
let berlin = new locations("Berlin", 103423, "Warschauerstraße 123", "../img/berlin.jpg", new Date("2021-07-14"));
let dublin = new locations("Dublin", 2574, "Warhammerroad 9", "../img/dublin.jpg", new Date("2021-07-06"));
let moher = new locations("Cliffs of Moher", 342100, "Cliffstreet 1", "../img/moher.jpg", new Date("2021-06-28"));
let costaRica = new locations("Costa Rica", 8009347, "El jungelero de Potata 9", "../img/costarica.jpg", new Date("2021-04-06"));
let restarauntA = new restaurants("Berlin", 103423, "Alexanderplatz 32", "../img/restaurantb.jpg", new Date("2021-06-07"), "+49188320389", "Modern Cuisine", "www.dummy-restaurant.de");
let restaurantB = new restaurants("Little Shire", 1346533, "Trinitystreet 4", "../img/restaurantire.jpg", new Date("2021-04-21"), "+67188465389", "Traditional", "www.dummy-restaurant.ir");
let glastonbury = new events("Glastonbury", 86374, "Hollabyroad 2", "../img/glastonburry.jpg", new Date("2021-07-28"), "28.07.2021", "15:00", 178);
let holiFest = new events("HolyFestival", 100327, "Jadepark", "../img/holy.jpg", new Date("2021-06-06"), "06.06.2021", "11:00", 58);
let arrayAll = [berlin, dublin, moher, costaRica, restarauntA, restaurantB, glastonbury, holiFest];
for (let val of arrayAll) {
    document.getElementById("locations").innerHTML += val.display() + val.closingDIV();
}
function sortASC() {
    arrayAll.sort(function (a, b) {
        if (a.date < b.date) {
            return -1;
        }
        if (a.date > b.date) {
            return 1;
        }
        return 0;
    });
    document.getElementById("locations").innerHTML = "";
    for (let val of arrayAll) {
        document.getElementById("locations").innerHTML += val.display() + val.closingDIV();
    }
}
function sortDES() {
    arrayAll.sort(function (a, b) {
        if (a.date < b.date) {
            return 1;
        }
        if (a.date > b.date) {
            return -1;
        }
        return 0;
    });
    console.log(document.getElementById("locations").innerHTML);
    document.getElementById("locations").innerHTML = "";
    for (let val of arrayAll) {
        document.getElementById("locations").innerHTML += val.display() + val.closingDIV();
    }
}
document.getElementById("asc").addEventListener("click", sortASC);
document.getElementById("des").addEventListener("click", sortDES);
