# Projeto MVC CRUD com Firebase Realtime Database

## Instalação

```bash
npm install
```

## Dependências adicionadas

```bash
npm install firebase-admin
```

## Configuração Firebase

1. Acesse o Firebase Console
2. Crie um projeto
3. Ative o Realtime Database
4. Vá em:
   - Configurações do Projeto
   - Contas de Serviço
   - Gerar nova chave privada
5. Baixe o JSON
6. Coloque o arquivo dentro da pasta: 
```bash
/config
```

7. Renomeie para:

```bash
serviceAccountKey.json
```

8. Edite:

```bash
config/firebase.js
```

Troque:

```js
databaseURL: "https://SEU-PROJETO.firebaseio.com"
```

pela URL do seu Firebase.

## Executar

```bash
npm run dev
```

ou

```bash
npm start
```
