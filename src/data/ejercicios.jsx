import CambioColor from "../paginas/ejercicios/CambioColor.jsx";
import ContarClics from "../paginas/ejercicios/ContarClics.jsx";
import AgregarALista from "../paginas/ejercicios/AgregarALista.jsx";
import BuscarElementos from "../paginas/ejercicios/BuscarElementos.jsx";
import OperacionMatematica from "../paginas/ejercicios/OperacionMatematica.jsx";
import Temporizador from "../paginas/ejercicios/Temporizador.jsx";
import GeneradorPassword from "../paginas/ejercicios/GeneradorPassword.jsx";
import Parrafo from "../paginas/ejercicios/Parrafo.jsx";
import ListaTareas from "../paginas/ejercicios/ListaTareas.jsx";

export const ejercicios = [
  {
    id: "color",
    title: "Cambiar color de fondo",
    description: `
  Crea una página web con un botón que diga "Cambiar color".
  Cada vez que el usuario haga clic en el botón, el color de fondo de la página debe cambiar a un color aleatorio.`,
    component: <CambioColor />,
  },
  {
    id: "clics",
    title: "Contador de clics",
    description: `
  Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0". Cada 
  vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics 
  realizados.`,
    component: <ContarClics />,
  },
  {
    id: "agregar-a-lista",
    title: "Agregar a lista",
    description: `Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo. 
  ● Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un 
  nuevo elemento de la lista. 
  ● Añade un botón al lado de cada elemento para eliminarlo de la lista.`,
    component: <AgregarALista />,
  },
  {
    id: "buscar-elementos",
    title: "Buscar elementos en una lista",
    description: `Crea una página con un campo de texto y una lista predefinida de elementos. 
  ● Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para 
  mostrar solo los elementos que contienen el texto escrito. 
  Ejemplo: Si la lista contiene ["Perro", "Gato", "Pez"] y el usuario escribe "Ga", solo "Gato" debe 
  quedar visible.`, 
    component: <BuscarElementos />,
  },
  {
    id: "operacion-matematica",
    title: "Operación matemática",
    description: `Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar", 
  "Multiplicar", y "Dividir". 
  ● Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un 
  área de texto o debajo de los botones. 
  ● Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías).`,
    component: <OperacionMatematica />,
  },
  {
    id: "temporizador",
    title: "Temporizador",
    description: `Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar” 
  y “Reiniciar”. 
  • Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas. 
  • “Pausar” detiene el conteo pero mantiene el tiempo actual. 
  • “Reiniciar” pone el temporizador en 00:00:00.`,
    component: <Temporizador />,
  },
  {
    id: "generador-password",
    title: "Generador de Contraseñas",
    description: `Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que 
  diga “Generar contraseña”. 
  • Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando 
  letras, números y caracteres especiales. 
  • Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la 
  longitud debe ser mayor o igual a 4`,
    component: <GeneradorPassword />,
  },
  {
    id: "parrafo",
    title: "Parrafo",
    description: `Crea una página con un campo de texto donde el usuario pueda escribir un párrafo. 
  • Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo. 
  • Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de 
  línea.`,
    component: <Parrafo />,
  },
  {
    id: "lista-tareas",
    title: "Lista de Tareas",
    description: `Crea una aplicación de lista de tareas. 
  • Cada tarea debe incluir un texto y un checkbox para marcarla como completada. 
  • Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga. 
  • Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage.`,
    component: <ListaTareas />,
  }
];