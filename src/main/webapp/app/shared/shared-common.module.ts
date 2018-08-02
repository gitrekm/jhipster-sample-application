import { NgModule } from '@angular/core';

import { DemoJhaiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DemoJhaiSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DemoJhaiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DemoJhaiSharedCommonModule {}
