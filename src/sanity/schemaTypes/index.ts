import { type SchemaTypeDefinition  } from 'sanity'
import newProducts from './products'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    newProducts
  ],
}
