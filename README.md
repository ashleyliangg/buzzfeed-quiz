# What Dartmouth Study Spot Are You?

This page resembles a Buzzfeed quiz that tells you what common Dartmouth study spot you are based on your answer choices. It has a mostly bare HTML file that only contains a few divs and the submission button. *Main.js* reads in the data from *data.json* and fills in the rest of the code. The outcome of the quiz is calculated based on how many times the user chooses an option with that outcome associated with it.

[https://study-spot-quiz.onrender.com/](https://study-spot-quiz.onrender.com/)

## What Worked Well
It was nice that I was able to read in the json file and fill in the HTML even when each question had different components (some didn't have text, some didn't have an image, some had both). I also was happy that I was able to get the page to automatically scroll to the bottom when the user didn't answer all the questions so that the user didn't have to scroll themselves to see the error message. I was also pretty happy with the animations. It was a little tricky getting the hover animation to stop when the user clicked on the answer choice. It was also a little tricky getting the answer modal to bounce into the screen in the way I wanted it to, but I was happy with how it turned out.

## What Didn't
A small issue with the animation pops up occasionally with random answer choice labels. When a user clicks on the label, it should stop pulsing and rotate. However, sometimes the user has to either double click the mouse or slightly move the mouse for the pulsing to stop/rotation to begin. It only happens some of the time and appears on random labels, so I (and some TAs) couldn't figure the issue out.

## Extra Credit
Submission comment: I intitally thought it would have something to do about wanting the HTML/CSS displayed before the JavaScript. I googled it and it was pretty close to what I thought it was. The browser executes any JavaScript it encounters on the spot, so to make a site seem like it has a better runtime, you should put the HTML/CSS before the JavaScript so that there stuff on the page before it actually completely works.

I did both options (the JSON file reading and styling focus requirements). I had animations for hovering over the answer options (the pulsing and grey shadow), clicking the answer options (rotating the label and green shadow), hovering and clicking the submission button, and the outcome modal appearing. I also made sure the page was mobile friendly and that the error message was clearly shown by having the page automatically scroll to the bottom (slightly animated) to show the error message at the bottom.

## Screenshots
This is what the screen looks like after the rotation animation when clicking on an answer:

<img width="888" alt="Screen Shot 2023-04-10 at 11 32 59 PM" src="https://user-images.githubusercontent.com/102703391/231049317-46f43a76-e56d-4ff4-b41d-885ce371c58c.png">

The answer modal:

<img width="866" alt="Screen Shot 2023-04-10 at 11 33 28 PM" src="https://user-images.githubusercontent.com/102703391/231049367-540cd864-573e-4a07-aa5a-bc4ee0f475d1.png">


