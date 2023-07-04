import { Component } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  /* carrucel =[
    {
    name: 'Nike',
    img:'https://assets.turbologo.ru/blog/ru/2021/06/03041624/nike-logo-1995.png'
    },
    {
    name: 'Adidas',
    img:'https://assets.turbologo.ru/blog/ru/2019/12/18163325/3-poloski-adidas-logo.png'
    },
    {
    name: 'Lacoste',
    img:'https://assets.turbologo.ru/blog/ru/2021/11/12082032/Lacoste-logo.png'
    },
    {
    name: 'Levis',
    img:'https://assets.turbologo.ru/blog/ru/2021/11/12082225/Levis_logo.png'
    },
    {
    name: 'Under Armour',
    img:'https://assets.turbologo.ru/blog/ru/2021/11/12082631/Under-Armour-logo.png'
    },
    {
    name: 'Fendi',
    img:'https://assets.turbologo.ru/blog/ru/2021/11/12082825/Fendi_logo.png'
    },
    {
    name: 'Chanel',
    img:'https://assets.turbologo.ru/blog/ru/2021/11/12081137/Chanel_logo.png'
    }
  ] */

  images = [
    {path: 'https://assets.turbologo.ru/blog/ru/2021/11/12081137/Chanel_logo.png'},
    {path: 'https://assets.turbologo.ru/blog/ru/2021/06/03041624/nike-logo-1995.png'},
    {path: 'https://assets.turbologo.ru/blog/ru/2019/12/18163325/3-poloski-adidas-logo.png'},
    {path: 'https://assets.turbologo.ru/blog/ru/2021/11/12082032/Lacoste-logo.png'},
    {path: 'https://assets.turbologo.ru/blog/ru/2021/11/12082225/Levis_logo.png'},
    {path: 'https://assets.turbologo.ru/blog/ru/2021/11/12082631/Under-Armour-logo.png'},
    {path: 'https://assets.turbologo.ru/blog/ru/2021/11/12082825/Fendi_logo.png'},
    {path: 'https://assets.turbologo.ru/blog/ru/2021/11/12081137/Chanel_logo.png'},
    {path: 'https://www.logogenio.es/images/articles/10-best-fashion-logos1.jpg'},
    {path: 'https://www.logogenio.es/images/articles/10-best-fashion-logos2.jpg'}
  ];


  handleCarouselEvents(event:any) {
		console.log(event);
	}
}
