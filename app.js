const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const md5 = require("md5");

const connection = require('./config');
const passport = require("passport");

var usernum1 = 1;
var usernum = 0;
var username = "0";
var usernmae1 = "1";
var tablename;
var tablename1;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

app.get("/", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/index.html");
    else {
        res.render("index", { username1: username });
    }
});

app.get("/men", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/men.html");
    else {
        res.render("men", { username1: username });
    }
});

app.get("/menin", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/menin.html");
    else {
        res.render("menin", { username1: username });
    }
});

app.get("/home", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/home.html");
    else {
        res.render("home", { username1: username });
    }
});

app.get("/homein", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/homein.html");
    else {
        res.render("homein", { username1: username });
    }
});

app.get("/women", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/women.html");
    else {
        res.render("women", { username1: username });
    }
});

app.get("/womenin", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/womenin.html");
    else {
        res.render("womenin", { username1: username });
    }
});

app.get("/null", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/null.html");
    else {
        res.render("null", { username1: username });
    }
});

app.get("/bag", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/login1.html");
    else {
        res.render("bag", { username1: username });
    }
});

app.get("/wish", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/login1.html");
    else {
        res.render("wish", { username1: username });
    }
});

app.get("/about", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/about.html");
    else {
        res.render("about", { username1: username });
    }
});

app.get("/faq", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/faq.html");
    else {
        res.render("faq", { username1: username });
    }
});

app.get("/contact", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/contact.html");
    else {
        res.render("contact", { username1: username });
    }
});

app.get('/bagin', (req, res) => {
    let table = "a" + usernum;
    connection.query(`SELECT * FROM ${table}`, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(JSON.stringify(results));
        }
    });
});

app.get('/total', (req, res) => {
    let table = "a" + usernum;
    connection.query(`SELECT SUM(rs) FROM ${table}`, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log(JSON.stringify(results));
            res.send(JSON.stringify(results));
        }
    });
});

app.get('/order', (req, res) => {
    let table = "a" + usernum;
    console.log("yoyo");
    connection.query(`DELETE FROM ${table}`, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.render("checkout", { username1: username });
            console.log("yo");
        }
    });
});

app.get("/checkout", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/login1.html");
    else {
        res.render("checkout", { username1: username });
    }
});

app.get('/wishin', (req, res) => {
    let table = "w" + usernum;
    connection.query(`SELECT * FROM ${table}`, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log(JSON.stringify(results));
            res.send(JSON.stringify(results));
        }
    });
});

app.post("/addToBag", function (req, res) {
    let img = req.body.img;
    let brand = req.body.brand.replace(/'/g, "''");
    let para = req.body.para.replace(/'/g, "''");
    let price = req.body.price;
    let rs = req.body.rs;
    let strikedoffprice = req.body.strikedoffprice;
    let offer = req.body.offer;
    let atc = req.body.atc;
    let atw = req.body.atw;
    let category = req.body.category;
    let table = "a" + usernum;
    const query = `INSERT INTO ${table} VALUES ('${img}','${brand}','${para}','${price}','${rs}','${strikedoffprice}','${offer}','${atc}','${atw}','${category}')`;
    connection.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.sendFile(__dirname + "/html/signup.html");
        } else {

        }
    });
});

app.post("/addToWishlist", function (req, res) {
    let img = req.body.img;
    let brand = req.body.brand.replace(/'/g, "''");
    let para = req.body.para.replace(/'/g, "''");
    let price = req.body.price;
    let rs = req.body.rs;
    let strikedoffprice = req.body.strikedoffprice;
    let offer = req.body.offer;
    let atc = req.body.atc;
    let atw = req.body.atw;
    let category = req.body.category;
    let table = "w" + usernum;
    const query = `INSERT INTO ${table} VALUES ('${img}','${brand}','${para}','${price}','${rs}','${strikedoffprice}','${offer}','${atc}','${atw}','${category}')`;
    connection.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.sendFile(__dirname + "/html/signup.html");
        } else {
            console.log("yo");
        }
    });
});

