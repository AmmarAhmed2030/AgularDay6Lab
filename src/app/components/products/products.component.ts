import { Component } from '@angular/core';
import { DiscountOffers } from '../../Models/DiscountOffers';
import { Store } from '../../Models/store';
import { IProduct } from '../../Models/iproduct';
import { ICategory } from '../../Models/icategory';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  shadowBorder: object = {
    borderRadius: '10px solid blue',
    borderShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    border: '1px solid blue',
  };
  storeObj: Store = new Store(
    'Ozy',
    ['fayoum', 'cairo'],
    'assets/aad4d0110142211.5fe4b63868daa.jpg'
  );
  clientName: string;
  ProductList: IProduct[];
  categoryProducts: IProduct[] = [];

  changeQuantity(id: number) {
    let foundItem = this.ProductList.find((item) => item.id == id);
    if (foundItem) {
      foundItem.quantity -= 1;
      foundItem.isPurchased = true;
      foundItem.purchaseDate = new Date();
    }
  }
  categories: ICategory[];
  catId: string = '';
  discount: DiscountOffers;
  currQuantity: string = '';
  purchaseDate = Date.now();
  set selectedCategory(value: string) {
    if (value == '0') {
      this.categoryProducts = this.ProductList;
    } else {
      this.categoryProducts = this.ProductList.filter(
        (prd) => prd.categoryId == parseInt(value)
      );
    }
  }
  constructor() {
    this.clientName = 'Ammar';
    this.categories = [
      { id: 1, name: 'Women' },
      { id: 2, name: 'Men' },
      { id: 3, name: 'Childern' },
      { id: 4, name: 'Extra Size' },
    ];
    this.discount = DiscountOffers.TenPercent;
    this.ProductList = [
      {
        id: 1,
        name: 'Boat',
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        quantity: 0,
        description:
          '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        categoryId: 1,
        image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        isPurchased: false,
        purchaseDate: '',
      },
      {
        id: 2,
        name: 'Boat',
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        quantity: 3,
        description:
          '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        categoryId: 2,
        image:
          'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        isPurchased: false,
        purchaseDate: '',
      },
      {
        id: 3,
        name: 'Boat',
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        quantity: 1,
        description:
          '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        categoryId: 3,
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        isPurchased: false,
        purchaseDate: '',
      },
      {
        id: 4,
        name: 'Boat',
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        quantity: 3,
        description:
          '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        categoryId: 4,
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        isPurchased: false,
        purchaseDate: '',
      },
      {
        id: 5,
        name: 'Boat',
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        quantity: 3,
        description:
          '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        categoryId: 2,
        image:
          'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        isPurchased: false,
        purchaseDate: '',
      },
      {
        id: 6,
        name: 'Boat',
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        quantity: 3,
        description:
          '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        categoryId: 1,
        image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        isPurchased: false,
        purchaseDate: '',
      },
      {
        id: 7,
        name: 'Boat',
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        quantity: 3,
        description:
          '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        categoryId: 4,
        image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        isPurchased: false,
        purchaseDate: '',
      },
      {
        id: 8,
        name: 'Boat',
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        quantity: 3,
        description:
          '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        categoryId: 3,
        image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        isPurchased: false,
        purchaseDate: '',
      },
      {
        id: 9,
        name: 'Boat',
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        quantity: 3,
        description:
          '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        categoryId: 2,
        image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        isPurchased: false,
        purchaseDate: '',
      },
      {
        id: 10,
        name: 'Boat',
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        quantity: 3,
        description:
          '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        categoryId: 1,
        image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        isPurchased: false,
        purchaseDate: '',
      },
    ];
    this.categoryProducts = this.ProductList;
  }
}
