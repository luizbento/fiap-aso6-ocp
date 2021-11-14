# fiap-aso6-ocp

Comando usado para criar o postgres:
 
```oc new-app postgresql-persistent --name sample-database --param DATABASE_SERVICE_NAME=sample-database --param POSTGRESQL_USER=sampledb --param POSTGRESQL_PASSWORD=sampledb --param POSTGRESQL_DATABASE=sampledb```

Comando usado para atualizar a variável de ambiente do banco:

oc set env deployment blog-django-py-git DATABASE_URL=postgresql://sample-database:5432/sampledb

## TODO

- Fazer deploy da imagem no Quay.io
- Montar deployment para o app