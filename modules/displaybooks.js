import allBooks from "./awesomebooks.js";
import {addToLocalStorage} from "./localstorage.js";

const displayBook = () => {
    const addedBooks = document.getElementById('list');
    addedBooks.innerHTML = '';
    if (allBooks.bookArray.length){
      for (let i = 0; i < allBooks.bookArray.length; i += 1) {
        const container = document.createElement('div');
        container.classList.add('book');
        addedBooks.appendChild(container);
    
        const container2 = document.createElement('div');
        container2.classList.add('titleAuthor');
        container.appendChild(container2);
    
        const bookDetails = document.createElement('p');
        bookDetails.classList.add('title');
        bookDetails.textContent = `"${allBooks.bookArray[i].title}" by ${allBooks.bookArray[i].author}`;
        container2.appendChild(bookDetails);
    
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.textContent = 'Remove';
    
        removeButton.onclick = () => {
          allBooks.booksFilter(allBooks.bookArray[i]);
          addToLocalStorage();
          displayBook();
        };
        container2.appendChild(removeButton);
      }
    } else {
      const bookDetails = document.createElement('p');
      bookDetails.classList.add('no_book');
      bookDetails.textContent = `No books added yet`;
      addedBooks.appendChild(bookDetails)
    }
}

export default displayBook;