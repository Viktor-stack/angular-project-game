import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output, ViewChild
} from '@angular/core';
import {GameService} from '../../../shared/services/game.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-field-play-game',
  templateUrl: './field-play-game.component.html',
  styleUrls: ['./field-play-game.component.scss']
})
export class FieldPlayGameComponent implements OnInit {
  box = [] as any;
  @Output('isGame') isGame: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('idTest') idRef: ElementRef | any;
  isTime = 0;
  time = new FormControl(null, [Validators.required]);

  constructor(public gameService: GameService,) {
  }

  ngOnInit(): void {
    for (let i = 0; i <= 99; i++) {
      this.box[i] = i;
    }
  }

  isGamer() {
    this.isTime = this.time.value;
    this.gameService.run(this.idRef, this.isTime);
    this.time.reset();
  }

}

