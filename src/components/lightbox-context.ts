import { createContext, useContext } from 'react'
import type { Photo } from '../data'

type LightboxValue = { open: (set: Photo[], index: number) => void }

export const LightboxContext = createContext<LightboxValue>({ open: () => {} })

export const useLightbox = () => useContext(LightboxContext)
