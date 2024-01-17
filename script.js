// // 2
// function displayResult(){
//     let parent=document.getElementById("emoji_result");
// //    console.log(parent);
// emojiList.forEach((e)=>{
// let new_row=document.createElement("tr");
// let new_emoji=document.createElement("td");
// let new_aliases=document.createElement("td");
// let new_description=document.createElement("td");

// new_emoji.innerText=e.emoji;
// new_aliases.innerText=e.aliases;
// new_description.innerText=e.description;



// new_row.appendChild(new_emoji);
// new_row.appendChild(new_aliases);
// new_row.appendChild(new_description);

// parent.appendChild(new_row);

// })

// }





// 1
// window.onload = () => displayResult();



const input = document.querySelector("#search");
const belowPart = document.querySelector(".belowPart");

function displayResult(searchvalue = "") {
    let filterArray = emojiList.filter((emojiObj) => {
        if (emojiObj.description.indexOf(searchvalue) !== -1) {
            return true;
        }
        if (emojiObj.tags.some((elem) => elem.startsWith(searchvalue))) {
            return true;
        }
        if (emojiObj.aliases.some((elem) => elem.startsWith(searchvalue))) {
            return true;
        }
    });

    belowPart.innerHTML = "";
    filterArray.forEach((emojiObj) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <p class="emoji">${emojiObj.emoji}</p>
            <p class="aliases">${emojiObj.aliases[0]}</p>
            <p class="description">${emojiObj.description}</p>
        `;
        div.classList.add("emojiContainerCss");
        belowPart.appendChild(div);
    });
}

window.onload = () => displayResult();

input.addEventListener("keyup", () => {
    let searchvalue = input.value;
    displayResult(searchvalue);
});
