# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Some notes

Hi!

Firstly, thank you for taking the time to look at my results for this project. Secondly, you can run this application following the above instructions. Also, I love the Princess Diaries and wanted to run a little bit with the Genovia theme... I recognise that I am the _only_ person who thinks I'm funny. But I had fun making this nonetheless :)

I uploaded the work to GitHub so you could how I broke down the task and to easily see the code, I will make the repository private after the follow up meeting.

### Frontend

- I am using React because this is a modern and flexible framework that lets me create and use functional components easily.
- I am using Typescript which will allow me to strictly type my code in order for it to be more robust.
- I am using Tailwind CSS to style the form, and to make the page responsive for devices of various sizes.

### The UI layout

- Consists of the Form, ProgressBar, Header & Footer as separate components.
- Consultation.tsx imports the three main components (while Form imports ProgressBar) in order to keep App.tsx clean. I also envision steps 1, 2, 4 & 5 being created in the same manner, so that the components like Header & Footer can be reused.
- The form automatically submits when all 5 questions have been answered, though the user is able to go back to previous questions to change their answers. On the first question this button is disabled.
- The user is also able to reset the form once they have submitted their answers. In a real-life scenario, I would assume that instead there would be a link to continue to the next step in the process (or a 'Submit' button instead which would navigate on form submission)
- I also chose blue for the 'Yes' button instead of green to be more accessible to colour-blind users.

### Finally

I have included a demo for the page below.
![](https://github.com/MillieClare/heliosx-take-home-test/blob/main/src/assets/heliosX-test.gif)
