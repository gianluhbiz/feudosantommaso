import { useState, type ReactNode } from 'react'
import { SceneContext, chapters } from './scene-context'

export function SceneProvider({ children }: { children: ReactNode }) {
  const [id, setChapterId] = useState<string | null>(null)
  const chapter = chapters.find((c) => c.id === id) ?? null
  return <SceneContext.Provider value={{ chapter, setChapterId }}>{children}</SceneContext.Provider>
}
