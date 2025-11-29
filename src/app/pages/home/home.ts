import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
