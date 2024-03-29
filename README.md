# sombor shuffle
## Overview

Sombor shuffle is an app for fans of 2x NBA MVP Nikola Jokic, built in 5 days. Over the last two years, fans of the NBA have become accustomed to incredible performances from the star, and this app gives fans a way to remember some unique statlines from the prime of a future hall of famer. The app provides graphs and a random statline functionality (points, rebounds, assists) from one of his MVP seasons. 

### How to access the application:
#### Go to this [link](https://sombor-shuffle.vercel.app/) where the application is deployed on Vercel

#### Or if you prefer to access the code as well as the application follow these *installation instructions*

- Clone down this repository into your local machine
- `cd` into the root directory of the repo
- Run `npm i` in your console to install the dependencies
- Run `npm start` in the console to start the sever and access the application from your browser

#### Usage 

Visit the app from desktop or mobile! Click "get new random statline" to get a random statline. Stats will be blue if they are double digits, to easily show a triple double statline when they occured. Stats can be saved, and once saved a button will appear to see saved stats. Click on saved stats to go to a new url to see all statlines that you have saved, with ability to add and edit a game note. These stats and gamenotes will persist on reloading.

#### Testing Instructions
In your terminal, run `npx cypress open` to see that all user flows have been tested and the app is passing all tests!

#### See it in action 
https://user-images.githubusercontent.com/97985027/218909423-7ae56ab2-35d5-4d61-97de-94c66fb111b8.mp4


 
![Save random boosters!](/src/assets/smallTalk2.gif "save boosters")

#### Technologies used:
- React
- HTML5 
- CSS3
- React Router v5
- Local Storage
- Fetch API
- Cypress E2E testing
- Figma
- Vercel deployment

#### Goals:
- Build an app using React Hooks.
- Implement React Router to create a multi-page application.
- Build responsive design for use on different screen sizes.
- Utilize local storage so that saved statlines persist.
- End-to-end testing using Cypress, testing all user flows.

### Future Iterations:
- Add final score.
- When random stat is clicked on, it shows new random stat.
- When title is clicked it goes to home page from saved page. 

