export default function Learn() {
    class Universe {
        constructor(nama) {
          this.name = nama
        }

        sayHello(punctuation = "") {
          console.log(`Hello ${this.name}${punctuation}`);
        }
      }

      const mini = new Universe("wok");

      //try extends a class
      class AnotherUniverse extends Universe {
        constructor(name,dimension) {
          super(name);
          this.realm = dimension;
        }

        showRealm() {
          console.log(`This is my realm ${this.realm} and this is my universe name ${this.name}`);
        }
      }

      const anotherUniverse = new AnotherUniverse("Tatooine","3rd realm");
      // anotherUniverse.showRealm();
      // anotherUniverse.sayHello("#");


      //challenge from Sir AI
      class Vehicle {
        constructor(names, speeds) {
          this.name = names;
          this.speed = speeds;
        }

        info() {
          return `Kendaraan: ${this.name}, Kecepatan Maks: ${this.speed} km/jam`;
        }
      }

      class Car extends Vehicle {
        constructor(name, speed, fuels) {
          super(name, speed);
          this.fuel = fuels;
        }

        info() {
          return `Kendaraan: ${this.name}, Kecepatan Maks: ${this.speed} km/jam, Bahan Bakar: ${this.fuel}`;
        }
      }

      class Bike extends Vehicle {
        constructor(name, speed, types) {
            super(name,speed);
            this.type = types;
        }

        info() {
            return `Kendaraan: ${this.name}, Kecepatan Maks: ${this.speed} km/jam, Jenis: ${this.type}`
        }
      }

      const transportation = new Vehicle("car", 3400);
    //   console.log(transportation.info());

      const cars = new Car("X-Stream", 6000, "Pertamax");
    //   console.log(cars.info());

      const bikes = new Bike("Mini MS#3000", 1000, "Mountain bike");
    //   console.log(bikes.info());
}



//Arrow function + class + loop + array challenge from sir AI
export function Challenge1() {
    const vehicles = [{name: "X-Stream", speed: 120, type: "Car", fuel: "diesel"},
                      {name: "Dinosaurs Y", speed: 120, type: "Bike", fuel: null},
                      {name: "Tesla Evo", speed: 120, type: "Car", fuel: "secret pertamax"},
                      {name: "selector SQL", speed: 120, type: "Plane", fuel: null}
    ];

    //const onlyCar = vehicles.filter( (items) => vehicles[items].type == "Car" ? `Kendaraan: [name], Kecepatan Maks: [speed] km/jam, Bahan Bakar: [fuel]` : undefined );

    const onlyCar = vehicles.filter( (items) => items.type == "Car");

    // for(const items of onlyCar) {
    //     console.log(`Kendaraan: ${items.name}, Kecepatan Maks: ${items.speed} km/jam, Bahan Bakar: ${items.fuel}`)
    // }

    const onlyName = onlyCar.map( (items) => items.name);
    // console.log(`Nama Kendaraan: [' ${onlyName.join("', '")} ']`);
}

// complex challenge 2 from sir AI
export function Challenge2() {
    const books = [{title: "The Fortune Teller", author: "T. Bist", year: 1990, isBorrowed: false},
                   {title: "The Rabbits 2", author: "A. Zomboss", year: 1990, isBorrowed: true},
                   {title: "The Rabbits 2", author: "T. Bist", year: 2000, isBorrowed: false},
                   {title: "Hiya the Djinn", author: "T. Bist", year: 2001, isBorrowed: false},
                   {title: "A lucky coin", author: "Tere Wi.", year: 2000, isBorrowed: true}
    ];
    const borrowedBooks = books.filter( (items) => items.isBorrowed == true);
    const titleBooks = books.map( (items) => items.title);
    const recentToOld = books.sort( (a, b) => {return a.year - b.year;});
    const totalBooks = books.reduce((accumulator, currentValue, index) => accumulator + 1, 0); 

    function checkDuplicateTitle(title) {
        return books.some( (items) => items.title === title);
    }
    
    function libraryLog(username) {
        console.log(`Log perpustakaan ${username} \nBuku yang sudah dipinjam: `);
        borrowedBooks.forEach( (book) => console.log(`[ { title: ${book.title}, author: ${book.author}, year: ${book.year} } ]`));

        console.log(`Jumlah total buku di perpustakaan: ${totalBooks}`);

        const checkTitle = "A lucky coin";
        console.log(`Apakah ada buku dengan judul ${checkTitle}? ${checkDuplicateTitle(checkTitle)}`);

        console.log("Buku setelah diurutkan berdasarkan tahun: ");
        for(const array of recentToOld) {
            console.log(`[ { title: ${array.title}, year: ${array.year} } ]`)
        }

        console.log("Daftar judul buku: ");
        titleBooks.forEach( (items, index, array) => console.log(`Judul: ${items}, Penulis: ${books[index].author}`) );

        console.log("Buku dipinjam: ");
        borrowedBooks.forEach( (value, index, array) => { console.log(`${index + 1}. ${value.title}`);});
    }

    //libraryLog("Panji");

}

//Challenge 3
export function Challenge3() {
    
    const library = [
        {
          id: 1,
          title: "The Fortune Teller",
          author: { name: "T. Bist", nationality: "IND" },
          genres: ["Mystery", "Fantasy"],
          year: 1990,
        },
        {
          id: 2,
          title: "A Lucky Coin",
          author: { name: "Tere Wi.", nationality: "PS" },
          genres: ["Drama", "Romance"],
          year: 2000,
        },
        {
          id: 3,
          title: "Hiya the Djinn",
          author: { name: "T. Bist", nationality: "JPN" },
          genres: ["Adventure", "Fantasy"],
          year: 2001,
        },
      ];

    const [firstBook, ,lastBook] = library;
    const [sample,,] = library;
    const shortInfo = library.map( ({title, author: {name}, genres}) => {
        return `Title: ${title}, Author: ${name}, First Genre: ${genres[0]}`;
    });
  

    //display in the console
    function displayInTheConsole() {
    console.log("Buku pertama: ", `{title: ${firstBook.title}, year: ${firstBook.year}}`);
    console.log("Buku terakhir: " + `{title: ${lastBook.title}, year: ${lastBook.year}}`);

    console.log("Destructure salah satu buku:");
    console.log("Judul: " + `${sample.title}`);
    console.log("Penulis: " + `${sample.author.name}`);
    console.log("Genre: " + `${sample.genres[0]}`);

    console.log("Informasi singkat: ");
    shortInfo.forEach(info => console.log(info));

    }

    //displayInTheConsole();
}

//Challenge 4