// types.ts
export interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export interface State {
    tasks: Task[];
  }
  
  export type Action =
    | { type: 'ADD_TASK'; payload: string }
    | { type: 'REMOVE_TASK'; payload: number }
    | { type: 'TOGGLE_TASK'; payload: number };
  

export interface Cronometro {
  corriendo: boolean;
  tiempo: number;
}

export type Acciones =
| { type: 'INICIAR' }
| { type: 'DETENER' }
| { type: 'REINICIAR' }
| { type: 'TICK' };