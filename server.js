const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const { User } = require('./models');
const { CronJob } = require("cron");
const sgMail = require('@sendgrid/mail')

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.get('/', (req, res) => {
  res.render('main');
});


// sendgrid information and functions
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
User.findAll().then((users) => {
  const userData = users.map((user) => user.dataValues.email);
  const msg = {
    to: userData, // Change to your recipient
    from: 'scryptsofbetrayal@gmail.com', // Change to your verified sender
    subject: 'Are you enjoying our game?',
    text: 'Please send us a review,, and feel free to keep playing! We are continually adding functionality! Thanks -Scrypts of Betrayal Dev Team.',
}
onTickHandler = async () => {
  try {
    // Make the api request to sendgrid to send an email.
    await sgMail.send(msg)
    console.log('email sent successfully:', msg)
  } catch (error) {
    console.error(error)

    if (error.response) {
      console.error(error.response.body)
    }
  }
}});

onCompleteHandler = () => {
  console.log('Cron job stopped.');
}
// starting our server, adding the CronJob that will execute the sendgrid email.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, async () => {
    console.log('Now listening')
    new CronJob(
      // cronTime: how often the cron job executes. In this case, it is the 15th hour of every Friday. 
      '0 15 * * FRI',
      // function invoked every "tick" according to cron time above.
      onTickHandler,
      // function invoked when cron is about to stop (e.g. if you exit the process).
      onCompleteHandler,
      // execute immediately when this starts
      true,
      // timezone
      "America/Denver",
      // context
      null,
      // runOnInit
      null
    );
  })
});



