import mergeWith from 'lodash.mergewith';
import { IExecutableSchemaDefinition } from 'graphql-tools';

function withArraysConcatination(objValue: any, srcValue: any) {
  // if an array, concat it
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

// allows us to merge schemas
export const mergeRawSchemas = (...schemas: IExecutableSchemaDefinition[]): IExecutableSchemaDefinition => {
  return mergeWith({}, ...schemas, withArraysConcatination);
};
