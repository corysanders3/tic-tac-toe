# Tic-Tac-Toe

For this project, I built a fully functioning tic tac toe game. It will detect a winner, or a draw if the game ends without a winner. The game will automatically restart after 3.5 seconds, so you can play another game. The app solves the problem of who is the master tic tac toe player, you or your adversaries. Play using the same computer and mouse and take turns selecting your position to prove who is the better player.

## Installation Instructions

Here are the steps to clone the game and play on your own computer:
1. Go to this link [Tic Tac Toe Game](https://github.com/corysanders3/tic-tac-toe).
2. Click the 'Code' dropdown and click 'Copy URL to clipboard'.
3. Within your terminal, run 'git clone' and paste what you have copied.
4. cd into the tic tac toe directory.
5. Open it within your code editor.
6. Run open index.html.
7. Enjoy the game.

## Primary Technologies Used

<div align="center">
    <img src="https://img.shields.io/badge/JavaScript-E8D44D?style=for-the-badge&logo=javascript&logoColor=fff" alt="javascript badge">
    <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge" alt="html badge">
    <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=for-the-badge" alt="css badge">
</div>

## Preview of App

![GIF of Game](https://github.com/corysanders3/tic-tac-toe/assets/41808895/f6c04ebe-47b8-41bd-a234-6fe9e0def0ed)

## Context

This was a solo project and was actually very enjoyable. I spent around 20 hours total on it, and I am 6 weeks into the Turing School of Software & Design. 

## Contributors

I worked on this project alone, as it was a solo project. [Here is a link to my GitHub page](https://github.com/corysanders3).

## Learning Goals

The Learning Goals for this project were the following:
1. Solidify and demonstrate your understanding of:
    -DRY JavaScript
    -event delegation to handle similar event listeners
2. Understand the difference between the data model and how the data is displayed on the DOM
3. Iterate through/filter DOM elements using for loops
4. Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

I worked with html, css, and javascript.

## Wins + Challenges

Wins:
1. Being able to figure out the logic to have the game see if there was a winning condition. This was the toughest part, and took me about a half day to fully figure out a solution.
2. When I saw bugs, I was able to rectify the issues fairly quickly ex: disabling clicks when there was a winner (during that 3.5 second timeout).
3. I like the way the project ended up looking. I feel like I matched the comp pretty close.

Challenges:
1. Again, the logic to find a winner was tough. I really only thought of using index positions of winning conditions and comparing that with where each player had played on the board. The idea was quick to come to, but the comparison took me some time to figure out.
2. Switching player after each turn was easy at first, until I realized the switch would happen if I clicked on a poisiton already played, or on the border of the board. That took me some time to correct, but I ended up with a solution I was happy with.

### Deployed Page

[Tic-Tac-Toe](https://tic-tac-toe-tau-brown.vercel.app/)
