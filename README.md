# Minha carteira
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/felipet66)
## Live Demo

http://minha-carteira.s3-website-sa-east-1.amazonaws.com/

## Servidor de dev

Para iniciar a aplicação utilize o comando `docker-compose up`.

## Codigos

Para gerar novos componentes utilize `ng generate component component-name`. Você também pode utilizar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Docker image

`https://hub.docker.com/r/felipeteles95/minha-carteira`

## Estrutura de pastas
- app
    - core
        - auth
            - helpers
            - services
        - components
            - navbar
        - 
    - pages
        - categories
            - category-form
            - category-list
            - shared
        - entries
            - entries-form
            - category-list
            - shared
        - reports
            - reports
    - shared
        - components
            - base-resource-form
            - base-resource-list
            - bread-crumb
            - form-field-error
            - page-header
            - server-error-messages
        - models
        - services

## Fluxo de desenvolvimento
`master -> develop -> master` <br />
`develop -> release -> develop` <br />
`release -> featureA -> release` <br />
`release -> featureB -> release`

