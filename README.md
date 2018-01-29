# HeadCount 2.0

HeadCount 2.0 is a project based around manipulating data and creating small, reusable React components. It displays statistics about kindergarten attendence in Colorado public schools. Each school has attendance data by year, formatted to be red or blue depending on whether attendance is above or below 50%. When a district is clicked it moves to the top of the page and average attendance is displayed on the center card. When a second card is clicked it is also displayed on the center card and the ratio of their averages is also displayed.
Districts can be searched by name.

This application was built using the `create-react-app` [boilerplate](https://github.com/facebookincubator/create-react-app).

A thorough test suite is written in Jest and Enzyme.

## Contributors
[Melena Suliteanu](https://github.com/farmermel) and [Matt Renn](https://github.com/rennmatthewp)

## Our Layout

![Our Layout](https://i.imgur.com/NzVW5UG.png)

## Set Up

Fork this project

Run `npm install` from the root directory

Run `npm start` and visit localhost:3000 in your browser

## Project Goals

* Separate application logic into small, testable functions.
* Create modular, reusable React components.
* Use propTypes to validate props passed to each component.
* Write meaningful, comprehensive unit and integration tests.
