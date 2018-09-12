import { Component, Input } from "@angular/core";

@Component({
    selector: 'pb-photo',
    templateUrl: './photo.component.html'
})
export class PhotoComponent {
    
    @Input() url = '';
    @Input() description = '';
}