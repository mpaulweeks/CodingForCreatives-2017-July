# Clicker

[View the lecture notes](https://github.com/mpaulweeks/cfc2017/tree/master/lectures/week5)

[View the example code](https://github.com/mpaulweeks/cfc2017/tree/master/homework/clicker/example)

## Assignment

Use javascript to create a ["Cookie Clicker"](http://orteil.dashnet.org/experiments/cookie/)-style game.

Requirements:
- User can click something to bake a Cookie
- User can click something to purchase a Grandma
- User can click something to purchase a Factory
- Display the following numbers with live updating:
  - your current Cookie count
  - your current Grandma count
  - how much a Grandma costs
  - your current Factory count
  - how much a Factory costs
- Grandma cost should increase some amount each time a Grandma is purchased
- Factory cost should increase some amount each time a Factory is purchased
- Display 5 unique messages when different milestones are reached
  - Count by "lifetime" cookies, not what they current have in stock
- Add custom styles to buttons and display, add images

Upload the following to `students/<yourname>/clicker/` by 5pm on Sunday, November 5
- `index.html`
- a `css` file to style your displays
- a `js` file to run the game

## Tips

- For HTML ids, use hyphens like `<div id="cookie-clicker"></div>`
- For JS variables, use camel casing like `var grandmaCost = 0;`
- Is it taking forever to test your factories? Just decrease the cost, or change how many cookies you start with
- Feel free to change the "flavor", it doesn't have to be about cookies and grandmas and factories, as long as the mechanics are the same
- Remember the three steps to displaying/updating text with JS:
  - Create an HTML tag with an id
  - In JS, get that element by its id and store it in a variable
  - During `funcUpdateHTML`, set the elements `innerHTML` to the new text
- Is it not working? Try inspecting the page and checking the Console for errors:
![](../canvas/console.png)
- When in doubt, re-read all your code very carefully! Look for issues with spelling, capitalization, and punctuation
