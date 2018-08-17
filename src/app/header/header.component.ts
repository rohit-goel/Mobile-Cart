import { Component, OnInit } from '@angular/core';
import { stringify } from '../../../node_modules/@angular/compiler/src/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  allData: any = [];
  total: number = 0;
  constructor() { }

  ngOnInit() {
    this.getAll();
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  fruits = [
    { name: "mango", category: "fruits", price: 30 },
    { name: "orange", category: "fruits", price: 40 },
    { name: "guava", category: "fruits", price: 50 },
    { name: "apple", category: "fruits", price: 80 },
    { name: "banana", category: "fruits", price: 50 },
    { name: "pineapple", category: "fruits", price: 30 }
  ];

  vagetables = [
    { name: "carrot", category: "vegetables", price: 50 },
    { name: "potato", category: "vegetables", price: 70 },
    { name: "capsicum", category: "vegetables", price: 50 },
    { name: "tomato", category: "vegetables", price: 40 },
    { name: "peas", category: "vegetables", price: 50 },
    { name: "ginger", category: "vegetables", price: 50 },
    { name: "broccoli", category: "vegetables", price: 40 },
    { name: "Cabbage", category: "vegetables", price: 60 },
    { name: "cauliflower", category: "vegetables", price: 40 },
    { name: "celery", category: "vegetables", price: 60 }
  ];

  laptops = [
    { name: "HP 15q", category: "laptop", price: 28990 },
    { name: "Dell Inspiron 15 5000", category: "laptop", price: 37990 },
    { name: "Asus TUF", category: "laptop", price: 69990 },
    { name: "Lenovo Ideapad 330", category: "laptop", price: 41990 },
    { name: "Apple MacBook Air", category: "laptop", price: 61990 },
    { name: "Acer Predator", category: "laptop", price: 89990 },
  ];

  pulses = [
    { name: "Split green gram", price: 300, category: "pulses" },
    { name: "Black eyed beans", price: 250, category: "pulses" },
    { name: "Yellow Pigeon Peas", price: 260, category: "pulses" },
    { name: "Kidney Beans", price: 200, category: "pulses" },
    { name: "Split Black Gram", price: 300, category: "pulses" },
    { name: "Red Lentils", price: 350, category: "pulses" },
    { name: "Burkish Gram", price: 300, category: "pulses" },
    { name: "Split Bengal Gram", price: 300, category: "pulses" },
    { name: "Black Gram bean", price: 300, category: "pulses" },
    { name: "White Peas", price: 260, category: "pulses" }
  ];


  showfruits() {
    this.allData = this.fruits;
    this.closeNav();
  }
  showvegetables() {
    this.allData = this.vagetables;
    this.closeNav();
  }
  showlaptops() {
    this.allData = this.laptops;
    this.closeNav();
  }
  showpulses() {
    this.allData = this.pulses;
    this.closeNav();
  }

  getAll() {
    this.allData = [];
    this.fruits.forEach(element => {
      this.allData.push(element);
    });

    this.laptops.forEach(element => {
      this.allData.push(element);
    });

    this.vagetables.forEach(element => {
      this.allData.push(element);
    });

    this.pulses.forEach(element => {
      this.allData.push(element);
    });
    this.closeNav();
  }


}
