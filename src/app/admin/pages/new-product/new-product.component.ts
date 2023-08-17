import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/store/interfaces/store.interface';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  product: Product[] = [];

  formProduct: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
    imageUrl: ['', Validators.required],
    quantity: ['', [Validators.required]],
    netAmount: ['', Validators.required],
  }); 

  constructor(private formBuilder: FormBuilder,
    private router: Router){}

   


  onSubmit() {
    // Aquí puedes realizar la lógica para agregar el producto
    // por ejemplo, enviar los datos al servidor o almacenarlos en un arreglo local.
    console.log(this.formProduct.value);
    // Limpia el formulario después de enviar los datos
    this.formProduct.reset();
   }
}