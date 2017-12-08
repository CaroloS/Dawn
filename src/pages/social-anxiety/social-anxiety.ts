import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-social-anxiety',
  templateUrl: 'social-anxiety.html'
})
export class SocialAnxietyPage {

  channelId ='UCsT0YIqwnpJCM-mx7-gSA4Q';
	maxResults ='10';
	googleToken ='AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
	search:string='social anxiety';
	posts:any=[];


  constructor(public navCtrl: NavController, public http:Http) {

  	let url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' +  this.maxResults + '&key=' + this.googleToken;
      this.http.get(url).map(res=>res.json()).subscribe(data=> {this.posts=this.posts.concat(data.items);
      console.log(this.posts);
      })
  }
  
  }
  