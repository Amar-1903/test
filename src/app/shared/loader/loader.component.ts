import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() showHeader = true;
  @Input() showBody = true;
  @Input() showPaginator = true;
  @Input() variant: 'inbond' | 'dashboard' | 'default' = 'default';
}
