import { Component, OnInit,OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoItem } from '../videos/videos';
import { VideoService } from '../videos/videos.service';

@Component({
  selector: 'search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers:[VideoService]
})
export class SearchDetailComponent implements OnInit,OnDestroy {
	private routeSub:any;
  private req:any
	query:string;
  videoList:[any];
  date;
  constructor(private route:ActivatedRoute,private _video:VideoService) { }

  ngOnInit() {
    this.date=new Date()
  	this.routeSub=this.route.params.subscribe(params=>{
  		this.query=params['q']
      this.req=this._video.search(this.query).subscribe(data=>{
      this.videoList=data as [VideoItem]
    })
  	})

  }
  ngOnDestroy(){
  	this.routeSub.unsubscribe()
  }
  getEmbedUrl(item){
    return 'http://player.youku.com/embed/'+item.embed;
  }

}
