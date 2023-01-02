// Dom manipulation.

// text hero and button banner
const heroTitle = document.querySelector(".hero-title");
const heroText = document.querySelector(".hero-text");
const heroBtn = document.querySelector(".btn-get-started");

//  fill in text hero-title dan hero-text
heroTitle.innerHTML = "Welcome to <span>The Character</span>";
heroText.innerHTML = "In this Website you can choose the character you like and you can enter the character name of the character you choose and you can see the input results";
heroBtn.innerHTML = "Get Started";

// fill in text title of character
const titleCharContent = document.querySelector(".character-title");

titleCharContent.innerHTML = "See Character";

// fill in text title character
const charTitle = document.querySelectorAll(".caption-title");

charTitle[0].innerHTML = "Office Style";
charTitle[1].innerHTML = "Beach Style";
charTitle[2].innerHTML = "Normal Style";
charTitle[3].innerHTML = "Detective Style";
charTitle[4].innerHTML = "Astronot Style";
charTitle[5].innerHTML = "Musician Style";

// form input
const formInput = document.querySelector("#form-input");
const nameUser = document.querySelector("#user-input");
const nameCharacter = document.querySelector("#chaaracter-name");
const inputed = document.querySelector("#result");
const msgError = document.querySelector(".msg");

// dom for form
const formTitle = document.querySelector(".input-title");
const formLabel = document.querySelectorAll(".form-label");
const btnSubmit = document.querySelector(".btn-submit-form");

formTitle.innerHTML = "Input your Character";

formLabel[0].innerHTML = "Your Name";
formLabel[1].innerHTML = "Character Name";

btnSubmit.innerHTML = "Submit";

formInput.addEventListener("submit", submitData);

function submitData(i) {
    i.preventDefault();

    if(nameUser.value === "" || nameCharacter.value === "") {
        // add style error mesaage
        msgError.classList.add("error");
        // add text to error message
        msgError.innerHTML = "Please Complate the form!!";

        // set the time for the error message to automatically disappear
        setTimeout(() => msgError.remove(), 2000);
    }else {

        // takes the tbody component that is inside the inputted id
        const tbody = document.getElementById("inputed").querySelector("tbody");
        // create new tag tr
        const tr = document.createElement("tr");
        // create new tag td
        const td = document.createElement("td");
        const td1 = document.createElement("td");

        // add value from nameUser to td
        // which is stored in createTextNode in the form of a new text string
        // and the appendChild is used to add the text node returned by createTextNode
        td.appendChild(document.createTextNode(`${nameUser.value}`));
        td1.appendChild(document.createTextNode(`${nameCharacter.value}`));

        // add new tag td into tr tag
        tr.appendChild(td);
        tr.appendChild(td1);

        // manipulation style from js side
        tr.style.backgroundColor = "#bed1e6";
        td.style.color = "#000";
        td1.style.color = "#000";

        // added a new tr tag inside the tbody tag which will display the data was inputted into the form
        tbody.appendChild(tr);

        // clear form input
        nameUser.value = "";
        nameCharacter.value = "";
    }
}

// dom result title
const titleTable = document.querySelectorAll("th");

titleTable[0].innerHTML = "Name";
titleTable[1].innerHTML = "Character";

// fill in sub text footer
const subFooterText = document.querySelector(".sub-text-footer");

subFooterText.innerHTML = "TheCharacter.com";