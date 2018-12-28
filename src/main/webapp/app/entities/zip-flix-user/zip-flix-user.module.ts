import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SampleappSharedModule } from 'app/shared';
import {
    ZipFlixUserComponent,
    ZipFlixUserDetailComponent,
    ZipFlixUserUpdateComponent,
    ZipFlixUserDeletePopupComponent,
    ZipFlixUserDeleteDialogComponent,
    zipFlixUserRoute,
    zipFlixUserPopupRoute
} from './';

const ENTITY_STATES = [...zipFlixUserRoute, ...zipFlixUserPopupRoute];

@NgModule({
    imports: [SampleappSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ZipFlixUserComponent,
        ZipFlixUserDetailComponent,
        ZipFlixUserUpdateComponent,
        ZipFlixUserDeleteDialogComponent,
        ZipFlixUserDeletePopupComponent
    ],
    entryComponents: [ZipFlixUserComponent, ZipFlixUserUpdateComponent, ZipFlixUserDeleteDialogComponent, ZipFlixUserDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleappZipFlixUserModule {}
