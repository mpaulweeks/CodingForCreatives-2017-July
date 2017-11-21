# marina/final/

[Assignment details](/homework/final)

For my final project, I want to create a page that contains all the references and inspirations that I use for my work: website, posters, design templates, photographies, typographies and music. Visitors will be able to interact with the content: zoom in on images, expand them and be able to comment and like the parts that enjoyed the most.

Also, I want to make the website in such a way that it’s easy to change the content to my personal project or to just add a new tab/page with it.

## Paul's Response

I believe in your ability to figure out some of the content ideas you have, though you are welcome to discuss any with me in particular!

Let's make sure you're set up for the comments.

Hosting and changing your site should be obvious after next week's lecture.

## Week 8

You can simulate popups by creating a large, centered, fixed version of the image and hiding it

You can hide via any of these:
```css
  left: 100%;
  display: none;
  z-index: -1;
```

You can add a click event/function to any div, to add/remove class from any other div. Therefore, click on popup -> function to remove class from popup.

Get popup working for 1 popup next week, we can get JS working generically.

Add opacity with rgba values
```css
.some-div {
  background-color: rgba(0,0,255,0.2);
}
```
