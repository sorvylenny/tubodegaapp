import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product, genderOptions, sizeOptions, tagOptions } from 'src/app/store/interfaces/store.interface';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  product: Product[] = [];

  formProduct: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: [0, [Validators.required, Validators.min(0)]],
    images: ['', Validators.required],
    stock: [0, [Validators.required, Validators.min(0)]],
    sizes: ['', Validators.required],
    gender: ['', Validators.required],
    tags: ['', Validators.required],
  }); 

  genderOptions = genderOptions;
  sizeOptions = sizeOptions;
  tagOptions = tagOptions;

  constructor(private formBuilder: FormBuilder,
    private router: Router){}

    errorNoValido( campo: string ){

      return this.formProduct.controls[campo].errors && 
             this.formProduct.controls[campo].touched;
    }

    priceValido(){
    
      return this.formProduct?.controls['price']?.touched &&
             this.formProduct?.controls['price']?.value <=0;
     }

     stockValido(){
    
      return this.formProduct?.controls['stock']?.touched &&
             this.formProduct?.controls['stock']?.value <=0;
     }


  onSubmit() {
    // Aquí puedes realizar la lógica para agregar el producto
    // por ejemplo, enviar los datos al servidor o almacenarlos en un arreglo local.
    console.log(this.formProduct.value);
    // Limpia el formulario después de enviar los datos
    this.formProduct.reset();
   }
}