import {Component, inject, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../shared/interfaces/product.interface";
import {TableModule} from "primeng/table";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {InputMask} from "primeng/inputmask";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Rating} from "primeng/rating";

@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [
    TableModule,
    IconField,
    InputIcon,
    InputMask,
    ReactiveFormsModule,
    Rating,
    FormsModule
  ],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.scss'
})
export class ProductListPageComponent implements OnInit {

  productService = inject(ProductService);
  products !: Product[];
  isLoading = false;


  ngOnInit() {
    this.fetchProducts()
  }


  fetchProducts() {
    this.isLoading = true;
    this.productService.getAllProductsUnpaged().subscribe({
      next:(response) => {
        this.isLoading = false;
        this.products = response
      },
      error:(error) => {
        this.isLoading = false;
        console.log(error);
      }
    })
  }

}
