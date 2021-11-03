import { DocumentBuilder } from '@nestjs/swagger';

export const message = {
  SYSTEM_ERROR_MESSAGE: 'Error del sistema.',
  NOT_FOUND_MESSAGE: 'No se encontraron resultados.',
  CREATE_SUCCESS_MESSAGE: 'Se guardaron los datos correctamente.',
  CREATE_ERROR_MESSAGE: 'Ocurrió un error al guardar los datos.',
  UPDATE_SUCCESS_MESSAGE: 'Se actualizaron los datos correctamente.',
  UPDATE_ERROR_MESSAGE: 'Ocurrió un error al actualizar los datos.',
  DELETE_SUCCESS_MESSAGE: 'Se eliminaron los datos correctamente.',
  DELETE_ERROR_MESSAGE: 'Ocurrió un error al eliminar los datos.',
};

export const configOpenApi = new DocumentBuilder()
  .setTitle('BackMEAN core')
  .addServer('http://localhost:3000')
  .setDescription('BackMEAN API description')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
