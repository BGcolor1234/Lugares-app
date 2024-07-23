import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonButton, IonApp, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonModal } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { airplane, addCircle } from 'ionicons/icons';
import { ModalInsertarComponent } from 'src/app/components/modal-insertar/modal-insertar.component';
import { LugaresService } from 'src/app/services/lugares-services/lugares-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { Lugar } from 'src/app/components/models/lugar.interface';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
  standalone: true,
  imports: [ModalInsertarComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonButtons, IonButton, IonApp, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonModal]
})
export class LugaresPage implements OnInit {
  isModalOpen: boolean = false;
  lugares: Lugar[] = [];

  constructor(private lugaresService: LugaresService, private router: Router) { 
    addIcons({ airplane, addCircle });

    // Suscribirse a eventos de navegación para actualizar la lista al volver a la página
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.lugares = this.lugaresService.getLugares();
    });
  }

  ngOnInit() {
    this.lugares = this.lugaresService.getLugares();
  }

  onWillDismiss(event: any) {
    this.isModalOpen = false;
    this.lugares = this.lugaresService.getLugares(); // Actualizar la lista cuando se cierra el modal
  }

  goToDetails(lugar: Lugar) {
    this.router.navigate(['/detalles'], { state: { lugar } });
  }
}
