"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from 'lucide-react'

const LOCAL_STORAGE_KEY = 'chatbox_messages'

const ChatBox = () => {
  const defaultMessages = [
    { user: "jeff.hl", message: "CEXs are the past. Hyper is the future" },
    { user: "peanut.hl", message: "If you're not on Hyper, you're already late" },
    { user: "HypioHL", message: "Deploying on Hyper. No alpha, just actions" },
    { user: "MBXXVV", message: "100% uptime. No sleep, just Hyper" },
  ]

  const [messages, setMessages] = useState(defaultMessages)
  const [input, setInput] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setMessages([...defaultMessages, ...parsed])
      } catch (e) {
        console.error("Failed to parse stored messages:", e)
      }
    }
  }, [])

  const handleSend = () => {
    if (input.trim() === "") return

    const newMessage = { user: "You", message: input.trim() }
    const updatedMessages = [...messages, newMessage]
    const userMessages = updatedMessages.slice(defaultMessages.length)
    console.log('userMessages', userMessages)
    setMessages(updatedMessages)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userMessages))
    setInput("")
  }

  return (
    <div className="bg-[#330000] border-2 border-[#cc3333] rounded-md p-3 relative">
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-[#660000] to-[#cc0000] flex items-center px-2">
        <span className="text-xs font-bold text-white">Cbox</span>
      </div>
      <div className="mt-6 space-y-2">
        <ScrollArea className="h-68 w-full bg-[#440000] border border-[#cc3333] p-2">
          <div className="space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className="text-xs">
                <span className="text-[#ff9999] font-bold">{msg.user}:</span>
                <span className="text-[#ff9999] ml-1">{msg.message}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Your message..."
            className="h-7 text-xs bg-[#440000] border-[#cc3333] text-[#ff9999] placeholder:text-[#cc3333]"
          />
          <Button
            size="sm"
            onClick={handleSend}
            className="h-7 px-2 bg-[#aa0000] hover:bg-[#cc0000] text-[#ff9999]"
          >
            <Send className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ChatBox
