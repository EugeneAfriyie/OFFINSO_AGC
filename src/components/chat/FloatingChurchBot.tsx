"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, Sparkles, User, X, RefreshCw, MapPin, Clock, Heart, ShieldCheck, Phone, CreditCard, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";

interface StoryOption {
  label: string;
  actionId: string;
}

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: StoryOption[];
}

export function FloatingChurchBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const initialOptions: StoryOption[] = [
    { label: "📍 Church Location & Address", actionId: "location" },
    { label: "⏰ Sunday Service Schedules", actionId: "services" },
    { label: "👤 Pastor Collins Ababio & Leadership", actionId: "pastor" },
    { label: "👶 Kids & Youth Ministry", actionId: "kids" },
    { label: "💳 Tithes & Online Giving", actionId: "giving" },
    { label: "📞 Pastoral Support & Prayer", actionId: "prayer" },
  ];

  const initialBotMessage: Message = {
    id: "1",
    sender: "bot",
    text: `God bless you and welcome to ${siteConfig.name} in Offinso, Kumasi! I am your Temple AI Guide. How can I assist your visit today?`,
    options: initialOptions,
  };

  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleOptionClick = (option: StoryOption) => {
    // 1. Add User Choice to Chat Stream
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: option.label,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Generate Storyline Response with Next Decision Options
    setTimeout(() => {
      let botText = "";
      let nextOptions: StoryOption[] = [];

      switch (option.actionId) {
        case "location":
          botText = `We are located at ${siteConfig.address}. Our sanctuary is right near the main highway with reserved guest parking available as soon as you arrive!`;
          nextOptions = [
            { label: "🗺️ Get Google Maps Directions", actionId: "gps" },
            { label: "🅿️ Parking & Arrival Info", actionId: "parking" },
            { label: "⏰ Sunday Service Times", actionId: "services" },
            { label: "🏠 Return to Main Menu", actionId: "menu" },
          ];
          break;

        case "gps":
          botText = `You can easily navigate to us using Google Maps. Search for "${siteConfig.address}" or tap the link in our location section. Need any other help?`;
          nextOptions = [
            { label: "⏰ Sunday Service Times", actionId: "services" },
            { label: "📞 Call Helpline (+233 55 272 4685)", actionId: "phone" },
            { label: "🏠 Return to Main Menu", actionId: "menu" },
          ];
          break;

        case "parking":
          botText = `Reserved guest parking spaces are set aside right near the main entrance. Our friendly hospitality parking team will welcome and guide your vehicle smoothly.`;
          nextOptions = [
            { label: "👕 What Should I Wear?", actionId: "attire" },
            { label: "🏠 Return to Main Menu", actionId: "menu" },
          ];
          break;

        case "services":
          botText = `Our Sunday Services: 1st Service is 9:00 AM – 10:30 AM (Vibrant Praise & Teaching), 2nd Service is 11:00 AM – 12:30 PM (Celebration Worship). We also hold Wednesday Midweek Bible Study at 6:30 PM.`;
          nextOptions = [
            { label: "👶 Kids & Youth Ministry", actionId: "kids" },
            { label: "📍 Campus Location & Address", actionId: "location" },
            { label: "🏠 Return to Main Menu", actionId: "menu" },
          ];
          break;

        case "pastor":
          botText = `${siteConfig.name} was founded on April 9, 2019 under the spiritual leadership of Senior Pastor Collins Ababio. Pastor Ababio and the leadership team love greeting first-time guests right after service!`;
          nextOptions = [
            { label: "📖 Church Mission & Vision", actionId: "mission" },
            { label: "📞 Call Pastoral Helpline", actionId: "phone" },
            { label: "🏠 Return to Main Menu", actionId: "menu" },
          ];
          break;

        case "mission":
          botText = `Our mission is: "To Know Christ & Make Him Known in Offinso, Kumasi & Beyond." We are dedicated to building a vibrant, Spirit-empowered church family for all generations.`;
          nextOptions = [
            { label: "⏰ Sunday Service Times", actionId: "services" },
            { label: "🏠 Return to Main Menu", actionId: "menu" },
          ];
          break;

        case "kids":
          botText = `King's Kids Ministry provides secure, age-appropriate, and joyful Bible lessons for children from nursery to age 12. Every volunteer is background-checked and dedicated to nurturing your child.`;
          nextOptions = [
            { label: "👕 What Should I Wear?", actionId: "attire" },
            { label: "🏠 Return to Main Menu", actionId: "menu" },
          ];
          break;

        case "attire":
          botText = `Come as you are! At The King's Temple A/G, you will see members wearing traditional Ghanaian attire, suits, business casual, and casual clothes. You are welcome with open arms.`;
          nextOptions = [
            { label: "📍 Campus Location & Address", actionId: "location" },
            { label: "🏠 Return to Main Menu", actionId: "menu" },
          ];
          break;

        case "giving":
          botText = `You can give tithes, offerings, and seeds instantly online using Visa/Mastercard or Mobile Money. You can also send via USSD to our church MoMo line: ${siteConfig.phone} (Account: The King's Temple A/G).`;
          nextOptions = [
            { label: "💳 Give Online Now", actionId: "give_online" },
            { label: "🏠 Return to Main Menu", actionId: "menu" },
          ];
          break;

        case "give_online":
          botText = `Tap the "ONLINE GIVING & TITHE PORTAL" section on our homepage or click the give button to complete your secure payment. God bless your generous seed!`;
          nextOptions = [
            { label: "🏠 Return to Main Menu", actionId: "menu" },
          ];
          break;

        case "prayer":
          botText = `Senior Pastor Collins Ababio and our intercessory prayer team are standing with you in faith. All prayer requests are 100% confidential. Call our helpline at ${siteConfig.phone} or submit a request online.`;
          nextOptions = [
            { label: "📞 Call Helpline (+233 55 272 4685)", actionId: "phone" },
            { label: "🏠 Return to Main Menu", actionId: "menu" },
          ];
          break;

        case "phone":
          botText = `You can reach our pastoral helpline directly at ${siteConfig.phone} or email us at ${siteConfig.email}. We are here to support you!`;
          nextOptions = [
            { label: "🏠 Return to Main Menu", actionId: "menu" },
          ];
          break;

        case "menu":
        default:
          botText = `Here is our main menu. What would you like to explore next?`;
          nextOptions = initialOptions;
          break;
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botText,
        options: nextOptions,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMsg]);
    const query = input;
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let responseText = `Thank you for reaching out! For immediate assistance, please call Senior Pastor Collins Ababio's helpline at ${siteConfig.phone} or visit us at ${siteConfig.address}.`;

      if (lower.includes("location") || lower.includes("where") || lower.includes("address")) {
        responseText = `We are located at ${siteConfig.address}. Reserved guest parking is available near the main entrance!`;
      } else if (lower.includes("time") || lower.includes("sunday") || lower.includes("when")) {
        responseText = `Sunday Services: 1st Service 9:00 AM – 10:30 AM, 2nd Service 11:00 AM – 12:30 PM. Wednesday Midweek Bible Study is 6:30 PM.`;
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: responseText,
        options: [
          { label: "📍 Campus Location", actionId: "location" },
          { label: "⏰ Service Times", actionId: "services" },
          { label: "🏠 Return to Main Menu", actionId: "menu" },
        ],
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Right) */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative group bg-primary-600 hover:bg-primary-700 text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center gap-2.5 border-2 border-amber-300 transition-colors"
          aria-label="Toggle Temple Assistant AI Chat Bot"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-primary-600 animate-pulse" />
          </div>
          <span className="hidden sm:inline-block font-extrabold text-xs uppercase tracking-wider pr-1">
            Church Guide AI
          </span>
        </motion.button>
      </div>

      {/* Floating Corner Chat Window (82vh Height & ~65% Desktop Width) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 w-[92vw] sm:w-[68vw] md:w-[60vw] max-w-2xl h-[82vh] max-h-[720px] bg-white rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden"
          >
          
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 text-white p-4 px-6 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-extrabold text-sm border-2 border-white shadow-sm">
                <Bot className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                  <span>Temple Concierge AI</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-xs text-slate-200 font-medium">
                  {siteConfig.name} • Offinso, Kumasi
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMessages([initialBotMessage])}
                className="p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
                title="Restart Conversation Storyline"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
                aria-label="Close Chat Bot"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Messages Stream Area */}
          <div className="p-4 sm:p-6 flex-grow overflow-y-auto space-y-5 bg-slate-50/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm ${
                  msg.sender === "user" ? "bg-slate-900 text-white" : "bg-primary-600 text-white"
                }`}>
                  {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble + In-Bubble Storyline Options */}
                <div className="space-y-3 max-w-[85%] sm:max-w-[78%]">
                  <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-primary-600 text-white rounded-tr-none shadow-md font-medium"
                      : "bg-white text-slate-800 border border-slate-200/90 rounded-tl-none shadow-sm font-normal"
                  }`}>
                    <p>{msg.text}</p>
                  </div>

                  {/* Storyline Decision Buttons embedded in Bot Message */}
                  {msg.sender === "bot" && msg.options && msg.options.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {msg.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(opt)}
                          className="w-full text-left p-3 rounded-xl bg-white hover:bg-primary-50 border border-slate-200/90 hover:border-primary-300 text-slate-800 hover:text-primary-700 font-extrabold text-xs transition-all shadow-subtle hover:shadow-md flex items-center justify-between group"
                        >
                          <span className="truncate pr-1">{opt.label}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary-600 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white text-slate-400 p-3 px-4 rounded-2xl border border-slate-200 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce delay-100" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce delay-200" />
                  <span className="ml-1.5 text-xs text-slate-500 font-medium">Temple Bot is preparing your story option...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Bottom Custom Text Input Bar */}
          <form
            onSubmit={handleCustomSubmit}
            className="p-3.5 px-4 bg-white border-t border-slate-200 flex items-center gap-3 flex-shrink-0"
          >
            <input
              type="text"
              placeholder="Or type a custom question here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow px-4 py-3 rounded-xl bg-slate-100 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-3.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl shadow-md transition-all disabled:opacity-40 flex-shrink-0"
              aria-label="Send Custom Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
