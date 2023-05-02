import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/07/Creamy-Chipotle-Shrimp-4.jpg'
    ),
  ]; //array of recipes
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
