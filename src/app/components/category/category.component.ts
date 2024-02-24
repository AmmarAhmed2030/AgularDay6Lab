import { Component } from '@angular/core';
import { ICategory } from '../../Models/icategory';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  categories: ICategory[];
  constructor() {
    this.categories = [
      { id: 1, name: 'Women' },
      { id: 2, name: 'Men' },
      { id: 3, name: 'Childern' },
      { id: 4, name: 'Extra Size' },
    ];
  }
}
