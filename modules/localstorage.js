import allBooks from "./awesomebooks.js";

const addToLocalStorage = () => {
    const stringifyArray = JSON.stringify(allBooks.bookArray);
    localStorage.setItem('storedBooks', stringifyArray);
}
  
const getFromLocalStorage = () => {
    const stringifyArray = localStorage.getItem('storedBooks');
    allBooks.bookArray = JSON.parse(stringifyArray);
}

export {addToLocalStorage, getFromLocalStorage};