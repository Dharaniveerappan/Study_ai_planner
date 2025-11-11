import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI study assistant. I can help you with study tips, time management, and answering your academic questions. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputText("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: "I understand you need help with that. As an AI assistant, I can provide study tips and recommendations. For full AI functionality, we can integrate with advanced AI services to give you personalized study guidance!",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const quickPrompts = [
    "Help me create a study schedule",
    "What's the best way to memorize vocabulary?",
    "Give me tips for staying focused",
    "How do I prepare for exams?",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-2">AI Study Assistant</h1>
            <p className="text-muted-foreground">Get personalized study tips and guidance</p>
          </div>

          {/* Chat Container */}
          <Card className="border-border shadow-lg animate-fade-in">
            <div className="h-[600px] flex flex-col">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.sender === "ai" && (
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    {message.sender === "user" && (
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-secondary" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Prompts */}
              <div className="px-6 py-4 border-t border-border bg-muted/30">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Quick prompts:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setInputText(prompt)}
                      className="text-xs"
                    >
                      {prompt}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-border">
                <div className="flex gap-3">
                  <Input
                    placeholder="Ask me anything about studying..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1"
                  />
                  <Button 
                    onClick={sendMessage}
                    className="bg-primary hover:bg-primary-dark text-primary-foreground"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AIChat;
