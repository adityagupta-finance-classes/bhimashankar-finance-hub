import { motion } from "framer-motion";
import { Bot, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "ai";
  content: string;
}

const suggestedQuestions = [
  "CFA Level 1 mein Equity ka weightage kitna hai?",
  "P/E ratio kya hota hai? Simple mein samjhao",
  "SIP aur lump sum mein kya difference hai?",
  "NISM Series V-A ki preparation kaise karein?",
  "Reliance Industries ka fundamental analysis do",
  "Mutual fund select karte waqt kya dekhna chahiye?",
];

const AIAssistantPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content:
        "Namaste! 🙏 Main Bhimashankar Finance ka AI Assistant hoon. Mujhse koi bhi finance ka sawaal pucho — CFA, NISM, stocks, mutual funds, ya koi bhi concept. Main Hindi Roman mein samjhaunga!",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");

    // Simulated AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: `Bahut accha sawaal hai! "${userMsg}" — iska jawab detail mein dene ke liye AI backend integration ki zaroorat hai. Jald hi yeh feature live hoga aur main aapke har sawal ka detailed answer Hindi Roman mein de paunga. 🚀\n\nAbhi ke liye aap CFA Portal ya NISM Portal pe jaakar topics explore kar sakte ho!`,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
      {/* Header */}
      <div className="border-b border-border bg-card px-4 py-4 lg:px-8">
        <div className="container mx-auto flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold">
            <Bot className="h-5 w-5 text-navy-dark" />
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-card-foreground">AI Finance Assistant</h1>
            <p className="text-xs text-muted-foreground">CFA, NISM, Stocks, Mutual Funds — sab kuch pucho</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1">
            <div className="h-2 w-2 animate-pulse rounded-full bg-success" />
            <span className="text-xs font-medium text-success">Online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 lg:px-8">
        <div className="container mx-auto max-w-3xl space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-card-foreground"
                }`}
              >
                {msg.role === "ai" && (
                  <div className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-accent">
                    <Sparkles className="h-3 w-3" /> AI Assistant
                  </div>
                )}
                <p className="whitespace-pre-line">{msg.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Suggestions */}
      {messages.length <= 2 && (
        <div className="border-t border-border bg-muted/30 px-4 py-3 lg:px-8">
          <div className="container mx-auto max-w-3xl">
            <p className="mb-2 text-xs font-medium text-muted-foreground">Suggested Questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setInput(q);
                  }}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-card-foreground transition-colors hover:border-accent/30"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t border-border bg-card px-4 py-4 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Apna sawaal yahan likho..."
              className="flex-1"
            />
            <Button type="submit" className="bg-gradient-gold text-navy-dark shadow-gold hover:opacity-90">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage;
