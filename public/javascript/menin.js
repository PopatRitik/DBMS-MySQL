var productData = [{
    img: "images/t1.webp",
    brand: "U.S. Polo Assn.",
    para: "Printed Polo Collar Pure Cotton T-Shirt",
    price: "Rs. 1259",
    rs: 1259,
    strikedoffprice: "Rs 2099",
    offer: "(40% OFF)",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Tshirts",
}, {
    img: "images/t2.webp",
    brand: "PUMA",
    para: "Colourblocked Polo Collar Pure Cotton ",
    price: "Rs. 1139 ",
    rs: 1139,
    strikedoffprice: "Rs 1899 ",
    offer: "(40% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Tshirts",
}, {
    img: "images/t3.webp",
    brand: "HRX by Hrithik Roshan",
    para: "Stiped Polo Collar Pur Cotton T-Shirt ",
    price: "Rs. 949 ",
    rs: 949,
    strikedoffprice: "Rs 1899 ",
    offer: "(50% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Tshirts",
}, {
    img: "images/t4.webp",
    brand: "Flying Machine",
    para: "Printed Polo Collar Pure Cotton T-Shirt ",
    price: "Rs. 1259 ",
    rs: 1259,
    strikedoffprice: "Rs 2099 ",
    offer: "(40% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Tshirts",
}, {
    img: "images/j1.webp",
    brand: "WROGN",
    para: "Men Slim Fit Chinos ",
    price: "Rs. 1049 ",
    rs: 1049,
    strikedoffprice: "Rs 2099 ",
    offer: "(50% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Trousers"
}, {
    img: "images/j2.webp",
    brand: "WRANGLER",
    para: "Men Slim Fit Jeans ",
    price: "Rs. 899 ",
    rs: 899,
    strikedoffprice: "Rs 1999 ",
    offer: "(55% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Trousers"
}, {
    img: "images/j3.webp",
    brand: "LEVI'S",
    para: "Men Slim Fit Jeans ",
    price: "Rs. 1449 ",
    rs: 1499,
    strikedoffprice: "Rs 2899 ",
    offer: "(50% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Trousers"
}, {
    img: "images/j4.webp",
    brand: "LEE",
    para: "Men's Slim Fit Jeans ",
    price: "Rs. 1398 ",
    rs: 1398,
    strikedoffprice: "Rs 2799 ",
    offer: "(50% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Trousers"
}, {
    img: "images/s1 (2).webp",
    brand: "PEPPYZONE",
    para: "Men's Regular Fit Checked Casual Shirt ",
    price: "Rs. 689 ",
    rs: 689,
    strikedoffprice: "Rs 999 ",
    offer: "(31% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Shirt"
}, {
    img: "images/s2 (1).webp",
    brand: "VAN HEUSEN SPORT",
    para: "Men's Shirt ",
    price: "Rs. 999 ",
    rs: 999,
    strikedoffprice: "Rs 1999 ",
    offer: "(50% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Shirt"
}, {
    img: "images/s3 (1).webp",
    brand: "INDOPRIMO",
    para: "Men's Classic Fit Casual Shirt",
    price: "Rs. 599 ",
    rs: 599,
    strikedoffprice: "Rs 1999 ",
    offer: "(70% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Shirt"
}, {
    img: "images/s4 (1).webp",
    brand: "LYMIO",
    para: "Men's Casual Shirt",
    price: "Rs. 498 ",
    rs: 498,
    strikedoffprice: "Rs 4999 ",
    offer: "(90% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Trousers"
}];

window.addEventListener('load', function () {
    displayPage(productData)
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
        atw.textContent = elem.atw;
        atw.style.cursor = "pointer"

        atw.addEventListener("click", function () {
            addToWishlist(elem)
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

function addToWishlist(element) {
    // var f;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = (this.responseText);
            // f = data
            if (data == "1") {
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "/addToWishlist");
                xhr.setRequestHeader("Content-type", "application/json");
                xhr.onload = function () {
                    // do something to response
                    console.log(element);
                };
                var x = document.getElementById("snackbar2");
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