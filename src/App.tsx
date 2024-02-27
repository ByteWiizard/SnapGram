import { Routes, Route } from 'react-router-dom';
import { SignUpForm, SignInForm, AuthLaylout } from './auth';
import { RootLaylout, Home } from './root';
import { Toaster } from '@/components/ui/toaster';
function App() {


  return (
    <main className='flex h-screen'>



      <Routes>
        {/* Public */}
        <Route element={<AuthLaylout />}>
          <Route path="/sign-in" element={<SignInForm />}/>
          <Route path="/sign-up" element={<SignUpForm />}/>
        </Route>

        {/* Private */}
        <Route element={<RootLaylout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>

      <Toaster/>
    </main>
  )
}
1
export default App
