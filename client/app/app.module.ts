import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
    imports: [ 
        BrowserModule, 
        FotoModule, 
        HttpModule, 
        PainelModule, 
        RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {


}

    
