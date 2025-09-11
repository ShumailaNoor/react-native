class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getDetails(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
}
}
class EBook extends Book{
    constructor(title, author, year, fileSize){
        super(title, author, year);
        this.fileSize = fileSize;
    }
    getDetails(){
        return `${super.getDetails()}, File Size: ${this.fileSize}MB`;
    }
}
class AudioBook extends Book{
    constructor(title, author, year, duration){
        super(title, author, year);
        this.duration = duration;
    }
    getDetails(){
        return `${super.getDetails()}, Duration: ${this.duration}Mins`;
    }
}

let book = new Book("Book", "John", 2007);
let eBook = new EBook("EBook", "Charlie", 2020, 20);
let audioBook = new AudioBook("Audio Book", "Sara", 1996, 10.00);
console.log("\n");

let bookArray = [book.getDetails(), eBook.getDetails(), audioBook.getDetails()];
for (let i = 0; i<bookArray.length; i++){
    console.log(bookArray[i]);
    console.log("-------------------------------------------------------------");
}
console.log("\n");
