import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../shared/interfaces/product.interface";


@Injectable({providedIn: "root"})
export class ProductService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;



  public getAllProducts() :Observable<any> {

    return this.http.get(`${environment.apiUrl}/public/products`)

  }

  public getAllProductsUnpaged():Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/public/products/unpaged`)
  }

}
