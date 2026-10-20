import { createContext, useContext } from 'react'

// The live pathname. Pages rendered inside <Routes location> see a frozen
// location while they exit; this context does not freeze.
export const DestinationContext = createContext('/')

export const useDestination = () => useContext(DestinationContext)
