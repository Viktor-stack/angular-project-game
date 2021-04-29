import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output, ViewChild
} from '@angular/core';
import {GameService} from '../../../shared/services/game.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


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
  forms: FormGroup;
  userCounter = 0;

  constructor(public gameService: GameService,) {
  }

  ngOnInit(): void {
    for (let i = 0; i <= 99; i++) {
      this.box[i] = i;
    }
    this.forms = new FormGroup({
      time: new FormControl(null, [Validators.required, Validators.min(800)])
    });
  }

  isGamer() {
    this.forms.disable();
    this.isTime = this.forms.value.time;
    this.gameService.isRun(this.idRef, this.isTime);
    this.forms.reset();
  }
}

