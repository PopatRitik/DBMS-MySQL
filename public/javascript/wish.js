var productData = [];
window.addEventListener('load', function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            productData = Array.from(data);
            displayPage(productData);
        }
    };

    xhttp.open("GET", "http://localhost:3000/wishin", true);
    xhttp.send();

});



function displayPage(productData) {

    document.getElementById("container").innerHTML = "";

    productData.map(function (elem) {
        var box = document.createElement("div")
        box.style.cursor = "pointer"

        var img = document.createElement("img")
        img.src = elem.img

        var contentBox = document.createElement('div');
        contentBox.setAttribute('class', 'contentBox')

        var brand = document.createElement("h4")
        brand.textContent = elem.brand

        var productname = document.createElement("p")
        productname.textContent = elem.para


        var mix = document.createElement("div")
        mix.setAttribute("class", "mixbox")


        var price = document.createElement("p")
        price.textContent = elem.price

        var strprice = document.createElement("p")
        strprice.textContent = elem.strikedoffprice
        strprice.setAttribute("class", "strikep")


        var offer = document.createElement("p")
        offer.textContent = elem.offer
        offer.setAttribute("class", "offerp")

        mix.append(price, strprice, offer)



        var atw = document.createElement("p")
        atw.setAttribute("class", "wishListp")
        atw.textContent = "REMOVE FROM WISHLIST"
        atw.style.cursor = "pointer"

        atw.addEventListener("click", function () {
            removefromwishlist(elem)
        })



        var atc = document.createElement("p")
        atc.setAttribute("class", "addToBagp")
        atc.textContent = elem.atc;
        atc.style.cursor = "pointer"


        atc.addEventListener("click", function () {
            addToBag(elem)
        })

        contentBox.append(brand, productname, mix, atw, atc)

        box.append(img, contentBox)

        document.querySelector("#container").append(box);



    });

}

function removefromwishlist(element) {
    // var f;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = (this.responseText);
            // f = data
            if (data == "1") {

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "/removefromwishlist");
                xhr.setRequestHeader("Content-type", "application/json");
                xhr.onload = function () {
                    // do something to response
                    console.log(element);
                };
                xhr.send(JSON.stringify(element));
                window.location.href = "wish"
            }
            else {
                window.location.href = "login1"
            }
        }
    };

    xhttp.open("GET", "http://localhost:3000/auth", true);
    xhttp.send();


    // console.log(f);
}

function addToBag(element) {
    // var f;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = (this.responseText);
            // f = data
            if (data == "1") {

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "/addToBag");
                xhr.setRequestHeader("Content-type", "application/json");
                xhr.onload = function () {
                    // do something to response
                    console.log(element);
                };
                var x = document.getElementById("snackbar1");
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                xhr.send(JSON.stringify(element));
            }
            else {
                window.location.href = "login1"
            }
        }
    };

    xhttp.open("GET", "http://localhost:3000/auth", true);
    xhttp.send();


    // console.log(f);
}