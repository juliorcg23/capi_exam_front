export default class UserDomicilio {
  id?: number;
  domicilio?: string;
  numero_exterior?: number;
  colonia?: string;
  cp?: string;
  ciudad?: string;

  getFullDomicilio() {
    return `${this.domicilio} ${this.numero_exterior}, Col. ${this.colonia}. CP ${this.cp}. ${this.ciudad}`;
  }

  fromJson(json: any) {
    this.id = json.id;
    this.domicilio = json.domicilio;
    this.numero_exterior = json.numero_exterior;
    this.colonia = json.colonia;
    this.cp = json.cp;
    this.ciudad = json.ciudad;

    return this;
  }
}