import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
/*	searchLocation='NewPort Beach'*/
  searchQuery:string;
  @Input()
  passedquery:string;
  constructor(private router:Router) { }


  ngOnInit() {
    this.searchQuery=this.passedquery
  }
  submitSearch(event,formdata){
  	let searchedquery=formdata.value['q']
  	if(searchedquery){
  		this.router.navigate(['/search',{q:searchedquery}])
  	}
  }
/*  searchQueryChange(event){
  	console.log(event)
  	this.searchLocation='Carlifornia'
  }*/
}
