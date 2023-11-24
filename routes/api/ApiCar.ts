import { Router } from 'express';
import ControllerCar from '../../controllers/api/ControllerCar';
import Auth from '../../middlewares/Auth';

class ApiCar {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  routes() {
    this.router.get('/', Auth.authorize, ControllerCar.list);
    this.router.get('/:id', Auth.authorize, ControllerCar.show);
    this.router.post('/', Auth.authorize, ControllerCar.create);
    this.router.put('/:id', Auth.authorize, ControllerCar.update);
    this.router.delete('/:id', Auth.authorize, ControllerCar.remove);

    return this.router;
  }
}

export default new ApiCar();
