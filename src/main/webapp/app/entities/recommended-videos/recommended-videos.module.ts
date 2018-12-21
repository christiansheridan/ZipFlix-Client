import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SampleappSharedModule } from 'app/shared';
import {
    RecommendedVideosComponent,
    RecommendedVideosDetailComponent,
    RecommendedVideosUpdateComponent,
    RecommendedVideosDeletePopupComponent,
    RecommendedVideosDeleteDialogComponent,
    recommendedVideosRoute,
    recommendedVideosPopupRoute
} from './';

const ENTITY_STATES = [...recommendedVideosRoute, ...recommendedVideosPopupRoute];

@NgModule({
    imports: [SampleappSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RecommendedVideosComponent,
        RecommendedVideosDetailComponent,
        RecommendedVideosUpdateComponent,
        RecommendedVideosDeleteDialogComponent,
        RecommendedVideosDeletePopupComponent
    ],
    entryComponents: [
        RecommendedVideosComponent,
        RecommendedVideosUpdateComponent,
        RecommendedVideosDeleteDialogComponent,
        RecommendedVideosDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleappRecommendedVideosModule {}
