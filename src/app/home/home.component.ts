import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
	private req:any;
	homeImageList:[any];
/*	homeImageList=[
		{image:'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg',
		 name:'video1',
		 slug:'/videos/item-1',
		},
		{image:'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg',
		 name:'video1',
		 slug:'/videos/item-2',
		},
		{image:'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg',
		 name:'video1',
		 slug:'/videos/item-3',
		}				
	]*/

  constructor(private router:Router,private http:Http) { }

  ngOnInit() {
  	this.req=this.http.get('assets/json/videos.json').subscribe(data =>{
  		this.homeImageList=data.json()

  	})
  }
  ngOnDestroy(){
  	this.req.unsubscribe()
  }

  }

