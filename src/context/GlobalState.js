import { createContext, useReducer } from "react";
import { v4 } from "uuid";

import appReducer from "./AppReducer";

// el valor inicial del estado, sera un arreglo de tareas, este es el contexto.
// con sus propiedades id, title, etc.
const initialState = {
  tasks: [
    {
      id: "1",
      title: "some title",
      description: "some description",
      done: false,
    },
    {
      id: "2",
      title: "some title",
      description: "some description",
      done: false,
    },
  ],
};
// GlobalContext, asi se llama el contexto, y hay que exportarlo para 
// que todos los demas componentes puedan usarlo.
export const GlobalContext = createContext(initialState);
// globalprovider, es un componente de react, para poder compartir el state global
// el createContext, pide que se cree un provider, aqui se engloban todos los componentes
// es un componente padre, que los hijos pueden acceder al state del padre.
// esto se ve en el App.js donde se usa <GlobalProvider> para englobar a todos los hijos.
// {children}, son los componentes que van a estar como hijos, es decir, bsicamente 
// son las propiedades que engloban al globalprovider, si se llegase a usar console.log({children})
// en la herramienta de react, se puede observar que los hijos serian: "Heading", "Routes" y todo
// aquel que este englobado en App.js. La utilidad de GlobalProvider es poder transmitirle
// a todos los hijos un state global y asi puedan usarlo.
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addTask(task) {
    dispatch({
      type: "ADD_TASK",
      payload: { ...task, id: v4(), done: false },
    });
  }

  function updateTask(updatedTask) {
    dispatch({
      type: "UPDATE_TASK",
      payload: updatedTask,
    });
  }

  function deleteTask(id) {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }

  function toggleTaskDone(id) {
    dispatch({
      type: "TOGGLE_TASK_DONE",
      payload: id,
    });
  }

  return (
    // react permite que desde el globalcontext, en vez de pintar un div, se va a pintar
    // un provider(Provider) que va a ser un componente que no va a pintar nada sino va a proveer y
    // almacenar el state y va a darseloa  sus componentes hijos,
    // eso quiere decir que ahora el Heading, el Route, va a poder acceder a las tareas
    // que estan englobadas. Esto quiere decir que desde taskform, se puede importar 
    // el globalcontext y asi useContext para poder usarlo:
    // const { addTask, updateTask, tasks } = useContext(GlobalContext);
    // value={{}}, que es lo que se va a poder acceder de los componentes hijos, es decir
    // va a ser justamente todo el state, es decir todo 
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleTaskDone
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};