import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photos/photo/photo.component";

@NgModule({
    declarations: [
        PhotoComponent
    ],
    exports: [
        PhotoComponent
    ]
})
export class PhotoModule {}