import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-motivational-quotes',
  templateUrl: 'motivational-quotes.html'
})
export class MotivationalQuotesPage {
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no'
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'yes', //iOS only
    enableViewportScale : 'no', //iOS only
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
};

  Quotes = [
    {quote:"Nothing is impossible, the word itself says 'I’m possible'!", name:"Audrey Hepburn"},
    {quote:"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", name:"Maya Angelou"},
    {quote:"Whether you think you can or you think you can’t, you’re right.", name:"Henry Ford"},
    {quote:"Perfection is not attainable, but if we chase perfection we can catch excellence.", name:"Vince Lombardi"},
    {quote:"Life is 10% what happens to me and 90% of how I react to it.", name:"Charles Swindoll"},
    {quote:"If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.", name:"Oprah Winfrey"},
    {quote:"Remember no one can make you feel inferior without your consent.", name:"Eleanor Roosevelt"},
    {quote:"I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.", name:"Jimmy Dean"},
    {quote:"Believe you can and you’re halfway there.", name:"Theodore Rossevelt"},
    {quote:"To handle yourself, use your head; to handle others, use your heart.", name:"Eleanor Roosevelt"},
    {quote:"Too many of us are not living our dreams because we are living our fears.", name:"Les Brown"},
    {quote:"Do or do not. There is no try.", name:"Yoda"},
    {quote:"Whatever the mind of man can conceive and believe, it can achieve.", name:"Napoleon Hill"},
    {quote:"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, dream, discover.", name:"Mark Twain"},
    {quote:"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", name:"Michael Jordan"},
    {quote:"I am not a product of my circumstances. I am a product of my decisions.", name:"Stephen Covey"},
    {quote:"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", name:"Henry Ford"},
    {quote:"The most common way people give up their power is by thinking they don’t have any.", name:"Alice Walker"},
    {quote:"The most difficult thing is the decision to act, the rest is merely tenacity.", name:"Amelia Earhart"},
    {quote:"It is during our darkest moments that we must focus to see the light.", name:"Aristotle onassis"},
    {quote:"Don’t judge each day by the harvest you reap but by the seeds that you plant.", name:"Robert Louis Stevenson"},
    {quote:"The only way to do great work is to love what you do.", name:"Steve Jobs"},
    {quote:"Change your thoughts and you change your world.", name:"Norman Vincent Peale"},
    {quote:"The question isn’t who is going to let me; it’s who is going to stop me.", name:"Ayn Rand"},
    {quote:"If you hear a voice within you say \"you cannot paint\" then by all means paint and that voice will be silenced.", name:"Vincent Van Gogh"},
    {quote:"Build your own dreams, or someone else will hire you to build theirs.", name:"Farrah Gray"},
    {quote:"Remember that not getting what you want is sometimes a wonderful stroke of luck.", name:"Dalai Lama"},
    {quote:"You can’t use up creativity. The more you use, the more you have.", name:"Maya Angelou"},
    {quote:"I have learned over the years that when one’s mind is made up, this diminishes fear.", name:"Rosa Parks"},
    {quote:"I would rather die of passion than of boredom.", name:"Vincent van Gogh"},
    {quote:"A truly rich man is one whose children run into his arms when his hands are empty.", name:"Unknown"},
    {quote:"A person who never made a mistake never tried anything new.", name:"Albert Einstein"},
    {quote:"What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.", name:"Bob Dylan"},
    {quote:"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do", name:"Leonardo da Vinci"},
    {quote:"If you want to lift yourself up, lift up someone else.", name:"Booker T. Washington"},
    {quote:"Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.", name:"Jamie Paolinetti"},
    {quote:"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.", name:"Sheryl Sandberg"},
    {quote:"Certain things catch your eye, but pursue only those that capture the heart.", name:"Ancient Indian Proverb"},
    {quote:"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", name:"Helen Keller"},
    {quote:"Everything has beauty, but not everyone can see.", name:"Confucius"},
    {quote:"How wonderful it is that nobody need wait a single moment before starting to improve the world.", name:"Anne Frank"},
    {quote:"When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down “happy”. They told me I didn’t understand the assignment, and I told them they didn’t understand life.", name:"John Lennon"},
    {quote:"The only person you are destined to become is the person you decide to be.", name:"Ralph Waldo Emerson"},
    {quote:"We can’t help everyone, but everyone can help someone.", name:"Ronald Reagan"},
    {quote:"Everything you’ve ever wanted is on the other side of fear.", name:"George Addair"},
    {quote:"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", name:"Plato"},
    {quote:"Nothing will work unless you do.", name:"Maya Angelou"},
    {quote:"I alone cannot change the world, but I can cast a stone across the water to create many ripples.", name:"Mother Teresa"},
    {quote:"What we achieve inwardly will change outer reality.", name:"Plutarch"}
  ];

  quoteText: String;
  quoteName: String;
  /*constructor(public navCtrl: NavController) {
  }*/

  constructor(private theInAppBrowser: InAppBrowser) {
   this.randomQuote();
  }

  randomQuote(){
    let quote = this.Quotes[Math.floor(Math.random()*this.Quotes.length)];
    this.quoteText = quote.quote;
    this.quoteName = quote.name;
  }

  public openWithInAppBrowser(url : string, ){
    let target = "_blank";
    this.theInAppBrowser.create(url,target,this.options);
  }
}
