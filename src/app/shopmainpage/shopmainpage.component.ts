import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopmainpage',
  templateUrl: './shopmainpage.component.html',
  styleUrls: ['./shopmainpage.component.css']
})
export class ShopmainpageComponent implements OnInit {

  product:string;
  save={};

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "70%";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  fruit = [{
    name: "Mango",
    price: 50,
    category: "Fruit"
  },
  {
    name: "Banana",
    price: 60,
    category: "Fruit"
  },
  {
    frtname: "Papaya",
    price: 70,
    category: "Fruit"
  },
  {
    name: "Orange",
    price: 80,
    category: "Fruit"
  },
  {
    name: "Apple",
    price: 90,
    category: "Fruit"
  },
  {
    name: "Strawberry",
    price: 130,
    category: "Fruit"
  },
  {
    name: "Bilberry",
    price: 150,
    category: "Fruit"
  },
  {
    name: "Blackberry",
    price: 160,
    category: "Fruit"
  },
  {
    name: "Apricot",
    price: 130,
    category: "Fruit"
  },
  {
    name: "Grape",
    price: 135,
    category: "Fruit"
  }
  ];
  vegetables = [{
    name: "Carrot",
    price: 70,
    category: "Vegetables"
  },
  {
    name: "Cauliflower",
    price: 80,
    category: "Vegetables"
  },
  {
    name: "Eggplant",
    price: 90,
    category: "Vegetables"
  },
  {
    name: "Mushrooms",
    price: 50,
    category: "Vegetables"
  },
  {
    name: "Onion",
    price: 100,
    category: "Vegetables"
  },
  {
    name: "Potato",
    price: 70,
    category: "Vegetables"
  },
  {
    name: "Pumpkin",
    price: 90,
    category: "Vegetables"
  },
  {
    name: "Tomato",
    price: 50,
    category: "Vegetables"
  },
  {
    name: "Cabbage",
    price: 36,
    category: "Vegetables"
  },
  {
    name: "Lettuce",
    price: 74,
    category: "Vegetables"
  }
  ];
  pulses = [{
    name: "Green-Gram",
    price: 74,
    category: "Pulses"
  },
  {
    name: "Lentil",
    price: 73,
    category: "Pulses"
  },
  {
    name: "Pigeon-pea",
    price: 84,
    category: "Pulses"
  },
  {
    name: "Black-gram",
    price: 76,
    category: "Pulses"
  },
  {
    name: "Chickpeas",
    price: 86,
    category: "Pulses"
  },
  {
    name: "Cowpea",
    price: 76,
    category: "Pulses"
  },
  {
    name: "Sago",
    price: 56,
    category: "Pulses"
  },
  {
    name: "Kidney-Beans",
    price: 56,
    category: "Pulses"
  },
  {
    name: "Moth-dal",
    price: 46,
    category: "Pulses"
  },
  {
    name: "Yellow-peas",
    price: 86,
    category: "Pulses"
  },
  ];
  dairy = [{
    name: "",
    price: 100,
    category: "Dairy"
  },
  {
    name: "Cheese",
    price: 130,
    category: "Dairy"
  },
  {
    name: "Cream",
    price: 140,
    category: "Dairy"
  },
  {
    name: "Milk",
    price: 90,
    category: "Dairy"
  },
  {
    name: "Milk Powder.",
    price: 70,
    category: "Dairy"
  },
  {
    name: "Toned milk",
    price: 70,
    category: "Dairy"
  },
  {
    name: "Dahi",
    price: 80,
    category: "Dairy"
  },
  {
    name: "Lassi",
    price: 50,
    category: "Dairy"
  },
  {
    name: "Shake",
    price: 40,
    category: "Dairy"
  },
  {
    name: "Vanila",
    price: 70,
    category: "Dairy"
  }
  ];
  sports = [{
    name: "Football",
    price: 1100,
    category: "sports"
  },
  {
    name: "Baseball",
    price: 130,
    category: "sports"
  },
  {
    name: "Volleyball",
    price: 140,
    category: "sports"
  },
  {
    name: "Bat",
    price: 90,
    category: "sports"
  },
  {
    name: "Badminton",
    price: 70,
    category: "sports"
  },
  {
    name: "Table-Tennis",
    price: 70,
    category: "sports"
  },
  {
    name: "Basketball",
    price: 80,
    category: "sports"
  },
  {
    name: "Hockey",
    price: 50,
    category: "sports"
  },
  {
    name: "Softball",
    price: 40,
    category: "sports"
  },
  {
    name: "Boxing-gloves",
    price: 70,
    category: "sports"
  }
  ];
  electronics = [{
    name: "Pendrive",
    price: 540,
    category: "electronics"
  },
  {
    name: "Data-Cable",
    price: 150,
    category: "electronics"
  },
  {
    name: "Mouse",
    price: 170,
    category: "electronics"
  },
  {
    name: "Charger",
    price: 290,
    category: "electronics"
  },
  {
    name: "Headphones",
    price: 3700,
    category: "electronics"
  },
  {
    name: "Earphones",
    price: 1700,
    category: "electronics"
  },
  {
    name: "Iron",
    price: 1800,
    category: "electronics"
  },
  {
    name: "Fan",
    price: 1500,
    category: "electronics"
  },
  {
    name: "LCD",
    price: 40000,
    category: "electronics"
  },
  {
    name: "Refgirator",
    price: 17000,
    category: "electronics"
  }
  ];
  items = [this.fruit, this.vegetables, this.pulses, this.dairy, this.sports, this.electronics];

  category(selectedCategory:string) {
    save={};
    this.product=selectedCategory;
    this.closeNav();
    console.log(this.product);
    this.items.forEach(element => {
      if(elements.items === this.product){
        console.log(this.product);
      }
    });
    items.forEach((elements) => {
      elements.forEach((obj) => {
          if (obj.category===this.product) {
              //console.log(obj.name);
              save.push(obj);
          }
      });
  });
    console.log(this.items);
  }
}