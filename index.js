const express = require("express");
const app = express();
app.set("view engine", "ejs");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("main");
});
var abname = "";
app.post("/about",(req,res)=>{
    abname=req.body.aboutname;
    res.redirect("/about")
  });
app.get("/about", (req, res) => {
    res.render("about",{abname:abname});
});

app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.post("/contact", (req, res) => {
    const e = req.body.email;
    const n = req.body.name;
    const q =req.body.query;
    var bodyl = "Dear "+n+",\n Thank you for reaching out and expressing your interest in my portfolio. I appreciate the opportunity to connect with you.\n I have received your inquiry and will review the details you provided. I will get back to you as soon as possible with the information or response you requested.\n If you have any additional questions or if there's anything specific you would like to discuss, please feel free to let me know.\n Thank you once again for considering my portfolio.\n I look forward to the possibility of working together.\n\n\n Best regards,\nAwari Shashi Preetham\nshashiawaripreetham@gmail.com"

   
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "shashiawaripreetham@gmail.com",
            pass: "hxnpjunhajnyledi",
        },
    });

    var mailOptions = {
        from: 'shashiawaripreetham@gmail.com',
        to: req.body.email,
        subject: "Thank You for Your Inquiry - Shashi Awari",
        text: bodyl,
    }
    var mailOptions2 = {
        from: 'shashiawaripreetham@gmail.com',
        to: 'shashiawaripreetham@gmail.com',
        subject: n,
        text: q,
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/");
            console.log("sent");
        }
    })

    transporter.sendMail(mailOptions2, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/");
            console.log("sent");
        }
    })

});

app.post("/", (req, res) => {
    const e = req.body.email;
    const n = req.body.name;
    const q =req.body.query;
    var bodyl = "Dear "+n+",\n Thank you for reaching out and expressing your interest in my portfolio. I appreciate the opportunity to connect with you.\n I have received your inquiry and will review the details you provided. I will get back to you as soon as possible with the information or response you requested.\n If you have any additional questions or if there's anything specific you would like to discuss, please feel free to let me know.\n Thank you once again for considering my portfolio.\n I look forward to the possibility of working together.\n\n\n Best regards,\nAwari Shashi Preetham\nshashiawaripreetham@gmail.com"

   
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "shashiawaripreetham@gmail.com",
            pass: "hxnpjunhajnyledi",
        },
    });

    var mailOptions = {
        from: 'shashiawaripreetham@gmail.com',
        to: req.body.email,
        subject: "Thank You for Your Inquiry - Shashi Awari",
        text: bodyl,
    }
    var mailOptions2 = {
        from: 'shashiawaripreetham@gmail.com',
        to: 'shashiawaripreetham@gmail.com',
        subject: n,
        text: q,
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/");
            console.log("sent");
        }
    })

    transporter.sendMail(mailOptions2, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/");
            console.log("sent");
        }
    })

});




app.listen(3000, () => {
    console.log("started at 3000");
});