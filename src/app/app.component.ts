import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';
import { CaptionItem } from './caption-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  count: number;
  imgSrc = './assets/angular.png';

  // public originalMessageList: string[] = [
  //   'Welcome to front-end development with Angular',
  //   'They say don’t try this at home… so I went to my friend’s home!',
  //   'My bed is a magical place I suddenly remember everything I had to do.',
  //   'Friday, my second favorite F word.',
  //   'People say nothing is impossible, but I do nothing every day.',
  //   'I don’t care what people think of me. At least Mosquitos find me attractive!',
  //   'Stomach: I will now demonstrate a blue whale’s mating call.',
  //   'Sunset serenity - nature’s masterpiece painted in hues of gold and lavender.',
  //   'Lost in the labyrinth - an enchanting journey through the heart of mystery.',
  //   'Love knows no boundaries - a tender moment that transcends time and space.',
  //   'Stepping into the unknown - embracing change with courage and curiosity.',
  //   'In the realm of dreams - where imagination weaves its magical tapestry.',
  //   'Euphoric rhythms and mesmerizing lights - a night of pure musical enchantment.',
  //   'Whispers of autumn - where the leaves dance gracefully in the arms of the wind.',
  //   'Captivated by the cosmos - stargazing into the infinite wonders of the universe.',
  //   'Journey to the past - discovering the secrets and stories etched in ancient ruins.',
  //   'Windows to the soul - the captivating gaze of a creature from the wild.',
  //   'Taming the waves - a thrilling ride amidst the ocean’s untamed beauty.',
  //   'Burst of colors - a vibrant celebration of culture and diversity.',
  //   'Rays of hope - when the sun breaks through the clouds, illuminating a brighter tomorrow.',
  // ];

  //public messageList: string[] = [];

  captionList: CaptionItem[] = [
    {
      id: 1,
      message: 'Welcome to front-end development with Angular',
      icon: './assets/icon/pngwing.com.png'
    },
    {
      id: 2,
      message: 'They say don’t try this at home… so I went to my friend’s home!',
      icon: './assets/icon/pngwing.com (1).png'
    },
    {
      id: 3,
      message: 'My bed is a magical place I suddenly remember everything I had to do.',
      icon: './assets/icon/pngwing.com (2).png'
    },
    {
      id: 4,
      message: 'Friday, my second favorite F word.',
      icon: './assets/icon/pngwing.com (3).png'
    },
    {
      id: 5,
      message: 'People say nothing is impossible, but I do nothing every day.',
      icon: './assets/icon/pngwing.com (4).png'
    },
  ];

  usedCaptionList: CaptionItem[] = [];

  constructor() {
    this.title = this.randomCaption();
    this.count = 0;
  }

  randomCaption() {
    if (this.captionList.length > 1) {
      let randomIndex;
      let newTitle;

      randomIndex = this.getRandomMes(this.captionList.length);
      newTitle = this.captionList[randomIndex];
      this.imgSrc = this.captionList[randomIndex].icon;

      while (newTitle.message === this.title) {
        randomIndex = this.getRandomMes(this.captionList.length);
        newTitle = this.captionList[randomIndex];
        this.imgSrc = this.captionList[randomIndex].icon;
      }

      this.count++;
      return newTitle.message;

    } else {

      this.count = 0;
      return '';

    }
  }

  randomCaptionAndDEL() {
    if (this.captionList.length > 0) {

      const randomIndex = this.getRandomMes(this.captionList.length);
      const temp = this.captionList[randomIndex];
      this.imgSrc = this.captionList[randomIndex].icon;
      this.count++;
      this.captionList.splice(randomIndex, 1);
      return temp.message;

    } else {

      this.count = 0;
      return '';

    }
  }

  handleClickButton() {
    this.title = this.randomCaption();
  }

  handleClickButtonDEL() {
    this.title = this.randomCaptionAndDEL();
  }

  private getRandomMes(max: number) {
    return Math.floor(Math.random() * max);
  }
}