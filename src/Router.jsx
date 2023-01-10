import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { lazy, Suspense } from 'react'
const Home = lazy(() => import('./Pages/Home'))
const Sites = lazy(() => import('./Pages/Sites'))

export default function Router () {
  return (
    <BrowserRouter>
      <Suspense fallback='loading routes'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sites/fonts' element={<Sites isFonts />} />
          <Route path='/sites/design' element={<Sites isDesign />} />
          <Route path='/sites/learning' element={<Sites isLearning />} />
          <Route path='/sites/tools' element={<Sites isTools />} />
          <Route path='/sites/job-interview' element={<Sites isJobInterview />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
