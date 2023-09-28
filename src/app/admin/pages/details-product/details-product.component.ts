import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ChatDialogComponent } from 'src/app/shared/chat-dialog/chat-dialog.component';
import { Product } from 'src/app/store/interfaces/store.interface';
import { ProductService } from 'src/app/store/services/product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  selectedProduct: Product | undefined ; 
 
  productos: Product[] = [];
  id: string = '';

  constructor(private route: ActivatedRoute, private productService: ProductService, private dialog: MatDialog,  private router: Router) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') || ''; // Asigna el ID a la variable
      this.productById(this.id); // Llama a productById con el ID
    });
  }
   
  selectedData(product: Product) {
      this.selectedProduct = product;
  }
  productById(id:string): void{
      this.productService.getProductById(id).subscribe(
        (product: Product) => {
          this.selectedProduct = product;
          console.log(product)
        },
        (error: any) => {
          console.error('Error al obtener el producto:', error);
        }
      );
 
  }

  Edit(){

  }
  Delete(){
    const dialog = this.dialog.open(ChatDialogComponent, {
      width:'250px',
      data: {message: '¿Seguro de que deseas Eliminar el producto?'}
      });
      dialog.afterClosed().subscribe(
         (result)=> {
           if(result) {
             this.productService.getDelete(this.id!)
                .subscribe( product => {
                  this.router.navigate(['/product']);
                });
            }
         }
      
       ) 
    }
  }
