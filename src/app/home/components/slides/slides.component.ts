import { Component, OnInit } from '@angular/core';
import { SiteService } from '@shared/services';
import { environment } from '@env/environment';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {
  slides: any = [];
  sliderOptions: any = {};
  // sliderOptions: NguCarouselConfig;

  constructor(private siteService: SiteService) {}

  ngOnInit() {
    this.sliderOptions = {
      items: 1,
      margin: 10,
      navText: [
        '<img src="../../../../assets/img/prev.svg" alt="" width="50">',
        '<img src="../../../../assets/img/next.svg" alt="" width="50">'
      ],
      dots: false,
      responsiveClass: true,
      nav: true,
      autoHeight: true
    };
    // this.sliderOptions = {
    //   grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    //   slide: 1,
    //   speed: 500,
    //   point: {
    //     visible: true
    //   },
    //   touch: true,
    //   velocity: 0,
    //   loop: true,
    //   interval: { timing: 5000 },
    //   animation: 'lazy',
    //   custom: 'banner',
    //   easing: 'cubic-bezier(0, 0, 0.2, 1)'
    // };

    /*this.slides = [
      {
        image: 'https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/matheus-ferrero-334418-unsplash.jpg',
        description: `<div class="container-fluid h-100 py-5">
            <div class="row align-items-center h-100">
              <div class="col-lg-8 col-xl-6 mx-auto text-white text-center">
                <h5 class="text-uppercase text-white font-weight-light mb-4 letter-spacing-5"> Just arrived</h5>
                <h1 class="mb-5 display-2 font-weight-bold text-serif">Denim Jackets</h1>
                <p class="lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p> <a href="category.html" class="btn btn-light">View collection</a></p>
              </div>
            </div>
          </div>`,
        caption: 'Denim Jackets',
        url: ''
      },
      {
        image: 'https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/ian-dooley-347942-unsplash.jpg',
        description: `<div class="container-fluid h-100">
            <div class="row align-items-center h-100">
              <div class="col-lg-8 col-xl-6 mx-auto text-white text-center overlay-content">
                <h1 class="mb-4 display-2 text-uppercase font-weight-bold">Skeleton Tees</h1>
                <p class="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p> <a href="category.html" class="btn btn-light">Start shopping</a></p>
              </div>
            </div>
          </div>`,
        caption: 'Skeleton Tees',
        url: ''
      },
      {
        image: 'https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/haley-phelps-62815-unsplash.jpg',
        description: `<div class="container-fluid h-100">
            <div class="row align-items-center h-100">
              <div class="col-lg-8 col-xl-6 mx-auto text-white text-center">
                <h5 class="text-uppercase font-weight-light mb-4 letter-spacing-5"> Our bestseller</h5>
                <h1 class="mb-5 display-1 font-weight-bold text-serif">Skinny Jeans</h1>
                <p> <a href="category.html" class="btn btn-light">View collection</a></p>
              </div>
            </div>
          </div>`,
        caption: 'Skinny Jeans',
        url: ''
      },
    ];*/

    this.getSlides();
  }

  getSlides() {
    this.siteService.getSlides().subscribe(result => {
      this.slides = result.map(slide => {
        slide.image = `${environment.CDN_URL}${slide.image}`;
        return slide;
      });
    });
  }
}
