import moment from "moment";
import UserDomicilio from "./user-domicilio.model";

export default class User {
  id?: number;
  name?: string;
  fecha_nacimiento?: string;
  edad?: number;
  email?: string;
  domicilio?: UserDomicilio;


  fromJson(json: any) {
    this.id = json.id;
    this.name = json.name;
    this.fecha_nacimiento = moment(json.fecha_nacimiento).format('LL');
    this.edad = json.edad;
    this.email = json.email;
    this.domicilio = new UserDomicilio().fromJson(json.domicilio);

    return this;
  }
}
