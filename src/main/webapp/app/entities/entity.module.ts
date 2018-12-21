import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SampleappProfileModule } from './profile/profile.module';
import { SampleappZipFlixUserModule } from './zip-flix-user/zip-flix-user.module';
import { SampleappVideoModule } from './video/video.module';
import { SampleappTagModule } from './tag/tag.module';
import { SampleappGenreModule } from './genre/genre.module';
import { SampleappCommentModule } from './comment/comment.module';
import { SampleappRatingModule } from './rating/rating.module';
import { SampleappRecommendedVideosModule } from './recommended-videos/recommended-videos.module';
import { SampleappSearchModule } from './search/search.module';
import { SampleappSearchResultModule } from './search-result/search-result.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        SampleappProfileModule,
        SampleappZipFlixUserModule,
        SampleappVideoModule,
        SampleappTagModule,
        SampleappGenreModule,
        SampleappCommentModule,
        SampleappRatingModule,
        SampleappRecommendedVideosModule,
        SampleappSearchModule,
        SampleappSearchResultModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleappEntityModule {}
