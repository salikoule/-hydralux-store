"use client"

import { useExitIntent } from "@/hooks/useExitIntent"
import ExitIntentPopup from "@/components/ui/ExitIntentPopup"
import ChatSupport from "@/components/ui/ChatSupport"

export default function ClientLayout() {
  const { showExitIntent, closeExitIntent } = useExitIntent(true)

  return (
    <>
      <ExitIntentPopup isOpen={showExitIntent} onClose={closeExitIntent} />
      <ChatSupport />
    </>
  )
}