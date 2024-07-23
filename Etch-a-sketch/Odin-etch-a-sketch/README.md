# Odin-etch-a-sketch
Odin Project's etch a sketch

# Mistakes I made and lessons learnt:

1. When linking the html to my script, I did not user "defer". This resulted in my Script getting executed before my html loads, which results in type (null) errors, as querySelection will fail to find the html elements. 

2. If you want to use ${} to reference a variable, you need to use backticks `` instead of ""

3. If you want objects to wrap around once they have reached a width limit, use flex-wrap: wrap property in the container!

4.   You can use the forEach function to remove all elements or a class/id of elements

```javascript
let rootdivs = document.querySelectorAll(".rootDiv")

rootdivs.forEach(div => {
    div.remove();
});
```
If you want to remove all child elements from an element, you can use:

```javascript
let root = document.querySelector(".root");

root.innerHTML = "";




