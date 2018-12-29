import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { environment } from '@env/environment';
import { UserModule } from '@app/user/user.module';
import { ProductModule } from '@app/product';
import { CartModule } from '@app/cart';
import { AuthModule } from '@app/auth';
import { HomeModule } from '@app/home';
import { LayoutModule } from '@app/layout';
import { CategoryModule } from '@app/category';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppReducer } from './app.reducer';

import { fakeBackendProvider } from '@shared/interceptors/fake-backend.interceptor';
import { responseProvider } from '@shared/interceptors/response.interceptor';
import { tokenProvider } from '@shared/interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ang-nan'}),
    HttpClientModule,
    FontAwesomeModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([]),
    TabsModule.forRoot(),
    AppRoutingModule,
    UserModule,
    ProductModule,
    CartModule,
    AuthModule,
    HomeModule,
    LayoutModule,
    CategoryModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    tokenProvider,
    responseProvider,
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
