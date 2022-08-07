# small Talk
## Overview

Sombor shuffle is an app for fans of 2x NBA MVP Nikola Jokic, built in 5 days. Over the best two years, fans of the NBA have become accustomed to incredible performances from the star, and this app gives fans a way to remember some unique statlines from the prime of a future hall of famer. The app provides a random statline (points, rebounds, assists) from one of his MVP seasons, with save functionality and ability to add a game note. These saves will persist even on reload. 

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
  
![somborgif1](https://user-images.githubusercontent.com/97985027/183306932-41c33f0a-f0b2-4a2b-a7b1-0f0731a1f652.gif)
![somborgif2](https://user-images.githubusercontent.com/97985027/183306955-b1da648a-3133-4ce6-8480-ec26aebcc272.gif)

 
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

