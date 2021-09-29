# experiments-4-projects
Start for project 2 

## Idea for project

A javascript game where the user can walk around and interact with the environment (Think pokemon or legend of zelda). Obstacles in the game will be overcome by completing activities relating to web development knowledge. User will be able to create a profile to save their progress and have the ability to come back and play at any time. We would like to implement an item inventory system if possible. To start we would like to create 5 different levels and have NPCs to interact with for activities as well as in game events.

## Theme of the game

A group of ancient code hunters stumbled upon a mysterious source of code coming from a cave deep in the jungle. When the team got close to the code it corrupted a couple of their team mates causing them to betray their friends and leave them stranded in the cave. Your goal is to make it out of the cave by completing simple tasks related to web development. After the cave level you would proceed to a jungle themed level, a town themed level, a moutain themed level, and finally a temple themed level where a boss battle/activity will ensue. 

## Team Roles

* Tifanny: HTML, CSS skeletons
* Nate: Working on Tiled maps
* Devin: Setting up file structure, psuedo coding JS

## What we need to incorporate into the project 

- Use Node.js and Express.js to create a RESTful API
- Use Handlebars.js as the template engine.
- Use MySQL and the Sequel ORM for the database
- Have both GET and POST route for retrieving and adding new data
- Use at least one new library, package, or technology that we haven't discussed
- Have a folder structure that meets the MVC paradigm
- Include authentication (express-session and cookies)
- Protect API keys and sensitive information with environment variables. 
- Be deployed using Heroku (with data)
- Have a polished UI
- Be responsive
- Be interactive (i.e., accept and respond to user input.)
- Meet good-quality coding standards (file structure, naming conventions, fellows best practives for class/id naming conventions, indentation, quality comments, etc.)

## Things we need to do

- Decide on team roles
- Figure out how to incorporate the requirements into our project
- Research and learn how to use tiled, canvas, other possible tools for creating the game
    - Come up with the final plan for what tools we are going to use.
- Create a home page with a nav bar, links to: (separate html pages)
    - Create profile: To save user data to their profile for future playing
    - About us: Brief description and contact info for each developer (maybe get fancy and include pics)
    - How to play: Description on controls/how to play the game.
    - Feedback: Sent to an email for the project specifically or routed to all of our emails for game improvements.
- Home page will have a breif description of the game(backstory) then a button to play game
    - Play game button will bring you to a page to either create an account or log in before playing the game to either retrieve previously stored data or to create a new user to store game data to. 
    - Create a wireframe of the user interface around the game display with game information.

## Resources found during research

These are some resources found during research, we do not NEED to use these. Ideas for brainstorming

RPG framework found on github:

- [RPG framework](https://github.com/RSamaium/RPG-JS)

Info on server for game:

- [http-server](https://github.com/http-party/http-server)
- [more http-server](https://www.npmjs.com/package/http-server)
* http-server is a simple, zero-configuration command-line http server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.

Phaser and Tiled info:

- [Phaser docs on getting started](http://phaser.io/tutorials/getting-started-phaser3)
* In this tutorial we're going to cover setting-up a development environment with which you can build your Phaser games.
- [Tiled docs](https://doc.mapeditor.org/en/stable/manual/introduction/#about-tiled)
- [Modular game worlds with phaser and tiled](https://medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6)
* In this tutorial we're going to cover setting-up a development environment with which you can build your Phaser games.

Info for authentication:

- [Passport docs for authentication](http://www.passportjs.org/)

General info on game development using HTML, CSS, JavaScript:

- [MDN docs on game development](https://developer.mozilla.org/en-US/docs/Games)
- [MDN docs on 2D and 3D graphics](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
- [W3 Schools on HTML canvas](https://www.w3schools.com/html/html5_canvas.asp)
* An HTML element used as a "container" for JavaScript to manipulate. For example this is where the game would be displayed so the script file can generate all of the graphics and logic.
- [Example of a game being created with canvas](https://www.youtube.com/watch?v=vcW6wg15GMY)

Opensource sprites(graphics/images) for game development:

- [Opensource sprites](https://opengameart.org/)
- [Tile set we chose to use](https://pipoya.itch.io/pipoya-rpg-tileset-32x32)
- [Scaling sprite images](https://phasergames.com/scaling-in-phaser-3/)

Running phaser on express server:

- [Webpack Docs](https://webpack.js.org/concepts/)
- [Deploying to Heroku with Phaser and Express](https://medium.com/@diegoreyes1212/how-to-deploy-phaser-3-node-js-express-webpack-game-to-heroku-tutorial-8a813f31502c)

## Deliverables for Day1 of Project 2 - 9/28/21

Deliverable for today

- [x] Working (prove it!) GitHub setup and collaboration process (Repo and Project!)
- [x] Branching, Issues, Pull Requests, Communication!
- [x] “In writing”: Can be word, pdf, notes, vs markdown, post, snippet, whatever... should have a team message thread or channel (recommended) in Slack. Invite your assigned TA and your instructor to that communication method.
- [ ] Team Name (optional)
- [x] Title
- [x] Description - details please
- [x] User Stories (at least one)
- [x] Roles, Wireframe, ‘Authenticated only’ areas of the application identified
- [ ] External API List with functional GET (Postman or Insomnia)
- [ ] Internal API ‘High level” structure - Google sheet with Method/Path and related CRUD operation
- [ ] Timeline (So important!)
- [ ] Deploy the skeleton
- [ ] Bonus (recommended): Skeleton deployed to Heroku with database connection (JAWS_DB)

Roles

Project Manager
GitHub Guru
Data Flow Doctor (Optional)
API Researcher (Can be combined with Data Flow)
Includes your own (app) api
Node/Express Master
Presentation Purveyor
Database Doctor
HTML/View Expert