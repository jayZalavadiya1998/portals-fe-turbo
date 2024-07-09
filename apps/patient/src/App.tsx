import { Button, Input } from '@repo/ui/shadcn'
import {PatientNotesContainer} from '@repo/common/common-components'
import '@repo/ui/global-css'
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import SideNav from './components/side-nav';
import { ThemeProvider } from './components/theme-provider';

function App() {

  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path='/' element={<SideNav />}>
              <Route
                path='/'
                element={<PatientNotesContainer/>}
              />
              {/* <Route
                path='/account-info'
                element={<AccountInfo/>}
              />
              <Route
                path='/messages'
                element={<Messages/>}
              /> */}
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
