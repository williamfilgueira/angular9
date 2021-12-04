import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
import { Product } from "../product.model";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  
  //importando produto do arquivo product-model
  product: Product = {
    name:'',
    price: ''
  }
//injetando service e router
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}
  // metodo para criar um produto
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado");
      this.router.navigate(["/products"]);
    })

  }
  // metodo para cancelar, voltando para pagina de produtos.
  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
