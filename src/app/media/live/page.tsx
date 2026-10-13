"use client";

import { useState, useEffect } from "react";
import { 
  Radio, 
  Users, 
  Clock, 
  MessageCircle, 
  BookOpen, 
  Heart, 
  Share2, 
  Calendar,
  Send,
  ChevronRight,
  MonitorPlay
} from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function LiveStreamPage() {
  const [activeTab, setActiveTab] = useState<"chat" | "notes" | "schedule">("chat");
  const [isLive, setIsLive] = useState(true); // Toggle this to show/hide the live state
  const [chatMessage, setChatMessage] = useState("");

  // Mock chat data
  const [messages, setMessages] = useState([
    { id: 1, user: "Sarah M.", text: "Amen! Such a powerful message.", time: "10:14 AM" },
    { id: 2, user: "John D.", text: "Watching from London! God bless you all.", time: "10:15 AM" },
    { id: 3, user: "Grace K.", text: "God is good all the time.", time: "10:16 AM" },
    { id: 4, user: "David O.", text: "Hallelujah! Received it.", time: "10:17 AM" },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    setMessages([
      ...messages,
      {
        id: Date.now(),
        user: "You",
        text: chatMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setChatMessage("");
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      
      {/* HEADER SECTION */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </span>
              <span className="text-red-700 text-xs font-extrabold uppercase tracking-wider">
                {isLive ? "Currently Live" : "Offline"}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Sunday Worship Experience
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl">
              Join us live every Sunday at 8:30 AM & 10:30 AM. Experience the presence of God from anywhere in the world.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-bold shadow-sm hover:bg-amber-100 transition-colors">
              <Heart className="w-4 h-4 text-amber-600" />
              <span>Give Online</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT COLUMN: VIDEO PLAYER & DETAILS */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Video Player Container */}
            <div className="relative w-full aspect-[16/9] bg-slate-950 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex items-center justify-center group">
              {isLive ? (
                // MOCK FACEBOOK LIVE IFRAME
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                     <span className="text-white text-sm font-bold tracking-wider bg-black/60 px-4 py-2 rounded-full backdrop-blur-md">
                       Live Stream Playing
                     </span>
                  </div>
                  {/* Replace this src with your actual Facebook Live or YouTube embed URL */}
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&show_text=false&width=1280&t=0" 
                    className="w-full h-full absolute inset-0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                    loading="lazy"
                  />
                </div>
              ) : (
                // OFFLINE STATE
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-slate-900 to-slate-950">
                  <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <MonitorPlay className="w-10 h-10 text-slate-500" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">We are currently offline</h3>
                  <p className="text-slate-400 mb-8 max-w-md">Our next live broadcast begins on Sunday at 8:30 AM GMT. Check the schedule tab for more upcoming streams.</p>
                  
                  {/* Countdown Timer (Visual Mock) */}
                  <div className="flex gap-4 sm:gap-6 justify-center">
                    {[
                      { label: "DAYS", value: "02" },
                      { label: "HOURS", value: "14" },
                      { label: "MINS", value: "45" },
                      { label: "SECS", value: "12" },
                    ].map((time, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center shadow-lg mb-2">
                          <span className="text-xl sm:text-2xl font-black text-white">{time.value}</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{time.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Stream Info Meta Bar */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-lg border border-primary-200 shadow-inner">
                  {siteConfig.shortName[0]}
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">{siteConfig.name}</h3>
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-primary-600" />
                      {isLive ? "1.2k Watching" : "0 Watching"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Started 45 mins ago
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-6 py-2.5 bg-slate-900 hover:bg-primary-600 text-white text-xs font-extrabold rounded-xl transition-colors uppercase tracking-wider shadow-md">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Sermon Notes / Description below video */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <BookOpen className="w-5 h-5 text-primary-600" />
                <h4 className="font-extrabold text-slate-900 text-lg">Today's Sermon Notes</h4>
              </div>
              
              <div className="prose prose-sm prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed font-medium">
                  Welcome to our live worship service! Today, Senior Pastor Collins Ababio is teaching on <strong>"The Power of Persistent Prayer"</strong>. 
                </p>
                <div className="bg-slate-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-6">
                  <h5 className="font-bold text-slate-900 text-sm mb-1">Key Scripture: Luke 18:1-8 (NKJV)</h5>
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "Then He spoke a parable to them, that men always ought to pray and not lose heart..."
                  </p>
                </div>
                <h5 className="font-bold text-slate-900 mt-6 mb-2">Message Outline:</h5>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                  <li>The necessity of continuous fellowship with God.</li>
                  <li>Overcoming the temptation to faint in the place of prayer.</li>
                  <li>The assurance of divine justice and intervention.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE SIDEBAR */}
          <div className="lg:col-span-4 flex flex-col h-[600px] lg:h-[calc(100vh-140px)] max-h-[900px] bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            
            {/* Sidebar Tabs */}
            <div className="flex border-b border-slate-100 bg-slate-50">
              <button 
                onClick={() => setActiveTab("chat")}
                className={`flex-1 py-4 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-colors ${
                  activeTab === "chat" ? "border-primary-600 text-primary-700 bg-white" : "border-transparent text-slate-500 hover:bg-slate-100"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Live Chat
              </button>
              <button 
                onClick={() => setActiveTab("schedule")}
                className={`flex-1 py-4 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-colors ${
                  activeTab === "schedule" ? "border-primary-600 text-primary-700 bg-white" : "border-transparent text-slate-500 hover:bg-slate-100"
                }`}
              >
                <Calendar className="w-4 h-4" />
                Schedule
              </button>
            </div>

            {/* TAB CONTENT: LIVE CHAT */}
            {activeTab === "chat" && (
              <>
                <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/50">
                  <div className="text-center py-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
                      Welcome to Live Chat
                    </span>
                  </div>
                  
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex flex-col ${msg.user === "You" ? "items-end" : "items-start"}`}>
                      <div className="flex items-center gap-2 mb-1 px-1">
                        <span className={`text-[10px] font-bold ${msg.user === "You" ? "text-primary-600" : "text-slate-500"}`}>
                          {msg.user}
                        </span>
                        <span className="text-[9px] font-semibold text-slate-400">{msg.time}</span>
                      </div>
                      <div className={`px-4 py-2.5 rounded-2xl text-sm max-w-[85%] shadow-sm ${
                        msg.user === "You" 
                          ? "bg-primary-600 text-white rounded-tr-sm" 
                          : "bg-white border border-slate-200 text-slate-700 rounded-tl-sm"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-white border-t border-slate-100">
                  <form onSubmit={handleSendMessage} className="relative flex items-center">
                    <input 
                      type="text" 
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Say hello or amen..." 
                      className="w-full bg-slate-100 border-none rounded-full py-3.5 pl-5 pr-12 text-sm text-slate-700 focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all shadow-inner"
                    />
                    <button 
                      type="submit"
                      disabled={!chatMessage.trim()}
                      className="absolute right-2 w-10 h-10 bg-primary-600 hover:bg-primary-700 disabled:bg-slate-300 text-white rounded-full flex items-center justify-center transition-colors shadow-md"
                    >
                      <Send className="w-4 h-4 ml-0.5" />
                    </button>
                  </form>
                </div>
              </>
            )}

            {/* TAB CONTENT: SCHEDULE */}
            {activeTab === "schedule" && (
              <div className="flex-1 overflow-y-auto p-5 bg-white space-y-6">
                <h3 className="font-extrabold text-slate-900">Upcoming Broadcasts</h3>
                
                {[
                  { title: "Sunday 1st Service", time: "Sunday • 8:30 AM", type: "Worship Service" },
                  { title: "Sunday 2nd Service", time: "Sunday • 10:30 AM", type: "Worship Service" },
                  { title: "Prophetic Prayer Hour", time: "Wednesday • 6:30 PM", type: "Prayer Meeting" },
                  { title: "Bible Study & Discipleship", time: "Friday • 7:00 PM", type: "Teaching" },
                ].map((event, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-primary-200 transition-colors group cursor-pointer">
                    <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex flex-col items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-primary-50">
                      <Calendar className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-primary-700">{event.title}</h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{event.time}</p>
                      <span className="inline-block mt-2 text-[9px] font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
          </div>

        </div>
      </div>
    </div>
  );
}
