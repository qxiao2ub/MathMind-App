import { SEO } from "@/components/SEO";
import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Lightbulb, BookOpen, HelpCircle } from "lucide-react";
import { MathKeyboard } from "@/components/math/MathKeyboard";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const quickPrompts = [
  { icon: HelpCircle, text: "Explain quadratic equations" },
  { icon: Lightbulb, text: "Help me with my homework" },
  { icon: BookOpen, text: "What is the Pythagorean theorem?" },
];

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content: "Hey, welcome to MathMind. I am here to help you work through any math concept or problem.\n\nWhat would you like to learn today?"
  }
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: "Good question. Here is how to approach it.\n\n1. Start by identifying the key values in the problem.\n\n2. Apply the relevant formula or method.\n\n3. Simplify your result and check it makes sense.\n\nWould you like to try a similar example, or should I go deeper into any of those steps?"
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleQuickPrompt = (text: string) => {
    setInput(text);
  };

  return (
    <div className="flex flex-col max-w-3xl mx-auto chat-container-mobile lg:relative lg:inset-auto lg:h-[calc(100vh-4rem)]">
      <SEO title="AI Maths Tutor | MathMind" description="Ask the MathMind AI tutor any maths question. Step-by-step explanations in plain language." noindex />
      {/* Header – fixed height */}

      <div className="flex items-center gap-3 px-4 py-3 sm:px-0 sm:py-4 bg-background/95 backdrop-blur-sm shrink-0 z-10 border-b border-border/30 lg:border-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl gradient-accent flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
        </div>
        <div className="min-w-0">
          <h1 className="font-display text-lg sm:text-xl font-bold">AI Math Tutor</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">Ask me anything about math!</p>
        </div>
      </div>

      {/* Chat messages – scrollable flex-1 */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-0 py-4 space-y-4 min-h-0"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex animate-fade-in",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            {message.role === "assistant" && (
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full gradient-accent flex items-center justify-center mr-2 shrink-0">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-foreground" />
              </div>
            )}
            <div
              className={cn(
                "max-w-[85%] sm:max-w-[75%]",
                message.role === "user" ? "chat-bubble-user" : "chat-bubble-ai"
              )}
            >
              {message.role === "assistant" ? (
                <div className="text-sm sm:text-base leading-relaxed space-y-2">
                  {message.content.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p className="whitespace-pre-wrap text-sm sm:text-base">{message.content}</p>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start animate-fade-in">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full gradient-accent flex items-center justify-center mr-2 shrink-0">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-foreground animate-pulse" />
            </div>
            <div className="chat-bubble-ai">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Bottom input area – pinned */}
      <div className="shrink-0 bg-background/95 backdrop-blur-sm border-t border-border/30 px-4 sm:px-0 pt-2 pb-3">
        {/* Quick Prompts */}
        {messages.length === 1 && (
          <div className="flex overflow-x-auto gap-2 mb-2 pb-1 -mx-1 px-1 no-scrollbar">
            {quickPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handleQuickPrompt(prompt.text)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-xs sm:text-sm whitespace-nowrap shrink-0"
              >
                <prompt.icon className="w-3.5 h-3.5 text-primary" />
                <span>{prompt.text}</span>
              </button>
            ))}
          </div>
        )}

        {/* Math Keyboard */}
        <MathKeyboard onInsert={(text) => setInput((prev) => prev + text)} className="mb-2" />

        {/* Input row */}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask a math question..."
            className="flex-1 min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm sm:text-base"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="btn-primary px-3 sm:px-4 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
