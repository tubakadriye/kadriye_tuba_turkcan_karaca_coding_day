let books = [
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        isInstock: false,
        price: 200,


    },
    {
        title: "Harry Potter",
        author: "J. K.  Rowling",
        isInstock: false,
        price:100
    },
    {
        title:"Emmma",
        author:"Jane Austen",
        isInstock: false,
        price:20
    }
]



let book_title_list = [];
for (let i=0; i<books.length; i++) {
    book_title_list.push(books[i].title);
    
}






console.log(book_title_list);
book_title_list.sort();
console.log(book_title_list);



let book_title = document.querySelector("#book-title");
let book_author = document.querySelector("#book-author");
let book_sold = document.querySelector("#book-sold");
let book_price = document.querySelector("#book-price");
let saveButton = document.querySelector("#save-button");
let booklist = document.querySelector("#booklist");



for (let i=0; i<books.length; i++) {
    let listElement= document.createElement("li");
    booklist.appendChild(listElement);
    let bookTitle = document.createTextNode(books[i].title);
    let bookAuthor = document.createTextNode(books[i].author);
    let inStock = document.createTextNode(books[i].isInstock);
    let bookPrice = document.createTextNode(books[i].price);

    listElement.appendChild(bookTitle);
    listElement.appendChild(bookAuthor);
    listElement.appendChild(inStock);
    listElement.appendChild(bookPrice);
    

}


function addBook() {
    let li = document.createElement("li");
    let bookArticle = document.createElement("article");
    li.appendChild(bookArticle); 
    let li_title =document.createElement("h4");
    li_title.innerHTML = book_title.value;
    bookArticle.appendChild(li_title);
    bookArticle.classList.add("bookArticle");
    let li_author = document.createTextNode(book_author.value);
    bookArticle.appendChild(li_author);
    let li_sold = document.createTextNode(book_sold.value);
    bookArticle.appendChild(li_sold);
    let li_price = document.createTextNode(book_price.value);
    bookArticle.appendChild(li_price);
    booklist.appendChild(li);
   
}

saveButton.addEventListener("click",addBook);

