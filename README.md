# Learn Strapi....

## Internationalization in strapi

#### Populate

`api/collectionName?populate[0]=localizations`

#### To retrive Localized feilds

`/api/collectionName?locale=ml(locale code)`

## Components in strapi

#### Populate

`/api/collectionName?populate[0]=Techstack`

## Additional

#### Search

`/api/collectionName?filters[name][$contains]=Lap`

\*its not a case sensitive search, we need customized apis, because using sql
