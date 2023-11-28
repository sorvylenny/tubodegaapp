import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/store/interfaces/store.interface';
import { ProductService } from 'src/app/store/services/product.service';
import { RegisterResponse } from '../../../auth/interface/registerResponse';
import Swal from 'sweetalert2';
import { genderOptions } from '../../../store/interfaces/store.interface';

@Component({
  selector: 'app-model-product',
  templateUrl: './model-product.component.html',
  styleUrls: ['./model-product.component.css']
})
export class ModelProductComponent {
  formProduct: FormGroup;
  genderOptions = genderOptions;
  titleAction: string = "Agregar";
  buttonAction: string = "Guardar";
  selectedImage: File | string | null = null;

  constructor(
    private modalsActual: MatDialogRef<ModelProductComponent>,
    @Inject(MAT_DIALOG_DATA) public dateProduct: Product,
    private fb: FormBuilder,
    private productService: ProductService
  ) {
    this.formProduct = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      stock: ['', Validators.required],
      gender: ['', Validators.required],
      images: ['']
    });
    if (this.dateProduct!=null){
      this.titleAction="Editar";
      this.buttonAction='Modificar';
    }
  
  }

  ngOnInit(): void {
    if (this.dateProduct != null) {
      this.formProduct.patchValue({
        title: this.dateProduct.title,
        price: this.dateProduct.price,
        description: this.dateProduct.description,
        stock: this.dateProduct.stock,
        gender: this.dateProduct.gender,
        image: this.dateProduct.images
      });
  
      if (this.isImageUrl(this.dateProduct.images ?? '')) {
        this.selectedImage = null; // Imagen ya existe, no necesita ser cargada nuevamente
      }
    }
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Realizar cualquier lógica adicional necesaria
      this.formProduct.get('images')?.setValue(file);
    }
  }
  
  isImageUrl(value: string): boolean {
    return value.startsWith('http') && (value.endsWith('.jpg') || value.endsWith('.png'));}
  

  saveEdit_Product() {
    const product: Product = {
      id: this.dateProduct == null ? '' : this.dateProduct.id,
      title: this.formProduct.value.title,
      price: this.formProduct.value.price,
      description: this.formProduct.value.description,
      stock: this.formProduct.value.stock,
      gender: this.formProduct.value.gender,
      images: this.formProduct.value.images
    };
  
    if (this.dateProduct == null) {
      this.productService.newProduct(product).subscribe(
        (res: RegisterResponse) => {
          if (res && res.success) {
            Swal.fire({
              icon: 'success',
              title: '¡Registro exitoso!',
              text: 'Producto registrado exitosamente.'
            });
            this.modalsActual.close("true");
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un problema durante el registro del producto.'
            });
          }
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema durante la solicitud de registro del producto.'
          });
        }
      );
    } else {
      this.productService.editProduct(product.id).subscribe(
        (res: Product) => {
          if (res) {
            Swal.fire({
              icon: 'success',
              title: '¡Actualización exitosa!',
              text: 'Producto actualizado exitosamente.'
            });
            this.modalsActual.close("true");
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un problema durante la actualización del producto.'
            });
          }
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema durante la solicitud de actualización del producto.'
          });
        }
      );
    }
  }
  
  
}
