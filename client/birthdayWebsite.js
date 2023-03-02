function bazinga() {
    let button = document.getElementById("button");
    let img = document.createElement("img");
    let img2 = document.createElement("img");
    let msg = document.createElement("p");
    let msg2 = document.createElement("p");
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");

    img.setAttribute("src", "bazinga.png");
    img.setAttribute("style", "margin-left:10%;");
    img2.setAttribute("src", "sheldonCooper.jfif");
    img2.setAttribute("style", "margin-left:44%;");

    button.addEventListener('click', (evt) => {
        rollbar.log('I was clicked!')
    })

    document.body.insertBefore(img, p1);
    document.body.insertBefore(msg, p2);
    document.body.insertBefore(msg2, p3);
    document.body.insertBefore(img2, p4);
    button.remove();
}