const express = require('express');
const handlebars = require('express-handlebars');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = process.env.port || 4000

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', handlebars({
    extname: 'handlebars',
    defaultView: 'default',
    // layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));


app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.get('/apply', (req,res)=> {
    res.render('newform')
});

const ApplicantController = require('./controller/applicantController');
const applicantController = new ApplicantController;
app.get('/apply', applicantController.getApplicationForm);
app.post('/apply', applicantController.postNewApplicant);
app.get('/applicants', applicantController.listApplicants);
app.post('/manage/:id', applicantController.updateApplicant);

app.listen(port, console.log(`App is listening on port ${port}`))