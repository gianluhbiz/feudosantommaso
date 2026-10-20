import { createContext, useContext } from 'react'

export type Chapter = {
  id: string
  hour: string
  label: string
  night: boolean
}

// The landing page reads as one day at the feudo: each chapter is an hour.
export const chapters: Chapter[] = [
  { id: 'ristorante', hour: '12:30', label: 'Pranzo', night: false },
  { id: 'eventi', hour: '16:00', label: 'Ricevimenti', night: false },
  { id: 'terrazza', hour: '19:40', label: 'Tramonto', night: true },
  { id: 'notte', hour: '21:30', label: 'Cortile', night: true },
  { id: 'camere', hour: '23:30', label: 'Camere', night: true },
  { id: 'dove', hour: '', label: 'Arrivare', night: true },
]

type SceneValue = { chapter: Chapter | null; setChapterId: (id: string | null) => void }

export const SceneContext = createContext<SceneValue>({ chapter: null, setChapterId: () => {} })

export const useScene = () => useContext(SceneContext)
