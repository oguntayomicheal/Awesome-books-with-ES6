import navSection from "./modules/navsection.js";
import displayBook from "./modules/displaybooks.js"
import allBooks from "./modules/awesomebooks.js"

import {addToLocalStorage, getFromLocalStorage} from "./modules/localstorage.js"


document.addEventListener('DOMContentLoaded', () => {
    navSection();
    displayBook();
})


 // add-book
const addBtn = document.getElementById('addButton');
addBtn.addEventListener('click', () => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    allBooks.bookObj(title.value, author.value);
    addToLocalStorage();
//    displayBook();
 });

if (localStorage.getItem('storedBooks') == null) {
    addToLocalStorage();
} else {
    getFromLocalStorage();
}
