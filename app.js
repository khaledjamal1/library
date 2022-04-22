let myLibrary = [];

function Book(title, author, pages) {
    this.title  = title
    this.author = author
    this.pages = pages
   
}
Book.prototype.submit = function(){
    myLibrary.push(Book())
}
function addBookToLibrary(title, author, pages) {
    
    const newbook = new Book(title,author,pages)
    
    myLibrary.push(newbook)

}
const button = document.querySelector(".addb")

button.addEventListener("click", ()=>{

})

const title = document.getElementById("title1")
const author = document.getElementById("author1")
const pages = document.getElementById("pages1")
const addBook = document.querySelector(".books")
const add = document.querySelector(".new")
let i = 0
add.addEventListener("click",(e)=>{
    e.preventDefault()
    const titlevalue = title.value
    const authorvalue = author.value
    const pagesvalue = pages.value
    addBookToLibrary(titlevalue, authorvalue, pagesvalue)
    title.value =""
    author.value =""
    pages.value =""
    console.log(myLibrary)
    
    display(myLibrary[i])
    i++;
})



        
function display(Book){
    const keys = Object.keys(Book)
    const addedbook = document.createElement("div")
    addedbook.classList.add("newbook")
    const titlename = document.createElement('div')
    titlename.classList.add("titlename")
    const authorname = document.createElement('div')
    authorname.classList.add("authorname")
    const pagesnum = document.createElement('div')
    pagesnum.classList.add("pagesnum")
    const remove = document.createElement("button")
    remove.classList.add("remove")
    remove.textContent= "remove"
    titlename.textContent = "title: " + Book.title
    authorname.textContent = "author " + Book.author
    pagesnum.textContent = "Pages " + Book.pages
    addedbook.appendChild(titlename)
    addedbook.appendChild(authorname)
    addedbook.appendChild(pagesnum)
    addBook.appendChild(addedbook)
    addedbook.appendChild(remove)
    let x = myLibrary.indexOf(Book)
    remove.addEventListener('click',()=>{
        addBook.removeChild(addedbook)
        myLibrary.splice(x,1)
        i--
    })
}
