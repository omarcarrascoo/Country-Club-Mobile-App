export interface IAuthState {
  auth: {
    ID: string
    enableBiometric: boolean;
    authenticated: boolean;
    Correo_Electronico: string | any;
    password: string | null;
    Authorization: string;
    Rol: string
    Numero_de_membresia: string
  };
  order:{
    Detalle_de_su_orden:any,
    Comentarios:string,
    Creacion:string,
    Metodo_de_pago:string,
    Precio_Total: any,
    Cantidad: number,
    Propina: string,
    Status: string,
    Direccion: string,
    OpcionEntrega: string
  },
  user: {
    Socios: any,
    ID: string,
    Direccion_de_residencia: string,
    personalId: string,
    token: string,
    email: string,
    Registro_Hijos:any,
    Fecha_Venciminto_Membresia: string,
    Nombre_Socio:any,
    Conyugue: any,
    Foto_Socio: string,
    QR_Membresia: string,
    Codigo_de_Membresia: string,
    Credito_Asignado: any,
    Tipos_de_Membresias: any,
    Fecha_de_nacimiento:string,
    correo: string,
    Estado_Membresia: string,
    Limite_de_Credito: any,
    Saldo_a_pagar_Creditos: any,
    Intereses:any,
    Deportes:any
    Foto_Membresia: string
  }
  token:{
    Authorization: string
  }
  loading: boolean;
  error: {
    status: boolean;
    message: string;
  };
  
}

export interface IAction {
  type: string;
  payload: any;
}
