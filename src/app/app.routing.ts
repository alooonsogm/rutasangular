import { HomeComponent } from "./components/home.component/home.component";
import { CineComponent } from "./components/cine.component/cine.component";
import { MusicaComponent } from "./components/musica.component/musica.component";
//Necesitamos una serie de modulos que ya se encuentan dentro de angular/router
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { NotfoundComponent } from "./components/notfound.component/notfound.component";
import { NumerodobleComponent } from "./components/numerodoble.component/numerodoble.component";

//Necesitamos un array con las rutas, dicho array sera de tipo Routes.
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "cine", component: CineComponent },
    { path: "musica", component: MusicaComponent },
    { path: "numerodoble", component: NumerodobleComponent },
    { path: "**", component: NotfoundComponent },
]

//Desde esta clase debemos exportar nuestro array de rutas como provider
export const appRoutingProvider: any[] = [];
//Las propias ruta a exportar
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);