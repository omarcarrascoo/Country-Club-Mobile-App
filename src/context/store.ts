import { IAuthState } from './interface';

const initialState: any = {
  auth: {
    enableBiometric: true,
    authenticated: false,
    Correo_Electronico: '',
    // email: null,
    // Authorization: '',
    Rol:'',
    ID:'',
    Numero_de_membresia:''


    // password: null
  },
  order:{
    Detalle_de_su_orden:[],
    Creacion:"",
    Metodo_de_pago:"",
    Precio_Total: '0',
    Propina: "",
    Status: "Ordenada",
    Direccion: "",
    OpcionEntrega: "Entrega a mi domicilio"
  },
  user: {
    
    ID: '',
    Direccion_de_residencia: "",
    personalId: '',
    token: '',
    email: '',
    Registro_Hijos:null,
    
    Nombre_Socio:{display_value: ""},
    
    Foto_Socio:"",
    
    Codigo_de_Membresia: "",
    
    Tipos_de_Membresias: {
      display_value: "",
      ID: ""
    },

    Fecha_de_nacimiento:"",
    correo: "",
    Estado_Membresia: "",
    Limite_de_Credito: "",
    Saldo_a_pagar_Creditos: "",
    Intereses:[],
    Deportes: [],
    Fecha_Venciminto_Membresia:'',

    Foto_Membresia:''

  },


  token: {
    Authorization: ''
  },


  loading: false,


  error: {
    status: false,
    message: ''
  }

};

export default initialState;
