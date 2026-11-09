import { useEffect, useState } from 'react'
 
type TypewriterTextProps = {
  text: string
  /** Pause before the first character appears, in milliseconds. */
  startDelay?: number
  /** Time between characters, in milliseconds. */
  speed?: number
}
 

export default function TypewriterText({ text, startDelay = 3000, speed = 180 }: TypewriterTextProps) {
  const [typed, setTyped] = useState(0)
 
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setTyped(text.length)
      return
    }
 
    setTyped(0)
    let count = 0
    let interval = 0
    const start = window.setTimeout(() => {
      setTyped((count = 1))
      interval = window.setInterval(() => {
        count += 1
        setTyped(count)
        if (count >= text.length) window.clearInterval(interval)
      }, speed)
    }, startDelay)
 
    return () => {
      window.clearTimeout(start)
      window.clearInterval(interval)
    }
  }, [text, startDelay, speed])
 
  const done = typed >= text.length
 
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, typed)}
        <span className={`typewriter-caret${done ? ' is-done' : ''}`} />
      </span>
    </>
  )
}