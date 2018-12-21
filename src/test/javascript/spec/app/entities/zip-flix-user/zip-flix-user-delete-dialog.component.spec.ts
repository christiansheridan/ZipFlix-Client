/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { SampleappTestModule } from '../../../test.module';
import { ZipFlixUserDeleteDialogComponent } from 'app/entities/zip-flix-user/zip-flix-user-delete-dialog.component';
import { ZipFlixUserService } from 'app/entities/zip-flix-user/zip-flix-user.service';

describe('Component Tests', () => {
    describe('ZipFlixUser Management Delete Component', () => {
        let comp: ZipFlixUserDeleteDialogComponent;
        let fixture: ComponentFixture<ZipFlixUserDeleteDialogComponent>;
        let service: ZipFlixUserService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SampleappTestModule],
                declarations: [ZipFlixUserDeleteDialogComponent]
            })
                .overrideTemplate(ZipFlixUserDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ZipFlixUserDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ZipFlixUserService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
