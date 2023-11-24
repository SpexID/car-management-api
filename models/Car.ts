import { IRestModel, TParams } from '../interfaces/IRest';
import database from '../config/database';

export interface ICar {
  carid: number;
  nama: string;
  sewa: number;
  ukuran: string;
  gambar: string;
}

class Car implements IRestModel<ICar> {
  constructor() {}
  async create(payload: ICar) {
    const [carId] = await database('car').insert(payload, 'carid');
    return carId as number;
  }
  
  async list(params?: TParams) {
    const data = await database.select('*').from('car');
    return data as ICar[];
  }
  async remove(id: string) {
    const result = await database('car').where('carid', id).del();
    return result > 0; 
  }
  
  async show(id: string) {
    const car = await database('car').where('carid', id).first();
    return car as ICar | undefined;
  }
  
  async update(id: string, payload: ICar) {
    const result = await database('car').where('carid', id).update(payload);
    return result > 0; 
  }
  
}

export default new Car();
