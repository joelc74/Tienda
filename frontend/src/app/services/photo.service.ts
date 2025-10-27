import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() {}

  async takePhoto(): Promise<Photo> {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });
      return photo;
    } catch (error) {
      console.error('❌ Error al tomar la foto:', error);
      throw error;
    }
  }

  async pickImage(): Promise<Photo> {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos
      });
      return photo;
    } catch (error) {
      console.error('❌ Error al seleccionar la imagen:', error);
      throw error;
    }
  }
}
