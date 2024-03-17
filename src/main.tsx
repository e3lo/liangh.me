import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// Routes
import Layout from './routes/Layout.tsx'
import Home from './routes/Home.tsx'
import Achievements from './routes/Achievements.tsx'
import Contact from './routes/Contact.tsx'
import Projects from './routes/Projects.tsx'
import NotFound from './routes/NotFound.tsx'

import CulinaryCode from './routes/projects/CulinaryCode.tsx'
import HackMelbourne from './routes/projects/HackMelbourne.tsx'
import GroupSpace from './routes/projects/GroupSpace.tsx'
import AuyeaFarm from './routes/projects/AuyeaFarm.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="achievements" element={<Achievements />} />
      <Route path="contact" element={<Contact />} />
      <Route path="project" element={<Projects />}>
        <Route path="CulinaryCode" element={<CulinaryCode />} />
        <Route path="HackMelbourne" element={<HackMelbourne />} />
        <Route path="GroupSpace" element={<GroupSpace />} />
        <Route path="AuyeaFarm" element={<AuyeaFarm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
