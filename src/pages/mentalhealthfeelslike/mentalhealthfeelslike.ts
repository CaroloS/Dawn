import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {viewDebugError} from "@angular/core/src/view/errors";

@Component({
  selector: 'page-mentalhealthfeelslike',
  templateUrl: 'mentalhealthfeelslike.html'
})
export class MentalhealthfeelslikePage {

  Memes = [
    {img: "assets/img/NxLX5vUQacXXqSWykM9A_3.jpg"},
    {img: "assets/img/2QyaDTPRPukRP4SCi7em_5.jpg"},
    {img: "assets/img/KuqBwGN1TPSr6TYN4g4z_2.jpg"},
    {img: "assets/img/DUWeB8dgTSOqwd8M51jX_7.jpeg"},
    {img: "assets/img/X9SMH5tnSKyg9TbwQtQQ_1.jpg"},
    {img: "assets/img/BFlDFbRBe0B2pgOgZYfQ_6.jpg"},
    {img: "assets/img/mah2hAB8SGiMwow1zOSF_9.jpg"},
    {img: "assets/img/T8SicR6URjaLAr3gVk1g_10.jpg"},
    {img: "assets/img/PENiy5RQQYqrjUVecZcD_11.jpg"},
    {img: "assets/img/IKFo7sgSVG5jxrAI1das_14.jpeg"},
    {img: "assets/img/b5pxpdZfSqqqfHrf8S8t_12.jpg"},
    {img: "assets/img/DhIGBJ8R0mgH93QlOldg_15.jpeg"},
    {img: "assets/img/kWyGS92WQumQvj8uqZsm_13.jpg"},
    {img: "assets/img/sIJchlTTF2nlvceE45JS_16.jpg"}
  ]

  imageSource: String;

  constructor(public navCtrl: NavController) {
    this.randomMeme();
  }

  randomMeme() {
    let meme = this.Memes[Math.floor(Math.random() * this.Memes.length)];
    this.imageSource = meme.img;

  }
}
