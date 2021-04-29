import {ElementRef, Injectable} from '@angular/core';
import {ModalsService} from '../../util/classes/modals.service';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private clickId = 0;
  public computer = 0;
  public user = 0;
  range = 99; // максимальное значение (1..1000000 включительно)
  count = 19; // длина масива
  public i = -1;
  // @ts-ignore
  subInterval: NodeJS.Timeout;
  // @ts-ignore
  subTimeout: NodeJS.Timeout;
  private result: number[] = [];
  private r = 1;
  private index = -1;


  constructor() {
  }

  generateArrayRandomNumber() {
    let m = {};
    let a = [];
    for (let i = 0; i < this.count; ++i) {
      let r = Math.floor(Math.random() * (this.range - i));
      a.push(((r in m) ? m[r] : r) + 1);
      let l = this.range - i - 1;
      m[r] = (l in m) ? m[l] : l;
    }
    return a;
  }


  makeRand() {
    if (this.index < 19) {
      this.index++;
      return this.i = this.result[this.index];
    }
  }


  setClickId(id: number) {
    this.clickId = id;
  }


  isRun(idRef: ElementRef, isTime: number) {
    if (this.r === 1) {
      this.run(idRef, isTime);
      this.result = this.generateArrayRandomNumber();
      this.r--;
    }
    this.i = this.makeRand();
    let el = idRef.nativeElement.childNodes.item(this.i);
    el.childNodes.item(0).classList.add('active');
    this.subTimeout = setTimeout(() => {
      if (this.i === this.clickId) {

        el.childNodes.item(0).classList.remove('active-red');
        this.user++;
        if (this.user === 10) {
          ModalsService.modalOpen();
          clearInterval(this.subInterval);
        }
      } else {
        el.childNodes.item(0).classList.remove('active');
        el.childNodes.item(0).classList.add('active-red');
        this.computer++;
        if (this.computer === 10) {
          ModalsService.modalOpen();
          clearInterval(this.subInterval);
        }
      }
    }, 617);
  }

  run(idRef: ElementRef, time: number) {
    this.subInterval = setInterval(() => {
      if (this.user < 10 && this.computer < 10) {
        this.isRun(idRef, time);
      } else {
        clearInterval(this.subInterval);
        console.log(this.result);
      }
    }, time);
  }


}
