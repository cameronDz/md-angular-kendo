import { TestBed } from '@angular/core/testing';

import { OverviewTextService } from './overview-text.service';

xdescribe('OverviewTextService', () => {
    let service: OverviewTextService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(OverviewTextService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
