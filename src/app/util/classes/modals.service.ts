import {ElementRef} from '@angular/core';

export class ModalsService {
  private static el: ElementRef;


  static initModal(ref: ElementRef) {
    this.el = ref;
  }

  static modalOpen() {
    this.el.nativeElement.style.display = 'block';
  }

  static modelClose() {
    this.el.nativeElement.style.display = 'none';
  }
}

