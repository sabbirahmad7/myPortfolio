/* const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Set your desired port number

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve your HTML form file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact_form.html');
});

// Handling form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'Gmail', // Change this to your email service provider
        auth: {
            user: 'your_email@gmail.com', // Your email address
            pass: 'your_password' // Your password
        }
    });

    // Email content
    let mailOptions = {
        from: 'your_email@gmail.com',
        to: 'recipient@example.com', // Recipient's email address
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error: Unable to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});



// Start the server
var express = require('express');
var http = require('http')
var path = require('path');
var nodemailer = require('nodemailer');

var app = express();
var server = http.Server(app)
var port =5500;

app.set("port",port);
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
// 
app.use(express.static(path.join('/css',__dirname,'css')));
app.use(express.static(path.join('/js',__dirname,'js')));
app.use(express.static(path.join('/',__dirname,'html')));

//Rounting
app.get("/",function(req,response){
    response.sendFile('/Users/sabbirahmad/Documents/Responsive-personal-portfolio/index.html');
});

//app.post(/"send_email",function(req,response));

//intialize web Server 
server.listen(port,function() {
    console.log("Starting Server on port:" + port)
})


const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "sabbirahmad49@gmail.com",
    pass: "ulzz eykj gpjp lhez",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);

*/



const express = require('express');
var path = require('path');
const app = express();
const port = 5500; // Or any port you prefer

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join('/css',__dirname,'css')));
app.use(express.static(path.join('/js',__dirname,'js')));
app.use(express.static(path.join('/',__dirname,'html')));

//Rounting
app.get("/",function(req,response){
    response.sendFile('/Users/sabbirahmad/Documents/Responsive-personal-portfolio/index.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const nodemailer = require('nodemailer');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'sabbirahmad49@gmail.com', // Your email
    pass: 'ulzz eykj gpjp lhez', // Your password (consider using environment variables)
  },
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { 'message-name': name, 'message-email': email, 'message-subject': subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'sabbirahmad49@gmail.com', // Receiver's email
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Something went wrong');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

