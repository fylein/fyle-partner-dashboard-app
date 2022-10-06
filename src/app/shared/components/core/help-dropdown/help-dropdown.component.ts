import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RedirectLink } from 'src/app/core/models/enum/enum.model';
import { WindowService } from 'src/app/core/services/core/window.service';

@Component({
  selector: 'app-help-dropdown',
  templateUrl: './help-dropdown.component.html',
  styleUrls: ['./help-dropdown.component.scss']
})
export class HelpDropdownComponent implements OnInit {

  RedirectLink = RedirectLink;

  constructor(
    private messageService: MessageService,
    public windowService: WindowService
  ) { }

  copyToClipboard(): void {
    const selBox = document.createElement('textarea');
    selBox.value = 'support@fylehq.com';
    document.body.appendChild(selBox);
    selBox.select();
    selBox.click();
    document.execCommand('copy');

    this.messageService.add({
      severity: 'success',
      summary: 'Support Email copied to clipboard'
    });

    document.body.removeChild(selBox);
    event?.stopPropagation();
  }

  ngOnInit(): void {
  }

}
