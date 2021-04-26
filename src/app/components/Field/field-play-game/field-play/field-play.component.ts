import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {GameService} from '../../../../shared/services/game.service';

@Component({
  selector: 'app-field-play',
  templateUrl: './field-play.component.html',
  styleUrls: ['./field-play.component.scss']
})
export class FieldPlayComponent implements OnInit, AfterViewInit {
  @Input('data-number') number: any;
  @ViewChild('element') element: any;

  constructor(private gameService: GameService) {
  }


  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
  }

  addedColor() {
    if (this.gameService.i == this.number) {
      this.gameService.setClickId(this.number);
      this.element.nativeElement.classList.add('green');
    }
  }

}
