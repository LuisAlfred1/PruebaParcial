export interface Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  estado: "pendiente" | "completada";
  fechaCreacion: string;
  usuarioId: string;
}
