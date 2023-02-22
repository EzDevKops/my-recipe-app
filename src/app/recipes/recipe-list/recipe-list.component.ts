import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] =[
    new Recipe('A test Recipe', 'This is simply a test', 'https://data.thefeedfeed.com/static/2019/06/14/15605265545d03beda5eb6f.webp')
  ];

  constructor () {}

ngOnInIt () {}

}
