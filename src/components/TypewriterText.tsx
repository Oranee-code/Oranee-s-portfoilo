import { useEffect, useState } from 'react'
 
type TypewriterTextProps = {
  text: string
  /** Pause before the first character appears, in milliseconds. */
  startDelay?: number
  /** Time between characters, in milliseconds. */
  speed?: number
}
 
/**
 * Types `text` out one character at a time with a blinking caret. Assistive
 * tech gets the finished word immediately, and visitors who reduce motion see
 * it already typed — the animation is purely decorative.
 */
export default function TypewriterText({ text, startDelay = 300, speed = 140 }: TypewriterTextProps) {
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