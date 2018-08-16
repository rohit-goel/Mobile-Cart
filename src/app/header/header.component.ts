import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  fruits = [
    {name:"mango", category:"fruits", price: "Rs 30"},
    {name:"orange", category:"fruits",price: "Rs 40"},
    {name : "guava",category : "fruits",price : "Rs 50"},
    {name : "apple",category:"fruits",price: "Rs 80"},
    {name: "banana",category: "fruits",price : "Rs 50"},
    {name: "pineapple",category : "fruits",price: "Rs 30"},
    ];

  vagetables = [
    {name: "carrot",category : "vegetables",price: "Rs 50"},
    {name: "potato",category : "vegetables",price : "Rs 70"},
    {name: "capsicum",category: "vegetables",price : "Rs 50"},
    {name : "tomato",category : "vegetables",price : "Rs 40"},
    {name : "peas", category : "vegetables",price : "Rs 50"},
    {name : "ginger", category : "vegetables", price : "Rs 50"},
    {name : "broccoli",category : "vegetables", price : "Rs 40"},
    {name : "Cabbage",category : "vegetables", price : "Rs 60"},
    {name : "cauliflower",category :"vegetables", price : "Rs 40"},
    {name : "celery",category : "vegetables",price :"Rs 60"}
  ];

  laptops= [
    {name : "HP 15q", category : "laptop",price : "Rs 28,990"},
    {name :"Dell Inspiron 15 5000", category: "laptop", price: "Rs 37,990"},
    {name :"Asus TUF", category :"laptop",price :"Rs 69,990"},
    {name :"Lenovo Ideapad 330", category: "laptop",price:"Rs 41,990" },
    {name: "Apple MacBook Air",category :"laptop",price:"Rs 61,990"},
    {name :"Acer Predator", category : "laptop", price:"Rs 89,990"},
    {name : ""}
  ]

  display(productcategory){
    
  }

}
