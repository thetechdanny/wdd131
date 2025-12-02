const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Load saved chapters from localStorage; fallback to empty array
let chaptersArray = JSON.parse(localStorage.getItem('myFavBOMList') || '[]');

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    const value = input.value.trim();
    if (value !== '') {  // make sure the input is not empty
        displayList(value); // call the function that outputs the submitted chapter
        chaptersArray.push(value);  // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // use the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    // Use a closure-captured `item` so we don't rely on li.textContent parsing
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item); // remove by the original item value
        input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
    // Remove matching chapter from the array and persist
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}