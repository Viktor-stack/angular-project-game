import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalsService} from '../classes/modals.service';
import {GameService} from '../../shared/services/game.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, AfterViewInit {
  @Output('open') isOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('modal') modalRef: any;

  constructor(public gameService: GameService) {
  }

  ngOnInit(): void {
  }

  close() {
    ModalsService.modelClose();
  }

  ngAfterViewInit(): void {
    ModalsService.initModal(this.modalRef);
  }
}
