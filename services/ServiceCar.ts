import { TParams } from '../interfaces/IRest';
import Car, { ICar } from '../models/Car';

class ServiceCar {
  constructor() {}

  async list(params?: TParams) {
    try {
      const response = await Car.list();
      return response;
    } catch (error) {
      return error;
    }
  }

  async show(id: string) {
    try {
      const car = await Car.show(id);
      return car;
    } catch (error) {
      return error;
    }
  }

  async create(payload: ICar) {
    try {
      const carId = await Car.create(payload);
      return carId;
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      const success = await Car.remove(id);
      return success;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, payload: ICar) {
    try {
      const success = await Car.update(id, payload);
      return success;
    } catch (error) {
      return error;
    }
  }
}

export default new ServiceCar();
