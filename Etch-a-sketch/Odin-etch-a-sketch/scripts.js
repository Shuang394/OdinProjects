document
// get root div

let btn = document.querySelector(".btn");


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function colorPicker(event){
    let element = event.target;
    let rand = getRndInteger(1, 8)
    let color = "white";
    switch(rand){
        case 1:
            color = "red";
            break;
        case 2:
            color = "blue";
            break;
        case 3:
            color = "orange";
            break;
        case 4:
            color = "green";
            break;
        case 5:
            color = "purple";
            break;
        case 6:
            color = "pink";
            break;
        case 7:
            color = "black";
            break;
        case 8:
            color = "yellow";
            break;
        default:
            color = "white"
    }
    element.style.backgroundColor = color;
}


let root = document.querySelector("#root");

for (i = 0; i < 16; i++){
    // create a new flex div for every iteration, 16 times
    let div = document.createElement("div");
    div.setAttribute("style", "display: flex; justify-content: space-evenly;")
    div.classList.add('rootDiv');
    //append the div to root
    root.appendChild(div);

    for (j = 0; j < 16; j++){
        // every loop, create a div that will reside inside the div
        let innerdiv = document.createElement("div");
        // number the divs
        let num = document.createElement("p");
        num.textContent = i * 16 + j
        // add the div into the innerdiv
        innerdiv.appendChild(num);
        div.appendChild(innerdiv);

        // add event handlers and class name
        innerdiv.setAttribute("style", "flex: 1");
        innerdiv.classList.add('inner');
        innerdiv.addEventListener('mouseenter', colorPicker);
        innerdiv.addEventListener('mouseleave', function(event) {
            event.target.style.backgroundColor = "white";
        });
    }
}


btn.addEventListener("click", function () {
    let temp = true;
    while (temp){
        var choice = prompt("Enter a number between 1 - 100");
        if (choice >= 1 && choice <= 100){
            temp = false;
        }
    }

    let inners = document.querySelectorAll(".inner");
    let width1 = root.offsetWidth;
    let height1 = root.offsetHeight;

    let rootdivs = document.querySelectorAll(".rootDiv")

    rootdivs.forEach(div => {
        div.remove();
    });


    for (i = 0; i < choice; i++){
        // create a new flex div for every iteration, 16 times
        root.style.width = `${width1}px`;
        root.style.height = `${height1}px`;
        let div = document.createElement("div");
        width2 = width1/choice;
        height2 = height1/choice;
        div.setAttribute("style", `display: flex; height: ${height2}px`);
        div.classList.add('rootDiv');
        console.log(div.offsetWidth);
        console.log(div.offsetHeight);
        //append the div to root
        root.appendChild(div);
    
        for (j = 0; j < choice; j++){
            // every loop, create a div that will reside inside the div
            let innerdiv = document.createElement("div");
            // number the divs
            let num = document.createElement("p");
            num.textContent = i * choice + j;
            // add the div into the innerdiv
            innerdiv.appendChild(num);
            div.appendChild(innerdiv);
    
            // add event handlers and class name
            innerdiv.setAttribute("style", "flex: 1;");
            innerdiv.classList.add('inner');
            innerdiv.addEventListener('mouseenter', colorPicker);
            innerdiv.addEventListener('mouseleave', function(event) {
                event.target.style.backgroundColor = "white";
            });
        }
    }


})