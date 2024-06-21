import React from 'react'; 
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import {BrowserRouter, Routes, Route, RouterProvider} from 'react-router-dom';
import Menu from '../components/Menu';
import ListarCursos from '../views/ListarCursos';
import CriarCursos from '../views/CriarCursos';
import DetalhaCurso from '../views/DetalhaCurso';
import Error from '../views/Error';
import Hooks from '../views/Hooks/Hooks';
import _UseState from '../views/Hooks/_useState';
import Empr_estag from '../views/Cetreina_Ext/cetrext110/w_sel_con_empr_estag';
import Aluno from '../views/Cetreina_Ext/cetreina_comum/w_sel_vw_aluno';
import Seguradora from '../views/Cetreina_Ext/cetrext130/w_man_seguradora';
import Nagent from '../views/Cetreina_Ext/cetrext130/w_man_nagent';
import Oferecido from '../views/Cetreina_Ext/cetrext155/w_man_estag_ofer';
import UseStates from '../views/EstudoUses/UseStates';




import './App.css'

import Home from '../views/Home';
import Formulario from '../views/Formulario';

function App() {
  
  return (
    <>
      <PrimeReactProvider>
        {/* <Menu /> */}
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/formulario" element={<Formulario />} />
                <Route path="/listar-cursos" element={<ListarCursos />} />
                <Route path="/criar-cursos" element={<CriarCursos />} />
                <Route path="/detalha-curso" element={<DetalhaCurso />} />
                <Route path="/hooks" element={<Hooks />} />
                <Route path="/_useState" element={<_UseState />} />
                <Route path="/w_sel_con_empr_estag" element={<Empr_estag />} />
                <Route path="/w_sel_vw_aluno" element={<Aluno />} />
                <Route path="/w_man_seguradora" element={<Seguradora />} />
                <Route path="/w_man_nagent" element={<Nagent />} />
                <Route path="/w_man_estag_ofer" element={<Oferecido />} />
                <Route path="/uses" element={<UseStates />} />

                <Route path="*" element={<Error />} />
          </Routes>       
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  )
}

export default App
