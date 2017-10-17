# Cheatsheet

## HTML

Tags

- `<span> ... </span>` useful for styling within other tags
- `<div> ... </div>` everything inside is on its own row
- `<p> ... </p>` everything inside is in a paragraph, with space above and below
- `<a href="link"> ... </a>` everything inside is clickable, send you to a webpage
- `<img src="link" />` display an image
- `<br/>` creates a newline (often used within a paragraph)
- `<hr/>` creates a newline with a horizontal stroke through it, matching the width of the parent tag

Attributes are what go next to tags, within the carrots `<>`

- `<div class="dirtty"> ... </div>` styled the tag according to the CSS class

## CSS

Styling all tags of the same type
```
img {
  width: 500px;
}
```

Styling by class
```
.medium-sized {
  width: 500px;
}
```
Some common CSS attributes
```
.example {
  font-size: 20px;
  font-decoration: underline;
  font-weight: bold;
  font-style: italic;
  
  color: green;
  background-color: blue;
  
  text-align: left;
  text-align: center;
  
  width: 300px;
  width: 70%;
  
  padding: 5px;
  padding-left: 20px;
  
  margin: 5px;
  margin-left: 20px;
}
```

---
If you have any ideas/requests, please email Paul to update this page.
