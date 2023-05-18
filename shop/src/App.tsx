import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { ThemeProvider} from "@mui/material";

import {theme} from "./shared/utils/theme";
import {HomePage, RegisterPage, SignInPage} from "./pages";


function App(){
  return (
      <ThemeProvider theme={theme}>
          <Router>
              <Routes>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/signin' element={<SignInPage/>}/>
                  <Route path='/register' element={<RegisterPage/>}/>

              </Routes>
          </Router>
      </ThemeProvider>
  );
}

export {App};
