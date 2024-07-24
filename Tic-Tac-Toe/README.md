![image](https://github.com/user-attachments/assets/9a1b3f42-ad8e-4788-876f-30bfa1c3c8e4)# Odin project tic tac toe:

Task: 
1. Set up your project with HTML, CSS and Javascript files and get the Git repo all set up.
You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects, and you’re probably going to want an object to control the flow of the game itself.
2. Your main goal here is to have as little global code as possible. Try tucking as much as you can inside factories. If you only need a single instance of something (e.g. the gameboard, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.
3. In this project, think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects. Take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!

Challenges I am expected to see: 
1. Avoid using global variables and practice applying the principles of OOP

2. Setting up the logic for win conditions and draws for the game

# Final Product:

1. The game starts off with prompting the user to pick who goes first
![image](https://github.com/user-attachments/assets/a4c90feb-496b-4613-9ca7-13a91bff46cb)

2. The current player's turn is clearly shown on the right panel
![image](https://github.com/user-attachments/assets/9723d94c-af78-4c74-9272-5a585862ff4c)

3. O wins the game

![image](https://github.com/user-attachments/assets/ac16cb36-f132-400b-8f34-21930914af5b)

4. The game is a draw!

![image](https://github.com/user-attachments/assets/30bdf390-2707-4f41-8ead-4e8b239061eb)


# Mistakes I made and Lessons Learnt

1. Adding event listeners to a a group of elements

I made the mistake of adding event listener to the global window object, rather than the individual object.

```javascript
const choice = document.querySelectorAll(".choice");
choice.forEach((item) => addEventListener('click', () => {....
```

the above adds a listener that triggers all the choice buttons when any of them are clicked!

Instead, I have to do this:

```javascript
console.log(choice);
choice.forEach((item) => {
    item.addEventListener('click', () => {
        game.start = item.textContent;
        game.current = item.textContent;
        ...
```

2. The 2nd argument of ".forEach" is the index of the item in the array!
