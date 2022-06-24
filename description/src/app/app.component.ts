import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _utilsService: UtilsService) { }
  title = 'description';
  baseUri = this._utilsService.baseUri;
}
