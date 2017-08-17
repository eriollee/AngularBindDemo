import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http , Headers} from '@angular/http';
import 'rxjs/Rx'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  productsAsync:Observable<any>;

  dataSource:Observable<any>;

  products:Array<any> = [];

  constructor(private http:Http) { 
  	let myHeaders:Headers = new Headers();
  	myHeaders.append("Authorization","Basic 123456");

  	this.dataSource = this.http.get('/api/products',{headers:myHeaders}).map((res)=>res.json())
  	this.productsAsync = this.http.get('/api/products',{headers:myHeaders}).map((res)=>res.json())
  }

  ngOnInit() {
  	this.dataSource.subscribe(
  		(data)=> this.products = data
  	);
  }

}
