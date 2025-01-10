export function Learn() {
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
export function Challenge4() {
  const library = [
    {
      id: 1,
      title: "The Fortune Teller",
      author: { name: "T. Bist", nationality: "IND" },
      genres: ["Mystery", "Fantasy"],
      year: 1990,
      isBorrowed: false,
    },
    {
      id: 2,
      title: "A Lucky Coin",
      author: { name: "Tere Wi.", nationality: "PS" },
      genres: ["Drama", "Romance"],
      year: 2000,
      isBorrowed: true,
    },
    {
      id: 3,
      title: "Hiya the Djinn",
      author: { name: "T. Bist", nationality: "JPN" },
      genres: ["Adventure", "Fantasy"],
      year: 2001,
      isBorrowed: true,
    },
  ];
  
  //new object
  const aditional = {
    rating: 4.8, 
    publisher: "IND Publishing"};

  //combine property using spread operator
  const updated = {...aditional, ...library[0]};

  //display the result
  // console.log(updated);
  
  //destructure object for selecting all of the title and genre properties from all books
  const titleGenre = library.map( ( {title, genres} ) => {
    return title + " Genre: " + genres[0];
  } );

  //display the result
  // console.log(titleGenre)

  //borrowed books
  const borrowed = library.filter(({isBorrowed}) => isBorrowed).reduce((total) => total + 1, 0);

  //display the result
  // console.log(`Jumlah buku yang sedang dipinjam: ${borrowed}`);

  //add summary
  const newLibrary = library.map( (items) => {
    return {
      ...items,
      status : `Summary: ${items.title} oleh ${items.author.name} ${items.year}`
    }
  });

  //display the result
  // newLibrary.forEach( (items) => console.log(items.status) );

  //sorting from recent year to the old year
  const recentToOld = [...library].sort( (a,b) => {return b.year - a.year});

  //display the result
  // console.log(recentToOld);

  //destructure to select first and last books
  const [first,,last] = library;
  
  //display the result
  // console.log(`Buku pertama: { title: "${first.title}", year: "${first.year}" }`);
  // console.log(`Buku terakhir: { title: "${last.title}", year: "${last.year}" }`);

}

//Challenge 5
export function Challenge5() {
  //start here
  const cameras = [
    {
      id: 1,
      brand: "Canon",
      model: "EOS 5D Mark IV",
      price: 25000000,
      year: 2016,
      isAvailable: true,
      specs: { resolution: "30.4 MP", sensor: "Full-frame", video: "4K" },
    },
    {
      id: 2,
      brand: "Nikon",
      model: "D850",
      price: 28000000,
      year: 2017,
      isAvailable: false,
      specs: { resolution: "45.7 MP", sensor: "Full-frame", video: "4K" },
    },
    {
      id: 3,
      brand: "Sony",
      model: "A7R IV",
      price: 30000000,
      year: 2019,
      isAvailable: true,
      specs: { resolution: "61 MP", sensor: "Full-frame", video: "4K" },
    },
    {
      id: 4,
      brand: "Fujifilm",
      model: "X-T4",
      price: 22000000,
      year: 2020,
      isAvailable: true,
      specs: { resolution: "26.1 MP", sensor: "APS-C", video: "4K" },
    },
    {
      id: 5,
      brand: "Olympus",
      model: "OM-D E-M1 Mark III",
      price: 19000000,
      year: 2020,
      isAvailable: false,
      specs: { resolution: "20.4 MP", sensor: "Micro Four Thirds", video: "4K" },
    },
  ];
  
  //task 1
  const availableCamera = [...cameras].filter(({isAvailable}) => isAvailable === true)
  //console.log(availableCamera)
  
  //task 2
  const latest = cameras.reduce((maxYear, item) => {
    return item.year > maxYear ? item.year : maxYear;
  }, 0);
  //console.log(latest)
  
  const oldest = cameras.reduce((maxYear, item) => {
    return item.year < maxYear ? item.year : maxYear;
  }, Infinity);
  //console.log(oldest)

  //task 3
  const camerasDescription = cameras.map((value) => {
    return {
      ...value,
      description: `Model: ${value.model}, Brand: ${value.brand}, Price: ${value.price}`
    };
  });
  //console.log(camerasDescription)

  //task 4
  const totalPrice = cameras.reduce((initial, item) => {
    return initial += item.price;
  }, 0);
  //console.log(totalPrice)

  //task 5
  const newCameras = cameras.reduce( (accumulator, camera) => {

    if(!accumulator[camera.brand]) {
      accumulator[camera.brand] = [];
    }

    accumulator[camera.brand].push(camera);

    return accumulator;
  }, {});
  //console.log(newCameras)

  //task 6
  const ratedCameras = cameras.map((camera) => {
    const rating = Math.floor(Math.random() * 5) + 1;
    const result = {...camera, rating};
    return result;
  });
  //console.log(ratedCameras);

  //task 7
  const cheapestToMostExpensive = cameras.sort((a,b) => {
    if(a.price < b.price) {
      return -1;
    } else if(a.price > b.price) {
      return 1;
    }
  });

  //console.log(cheapestToMostExpensive)

  //task 8
  const cameraSummary = cameras.map( (camera) => {
    return {
      ...camera,
      summary: `${camera.brand} ${camera.model} (${camera.year}) - Price: Rp.${camera.price} - Resolution: ${camera.specs.resolution}`
    }
  });

  //console.log(cameraSummary);
} 

//Challenge 6
export function Challenge6() {
  const electronics = [
    {
      id: 1,
      brand: "Apple",
      model: "iPhone 14",
      category: "Smartphone",
      price: 15_000_000,
      stock: 20,
      year: 2022,
      isAvailable: true,
      specs: { storage: "128GB", color: "Blue", connectivity: "5G" },
    },
    {
      id: 2,
      brand: "Samsung",
      model: "Galaxy S22",
      category: "Smartphone",
      price: 14_000_000,
      stock: 15,
      year: 2022,
      isAvailable: true,
      specs: { storage: "256GB", color: "Black", connectivity: "5G" },
    },
    {
      id: 3,
      brand: "Sony",
      model: "WH-1000XM5",
      category: "Headphones",
      price: 5_000_000,
      stock: 30,
      year: 2021,
      isAvailable: true,
      specs: { battery: "30 hours", noiseCancellation: true },
    },
    {
      id: 4,
      brand: "Dell",
      model: "XPS 13",
      category: "Laptop",
      price: 20_000_000,
      stock: 10,
      year: 2020,
      isAvailable: false,
      specs: { storage: "1TB", ram: "16GB", processor: "Intel i7" },
    },
    {
      id: 5,
      brand: "Apple",
      model: "MacBook Air M2",
      category: "Laptop",
      price: 18_000_000,
      stock: 5,
      year: 2022,
      isAvailable: true,
      specs: { storage: "512GB", ram: "8GB", processor: "M2 Chip" },
    },
  ];

  //start here

  //#1
  const availableElectronics = electronics.filter((item) => {
    return item.isAvailable === true;
  });
  // console.log(availableElectronics);
  
  //#2
  const mostExpensive = electronics.reduce( (accumulator, item) => {
    return item.price > accumulator ? `The most expensive electronics is: ${item.brand}${item.model} — Price: $${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` : accumulator;
  }, 0);

  // console.log(mostExpensive);

  const cheapest = electronics.reduce((accumulator, item) => {
    return item.price < accumulator ? `The cheapest electronics is: ${item.brand}${item.model} — Price: $${item.price.toLocaleString()}` : accumulator;
  }, Infinity);

  // console.log(cheapest);

  //#3
  const description = electronics.map( (item) => {
    return {
      ...item,
      description: `Model: ${item.model}, Brand: ${item.brand}, Category: ${item.category}, Price: ${item.price}`
      }
    }
  );
  
  // console.log(description)

  //#4
  const totalStock = electronics.reduce((previousValue, currentValue) => {
    return currentValue.stock += previousValue}, 0);

  // console.log(`Total stock is: ${totalStock}`);

  //#5
  const electronicsByCategory = electronics.reduce( (previousValue, currentValue) => {
    if(!previousValue[currentValue.category]) {
      previousValue[currentValue.category] = [];
    }
    previousValue[currentValue.category].push(currentValue);

    return previousValue;
  }, {});

  // console.log(electronicsByCategory);

  //#6
  const ratedElectronics = electronics.map( (item) => {
    const rate = Math.floor((Math.random() * 5) + 1);
    return {
      ...item,
      rating: rate
    }
  });

  // console.log(ratedElectronics);

  //#7
  const leastToMost = [...electronics].sort((a, b) => {
    return a.stock - b.stock;
  });

  // console.log(leastToMost);

  //#8
  const electronicsSummary = electronics.map( (items) => {
    return {
      ...items,
      summary: `Brand ${items.brand} ${items.model} (${items.year}) - Rp.${items.price.toLocaleString()} - ${JSON.stringify(items.specs)}`
    }
  })

  // console.log(electronicsSummary);
}

//JSX chapter
export const Opening = (
  <>
    <h1>This is a opening title!</h1>
    <p><b>Welcome to the JSX chapter!</b></p>
  </>
);

export function PropsExample({name = "Panji"}) {
  return (
    <>
      <ul>
        <li>Hello sir {name}!</li>
      </ul>
    </>
  );
} 

export function NestedComponents({name, alias}) {
  return (
    <>
      <div>
        <h2>{alias} private browser.</h2>
        <PropsExample name={name}/>
      </div>
    </>
  )
}

