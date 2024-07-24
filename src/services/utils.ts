import { API_BASE_URL } from '@env';

export const callRequest = async (
  path: string,
  method: string,
  body: object,
  headers?: any
) => {
  return await fetch(`${'https://api.elencantosv.com'}/${path}`, {
    method: method,
    headers: {
      ...headers
    },
    body: JSON.stringify(body)
  });
};

export const getFormatDate =  () => {
  var monthAbbreviations = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
   'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
   ];              
      var fechaActual = new Date();
      var dia = fechaActual.getDate();
      var mes = monthAbbreviations[fechaActual.getMonth()];
      var año = fechaActual.getFullYear();
      var fechaFormateada = dia + '-' + mes + '-' + año;
      console.log(fechaFormateada);
    return fechaFormateada
}

export const filterDataByUserId = (userId: string, data: any) => {
  try {
    return data.filter((user: any) => user.Socios && user.Socios.ID === userId);
  } catch (error) {
    console.log(error);
  }
};

export const filterDataByCorreo = (correo: string, data: any) => {
  console.log(data);
  
  try {
    if (data == undefined) {
      return [];
    }
    return data.filter((user: any) => user.CORREO1 === correo);
  } catch (error) {
    console.log("ERROR EN FILTER BY CORREO");
    console.log(error);
    return[]
  }
};
export const filterDataByCorreo2 = (correo: string, data: any) => {
  try {
    return data.filter((user: any) => user.CORREO === correo);
  } catch (error) {
    console.log(error);
  }
};

// export function convertDateString(dateString:any) {
//   const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
//   const [day, month, year] = dateString.split('-');
//   const monthIndex = months.indexOf(month);
//   const formattedDate = new Date(`${year}-${monthIndex + 1}-${day}`);
//   console.log(formattedDate);
//   return formattedDate.toISOString().split('T')[0];
  
  
// }
export function convertDateString(dateString:any) {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const [day, month, year] = dateString.split('-');  
  const monthIndex = months.findIndex(m => m.toUpperCase() === month.toUpperCase());  
  const formattedDate = new Date(`${year}-${monthIndex + 1}-${day}`);
  
  
  const dateFormat= formattedDate.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format without timestamp
  console.log("FECHA FORMATEADA");
  
  console.log(dateFormat);
  
  return(dateFormat)
}

