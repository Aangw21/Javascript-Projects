const btn = document.getElementById("addBtn");

btn.addEventListener("click", () => {
    // get input
    const lol = document.querySelector("input");
    const text = lol.value;
    console.log(text);
    // populate <p>
    const newP = document.createElement("p");
    // populate<p>
    newP.innerHTML = text;
    // add<p>
    const div = document.getElementById("sd");
    div.insertBefore(newP, div.firstChild);

})

// eat 