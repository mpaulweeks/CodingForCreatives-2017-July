# Interactive

[View the lecture notes](/lectures/week6)

## Assignment

Use javascript to create a web page that includes interactive elements that alter the CSS.

In plain speak, the user should be able to click on something or otherwise interact, which triggers some javascript, which affects the CSS.

Some examples:
- buttons to manipulating the size/styling of text or images
- a slideshow
- a game

Requirements:
- User can interact with the page, which triggers JS, which triggers CSS change
- Actions should be safely repeatable by the User
  - eg: Clicking a DELETE button a second time can do nothing, but it must not error
- If doing slides, include at least 5 different slides

Upload the following to `students/<yourname>/interactive/` by 5pm on Sunday, November 12
- `index.html`
- a `css` file for styles
- a `js` file for interaction

## Tips

### CSS

- In the example, we set `transition-property: left;` so it only animates the changes to the property `left`.
  - If you want to catch all changes, try this instead: `transition-property: all;`
- `transition` properties on the "extra" class (eg `.visible`) won't animate when the class is removed
  - Instead, put them all on the "base class", ie the one that's always present like `slide` in the example

### JS

- Experiment with `console.log()`, and view the results in the Inspect Console
- If you try to use `classList.add()` when it's already there or `classList.remove()` when it's already missing, it will quietly do nothing
- If using Arrays, remember: the indexes start at zero and go up to (length - 1)
  - Indexes for `["a", "b", "c"]` are `[0, 1, 2]`
- Is it not working? Try inspecting the page and checking the Console for errors:
![](../canvas/console.png)
- When in doubt, re-read all your code very carefully! Look for issues with spelling, capitalization, and punctuation
