/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SampleappTestModule } from '../../../test.module';
import { SearchResultDetailComponent } from 'app/entities/search-result/search-result-detail.component';
import { SearchResult } from 'app/shared/model/search-result.model';

describe('Component Tests', () => {
    describe('SearchResult Management Detail Component', () => {
        let comp: SearchResultDetailComponent;
        let fixture: ComponentFixture<SearchResultDetailComponent>;
        const route = ({ data: of({ searchResult: new SearchResult(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SampleappTestModule],
                declarations: [SearchResultDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(SearchResultDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SearchResultDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.searchResult).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
