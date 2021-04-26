import {ElementRef, Injectable} from '@angular/core';
import {ModalsService} from '../../util/classes/modals.service';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private clickId = 0;
  public computer = 0;
  public user = 0;
  public i = 0;
  // @ts-ignore
  subInterval: NodeJS.Timeout;
  private result: number[] = [];

  constructor() {
  }

  getRandomNumber(): number {
    let i = 0;
    let num = 0;
    if (i <= 20) {
      let random = Math.floor(Math.random() * 100);
      let e = this.result.find(number => number == random);
      if (e) {
        random = Math.floor(Math.random() * 100);
        i--;
      }
      this.result.push(random);
      i++;
      num = random;
    }
    return num;
  }

  setClickId(id: number) {
    this.clickId = id;
  }

  run(idRef: ElementRef, time: number) {
    this.subInterval = setInterval(() => {
      if (this.user <= 9 && this.computer <= 9) {
        this.i = this.getRandomNumber();
        console.log(this.i);
        let el = idRef.nativeElement.childNodes.item(this.i);
        el.childNodes.item(0).classList.add('active');
        setTimeout(() => {
          el.childNodes.item(0).classList.remove('active');
          el.childNodes.item(0).classList.add('active-red');
          if (this.i === this.clickId) {
            el.childNodes.item(0).classList.remove('active-red');
            this.user++;
          } else {
            this.computer++;
          }
        }, time / 2);
      } else {
        clearInterval(this.subInterval);
        ModalsService.modalOpen();
        console.log(this.result);
      }
    }, time);
  }
}
