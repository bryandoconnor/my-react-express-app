This is a Fullstack application using React and Express and MongoDB. To get started,
first globally install MongoDB locally.
On a Mac use Homebrew for best results (see MongoDB docs for updates).


Download the repo.


Install npm inside main directory (must have node and npm installed previously):
$npm install


To start local development application:
Start up MongoDB via Command Line (this was made with community version 5.0):
$brew services start mongodb-community@5.0


Start dev environment and server:
$npm run start-dev


Application is intended for study purposes only and is based on a tutorial. It is not fully secure.


(To Stop MongoDB):
brew services stop mongodb-community@5.0
