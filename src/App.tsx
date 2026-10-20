import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router'
import { Page } from './components/Curtain'
import { DayDial, MobileBar } from './components/DayDial'
import { Header } from './components/Header'
import { LightboxProvider } from './components/Lightbox'
import { DestinationContext } from './components/route-context'
import { SceneProvider } from './components/scene'
import Home from './pages/Home'
import Menu from './pages/Menu'

export default function App() {
  const location = useLocation()

  return (
    <SceneProvider>
      <LightboxProvider>
        <a
          href="#main"
          className="sr-only z-[200] rounded-full bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Vai al contenuto
        </a>
        <Header />
        <div id="main">
          <DestinationContext.Provider value={location.pathname}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <Page>
                      <Home />
                    </Page>
                  }
                />
                <Route
                  path="/menu"
                  element={
                    <Page>
                      <Menu />
                    </Page>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Page>
                      <Home />
                    </Page>
                  }
                />
              </Routes>
            </AnimatePresence>
          </DestinationContext.Provider>
        </div>
        <DayDial />
        <MobileBar />
        <div aria-hidden className="grain pointer-events-none fixed inset-0 z-[60] opacity-[0.06] mix-blend-multiply" />
      </LightboxProvider>
    </SceneProvider>
  )
}
