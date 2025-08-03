"use client"

import { useState, useEffect, useRef } from "react"

export const useExitIntent = (enabled: boolean = true) => {
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (!enabled || hasShown) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving through the top of the viewport
      if (e.clientY <= 0 && e.relatedTarget === null) {
        setShowExitIntent(true)
        setHasShown(true)
      }
    }

    const handleVisibilityChange = () => {
      if (document.hidden && !hasShown) {
        setShowExitIntent(true)
        setHasShown(true)
      }
    }

    // Show after 30 seconds of inactivity as fallback
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        if (!hasShown) {
          setShowExitIntent(true)
          setHasShown(true)
        }
      }, 30000) // 30 seconds
    }

    const handleUserActivity = () => {
      resetTimeout()
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("visibilitychange", handleVisibilityChange)
    document.addEventListener("mousemove", handleUserActivity)
    document.addEventListener("scroll", handleUserActivity)
    document.addEventListener("keypress", handleUserActivity)

    resetTimeout()

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      document.removeEventListener("mousemove", handleUserActivity)
      document.removeEventListener("scroll", handleUserActivity)
      document.removeEventListener("keypress", handleUserActivity)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [enabled, hasShown])

  const closeExitIntent = () => {
    setShowExitIntent(false)
  }

  return { showExitIntent, closeExitIntent }
}