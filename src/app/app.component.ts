import { Component, OnInit,OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  query:string;
  private routeSub;
  constructor(private router:ActivatedRoute){

  }
  ngOnInit(){
  	this.routeSub=this.router.params.subscribe(params=>{
  		let query=params['q']
  		if(query){
  			this.query=query
  		}

  	})
  }
  ngOnDestroy(){
  	this.routeSub.unsubscribe()












































































































































































































































  }
}
