import { IExecutableSchemaDefinition } from '@graphql-tools/schema';
import mergeWith from 'lodash.mergewith';

function withArraysConcatination(objValue: unknown, srcValue: unknown) {
  // if an array, concat it
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

// allows us to merge schemas
export const mergeRawSchemas = (...schemas: IExecutableSchemaDefinition[]): IExecutableSchemaDefinition => {
  return mergeWith({}, ...schemas, withArraysConcatination);
};
