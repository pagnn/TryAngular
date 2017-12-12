import { Component, OnInit ,OnDestroy } from '@angular/core';
import { VideoItem } from '../videos/videos';
import {VideoService} from '../videos/videos.service';
@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers:[VideoService]
})
export class VideoListComponent implements OnInit,OnDestroy{
	private req:any;
	title='VideoList'
	videoList:[VideoItem];
	date;
  constructor(private _video:VideoService) { }

  ngOnInit() {
  	this.date=new Date()
  	this.req=this._video.list().subscribe(data=>{
  		this.videoList=data;
  	})
  }
  ngOnDestroy(){
  	this.req.unsubscribe()
  }
}
