# REACT 

Para utilizar o React para criar um projeto, seja ele um site ou app, precisamos primeiramente do NodeJs então ...

# Instalar NodeJS
Comandos utilizados no ubuntu:
```
sudo apt install node.js
sudo apt install npm
```
Por experiência própria, pesquise como instala-lo:
    `https://nodejs.org/en/download`
<font color="red">Sério. Essas coisas atualizam muito rápido e até mesmo esse link aqui, pode daqui a pouco estar fora do ar.</font>

2. Criar App React
    `npm create vite <NomeProjeto>`
    `npm install`

3. Para Iniciar o projeto e ver suas modificações sendo feitas **Em tempo Real**
Entre na pasta do projeto e rode:
    `npm run dev`

#### Iremos usar o FrameWork PrimeReact, para isso:
# Instalar PrimeReact

    `npm install primereact`
    `npm install primeicons`

dentro do arquivo App.jsx do projeto você deverá importar:
```
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
```

O primeReact possui diversos themes, escolha um que melhor se adeque ao seu gosto.

e o App.jsx deverá ficar com essa cara:

```node
import React from 'react'; 
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';

function App() {
  
  return (
    <>
      <PrimeReactProvider>        
            <MeuProjeto />
      </PrimeReactProvider>
    </>
  )
}
export default App

```

Então em cada nova página poderemos utilizar os componentes do primeReact importando-os conforme a documentação no link a seguir `https://primereact.org/installation/`
        
