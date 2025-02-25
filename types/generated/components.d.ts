import type { Schema, Struct } from '@strapi/strapi';

export interface TechnologyLanguages extends Struct.ComponentSchema {
  collectionName: 'components_technology_languages';
  info: {
    displayName: 'languages';
    icon: 'code';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'technology.languages': TechnologyLanguages;
    }
  }
}