app.post("/removefrombag", function (req, res) {
    let img = req.body.img;
    let brand = req.body.brand.replace(/'/g, "''");
    let para = req.body.para.replace(/'/g, "''");
    let price = req.body.price;
    let rs = req.body.rs;
    let strikedoffprice = req.body.strikedoffprice;
    let offer = req.body.offer;
    let atc = req.body.atc;
    let atw = req.body.atw;
    let category = req.body.category;
    let table = "a" + usernum;
    console.log(usernum);
    const query = `DELETE FROM ${table} WHERE img='${img}' LIMIT 1`;
    connection.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.sendFile(__dirname + "/html/signup.html");
        } else {

        }
    });
});

app.post("/removefromwishlist", function (req, res) {
    let img = req.body.img;
    let brand = req.body.brand.replace(/'/g, "''");
    let para = req.body.para.replace(/'/g, "''");
    let price = req.body.price;
    let rs = req.body.rs;
    let strikedoffprice = req.body.strikedoffprice;
    let offer = req.body.offer;
    let atc = req.body.atc;
    let atw = req.body.atw;
    let category = req.body.category;
    let table = "w" + usernum;
    console.log(usernum);
    const query = `DELETE FROM ${table} WHERE img='${img}' LIMIT 1`;
    connection.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.sendFile(__dirname + "/html/signup.html");
        } else {

        }
    });
});

app.get("/signup", function (req, res) {
    res.sendFile(__dirname + "/html/signup.html");
});

app.get("/login1", function (req, res) {
    res.sendFile(__dirname + "/html/login1.html");
});

app.get("/auth", function (req, res) {
    if (usernum1 === 1)
        res.sendFile(__dirname + "/html/login1.html");
    else {
        var data = "1";
        res.send(data);
    }
});

app.post("/login1", function (req, res) {
    username=req.body.name;
    usernum = req.body.num;
    const password = req.body.pwd;
    var pwd = md5(password);

    const query = `SELECT * FROM user WHERE (num='${usernum}' AND pwd='${pwd}') AND name='${username}';`;
    connection.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).sendFile(__dirname + '/html/login1.html');
        } else if (rows.length == 0) {
            res.status(401).sendFile(__dirname + '/html/signup.html');
        } else {
            usernum1 = usernum;
            username1=username;
            res.redirect("/");
        }
    });
})

app.post("/signup", function (req, res) {
    username=req.body.name;
    usernum = req.body.num;
    const password = req.body.pwd;
    var pwd = md5(password);
    tablename = "a" + usernum;
    tablename1 = "w" + usernum;
    const query1 = `INSERT INTO user VALUES ('${username}','${usernum}','${pwd}')`;
    const query2 = `CREATE TABLE ${tablename} (
        img varchar(100),
        brand varchar(100),
        para varchar(100),
        price varchar(100),
        rs int,
        strikedoffprice varchar(100),
        offer varchar(100),
        atc varchar(100),
        atw varchar(100),
        category varchar(100)
    )`;
    const query3 = `CREATE TABLE ${tablename1} (
        img varchar(100),
        brand varchar(100),
        para varchar(100),
        price varchar(100),
        rs int,
        strikedoffprice varchar(100),
        offer varchar(100),
        atc varchar(100),
        atw varchar(100),
        category varchar(100)
    )`;
    connection.query(query1, (err, result) => {
        if (err) {
            console.error(err);
            res.sendFile(__dirname + "/html/signup.html");
        } else {
            connection.query(query2, (err, result) => {
                if (err) {
                    console.error(err);
                    res.sendFile(__dirname + "/html/signup.html");
                } else {
                    usernum1 = usernum;
                    usernmae1=username;
                    connection.query(query3, (err, result) => {
                        if (err) {
                            console.error(err);
                            res.sendFile(__dirname + "/html/signup.html");
                        } else {
                            res.render("index", { username1: username });
                        }
                    });
                }
            });
        }
    });

})

app.post('/updateUsernum1', (req, res) => {
    usernum1 = 1;
    res.send('OK');
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});