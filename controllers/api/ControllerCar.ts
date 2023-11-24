import { Request, Response } from 'express';
import { IRestController } from '../../interfaces/IRest';
import ServiceCar from '../../services/ServiceCar';

class ControllerCar implements IRestController {
  constructor() {}

  async list(req: Request, res: Response) {
    try {
      const response = await ServiceCar.list();
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      res.status(500).json({
        data: error,
      });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const car = await ServiceCar.show(id);

      if (!car) {
        res.status(404).json({
          data: 'Car not found',
        });
        return;
      }

      res.status(200).json({
        data: car,
      });
    } catch (error) {
      res.status(500).json({
        data: error,
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const payload = req.body;
      const carId = await ServiceCar.create(payload);

      res.status(201).json({
        data: {
          carid: carId,
        },
      });
    } catch (error) {
      res.status(500).json({
        data: error,
      });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const success = await ServiceCar.remove(id);

      if (!success) {
        res.status(404).json({
          data: 'Car not found',
        });
        return;
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({
        data: error,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const payload = req.body;
      const success = await ServiceCar.update(id, payload);

      if (!success) {
        res.status(404).json({
          data: 'Car not found',
        });
        return;
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({
        data: error,
      });
    }
  }
}

export default new ControllerCar();
