"use client";

import { useState, useMemo } from "react";
import { Camera, X, ChevronLeft, ChevronRight, Filter, ChevronDown, Calendar, Tag } from "lucide-react";

// --- MOCK DATA GENERATOR ---
const tags = ["All", "2026", "2025", "Sunday Service", "Youth", "Outreach", "Baptism"];

const getMosaicSpan = (index: number) => {
  const pattern = [
    "col-span-2 row-span-2", // Large square
    "col-span-1 row-span-2", // Tall
    "col-span-1 row-span-1", // Normal
    "col-span-2 row-span-1", // Wide
    "col-span-1 row-span-1", // Normal
    "col-span-1 row-span-1", // Normal
    "col-span-2 row-span-2", // Large square
    "col-span-2 row-span-1", // Wide
    "col-span-1 row-span-1", // Normal
    "col-span-1 row-span-2", // Tall
  ];
  return pattern[index % pattern.length];
};

const generateItems = (prefix: string, count: number, defaultTag: string) => {
  return Array.from({ length: count }).map((_, i) => {
    // Deterministic tag selection to avoid Next.js hydration mismatch
    const randomTag = tags[(i % (tags.length - 1)) + 1]; // Pick a pseudo-random tag deterministically except 'All'
    // Ensure the first few match the default tag so columns aren't empty initially
    const assignedTag = i < 5 ? defaultTag : randomTag;

    return {
      id: `${prefix}-${i}`,
      url: `https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=800&q=80&auto=format&fit=crop`, 
      span: getMosaicSpan(i),
      tag: assignedTag,
      title: `Gallery Moment ${i + 1}`,
      date: `July ${1 + (i % 30)}, ${assignedTag === '2025' ? '2025' : '2026'}`,
    };
  });
};

// Generate 45 items per side to demonstrate pagination
const initialLeftItems = generateItems("L", 45, "Sunday Service");
const initialRightItems = generateItems("R", 45, "Youth");

export default function GalleryPage() {
  const [activeTag, setActiveTag] = useState("All");
  
  const [leftVisible, setLeftVisible] = useState(15);
  const [rightVisible, setRightVisible] = useState(15);

  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    side: "left" | "right";
    index: number;
  }>({ isOpen: false, side: "left", index: 0 });

  // Filter items based on active tag
  const filteredLeftItems = useMemo(() => {
    if (activeTag === "All") return initialLeftItems;
    return initialLeftItems.filter(item => item.tag === activeTag);
  }, [activeTag]);

  const filteredRightItems = useMemo(() => {
    if (activeTag === "All") return initialRightItems;
    return initialRightItems.filter(item => item.tag === activeTag);
  }, [activeTag]);

  // Handle Load More
  const loadMoreLeft = () => setLeftVisible(prev => Math.min(prev + 10, filteredLeftItems.length));
  const loadMoreRight = () => setRightVisible(prev => Math.min(prev + 10, filteredRightItems.length));

  // Handle Lightbox Navigation
  const activeItems = lightbox.side === "left" ? filteredLeftItems : filteredRightItems;
  const visibleActiveItems = activeItems.slice(0, lightbox.side === "left" ? leftVisible : rightVisible);

  const openLightbox = (side: "left" | "right", index: number) => {
    setLightbox({ isOpen: true, side, index });
  };

  const closeLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox(prev => ({ ...prev, index: (prev.index + 1) % visibleActiveItems.length }));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox(prev => ({ ...prev, index: (prev.index - 1 + visibleActiveItems.length) % visibleActiveItems.length }));
  };

  const selectThumbnail = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    setLightbox(prev => ({ ...prev, index: idx }));
  };

  // Reset pagination when filter changes
  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    setLeftVisible(15);
    setRightVisible(15);
  };

  return (
    <div className="min-h-screen bg-slate-950 pb-20 font-sans">
      {/* HIGH ARTISTIC HERO SECTION */}
      <div className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-32 mb-16 overflow-hidden bg-slate-950 border-b border-white/5">
        {/* Ambient Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-900/30 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-amber-900/15 blur-[150px] pointer-events-none" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

        <div className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Artistic Typography Column */}
            <div className="lg:col-span-6 space-y-8 relative z-20 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-slate-300 text-[10px] font-black uppercase tracking-[0.3em] border border-white/10 shadow-sm backdrop-blur-md">
                <Camera className="w-3.5 h-3.5 text-amber-500" />
                <span>The Visual Archive</span>
              </div>
              
              <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black text-white tracking-tighter leading-[0.9] uppercase">
                Moments <br/>
                <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-primary-400 tracking-normal normal-case">in Time</span>
              </h1>
              
              <div className="pl-6 border-l-2 border-primary-500/50">
                <p className="text-base sm:text-lg text-slate-400 font-medium max-w-md leading-relaxed">
                  An elegant retrospective of our church family. A tightly-packed, seamless mosaic of the events, worship, and love that define our community.
                </p>
              </div>
            </div>

            {/* Overlapping Artistic Collage Column */}
            <div className="lg:col-span-6 relative h-[400px] sm:h-[500px] w-full hidden lg:block">
              {/* Image 1 - Back */}
              <div className="absolute top-10 right-10 w-[55%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-6 hover:rotate-12 hover:scale-105 transition-all duration-700 border-4 border-slate-900 z-10">
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80" alt="Artistic 1" className="w-full h-full object-cover saturate-50 hover:saturate-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-primary-900/20 mix-blend-overlay pointer-events-none" />
              </div>

              {/* Image 2 - Middle Front */}
              <div className="absolute bottom-10 left-10 w-[50%] aspect-square rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] -rotate-3 hover:-rotate-6 hover:scale-105 transition-all duration-700 border-4 border-slate-900 z-20">
                <img src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80" alt="Artistic 2" className="w-full h-full object-cover saturate-50 hover:saturate-100 transition-all duration-700" />
              </div>

              {/* Image 3 - Accent Float */}
              <div className="absolute top-24 left-[30%] w-[25%] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl -rotate-12 hover:-rotate-0 hover:scale-110 transition-all duration-700 border-2 border-white/10 z-30">
                <img src="https://images.unsplash.com/photo-1534005831682-15bd8eb88172?w=500&q=80" alt="Artistic 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER TAGS */}
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 mb-12 sm:mb-16">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-2 text-slate-400 mr-2">
            <Filter className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Filter:</span>
          </div>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all border shadow-sm flex items-center gap-2 ${
                activeTag === tag
                  ? "bg-white text-slate-900 border-white scale-105"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 border-slate-800 hover:text-white"
              }`}
            >
              {tag !== "All" && <Tag className={`w-3 h-3 ${activeTag === tag ? "text-slate-900" : "text-slate-500"}`} />}
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* TWO-COLUMN MOSAIC */}
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* LEFT COLUMN: Worship & Services */}
          <div className="flex flex-col gap-6">
            <div className="flex items-end justify-between border-b border-slate-800 pb-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Worship & Services</h2>
              <span className="text-xs font-bold text-slate-500">{filteredLeftItems.length} Photos</span>
            </div>
            
            {filteredLeftItems.length > 0 ? (
              <>
                <div className="grid grid-cols-4 auto-rows-[100px] sm:auto-rows-[140px] md:auto-rows-[160px] lg:auto-rows-[130px] xl:auto-rows-[150px] gap-1.5">
                  {filteredLeftItems.slice(0, leftVisible).map((item, idx) => (
                    <div 
                      key={item.id} 
                      onClick={() => openLightbox("left", idx)}
                      className={`relative overflow-hidden bg-slate-900 group cursor-pointer ${item.span}`}
                    >
                      <img 
                        src={item.url} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex flex-col justify-end p-4">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                           <span className="inline-block px-2 py-0.5 bg-primary-600 text-white text-[9px] font-black uppercase tracking-wider rounded-sm mb-1">{item.tag}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {leftVisible < filteredLeftItems.length && (
                  <button 
                    onClick={loadMoreLeft}
                    className="w-full mt-4 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center gap-2 text-white font-bold transition-colors"
                  >
                    <ChevronDown className="w-5 h-5" />
                    Load 10 More Photos
                  </button>
                )}
              </>
            ) : (
              <div className="py-20 text-center text-slate-500 font-medium bg-slate-900/30 rounded-2xl border border-slate-800">
                No images found for tag "{activeTag}" in this section.
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Community & Youth */}
          <div className="flex flex-col gap-6">
            <div className="flex items-end justify-between border-b border-slate-800 pb-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Community & Youth</h2>
              <span className="text-xs font-bold text-slate-500">{filteredRightItems.length} Photos</span>
            </div>
            
            {filteredRightItems.length > 0 ? (
              <>
                <div className="grid grid-cols-4 auto-rows-[100px] sm:auto-rows-[140px] md:auto-rows-[160px] lg:auto-rows-[130px] xl:auto-rows-[150px] gap-1.5">
                  {filteredRightItems.slice(0, rightVisible).map((item, idx) => (
                    <div 
                      key={item.id} 
                      onClick={() => openLightbox("right", idx)}
                      className={`relative overflow-hidden bg-slate-900 group cursor-pointer ${item.span}`}
                    >
                      <img 
                        src={item.url} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex flex-col justify-end p-4">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                           <span className="inline-block px-2 py-0.5 bg-primary-600 text-white text-[9px] font-black uppercase tracking-wider rounded-sm mb-1">{item.tag}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {rightVisible < filteredRightItems.length && (
                  <button 
                    onClick={loadMoreRight}
                    className="w-full mt-4 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center gap-2 text-white font-bold transition-colors"
                  >
                    <ChevronDown className="w-5 h-5" />
                    Load 10 More Photos
                  </button>
                )}
              </>
            ) : (
              <div className="py-20 text-center text-slate-500 font-medium bg-slate-900/30 rounded-2xl border border-slate-800">
                No images found for tag "{activeTag}" in this section.
              </div>
            )}
          </div>

        </div>
      </div>
      
      {/* RESPONSIVE FULLSCREEN LIGHTBOX WITH THUMBNAILS */}
      {lightbox.isOpen && visibleActiveItems.length > 0 && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950 flex flex-col"
          onClick={closeLightbox}
        >
          {/* Header Bar */}
          <div className="flex-none h-16 sm:h-20 flex items-center justify-between px-4 sm:px-8 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm sm:text-lg">
                {visibleActiveItems[lightbox.index].title}
              </span>
              <span className="text-slate-400 text-xs flex items-center gap-1 mt-0.5">
                <Calendar className="w-3 h-3" /> {visibleActiveItems[lightbox.index].date}
                <span className="mx-2">•</span>
                <Tag className="w-3 h-3" /> {visibleActiveItems[lightbox.index].tag}
              </span>
            </div>
            
            <button 
              onClick={closeLightbox}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Main Image Area */}
          <div className="flex-1 min-h-0 relative flex items-center justify-center p-4">
            <button 
              className="absolute left-2 sm:left-6 w-10 h-10 sm:w-14 sm:h-14 bg-black/60 hover:bg-black/90 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors border border-white/10 z-10"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            
            <img 
              src={visibleActiveItems[lightbox.index].url} 
              alt="Fullscreen view"
              className="w-full h-full object-contain drop-shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              className="absolute right-2 sm:right-6 w-10 h-10 sm:w-14 sm:h-14 bg-black/60 hover:bg-black/90 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors border border-white/10 z-10"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Thumbnail Strip Footer */}
          <div 
            className="flex-none h-24 sm:h-32 bg-slate-950 border-t border-white/10 p-3 sm:p-4 overflow-x-auto overflow-y-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-2 h-full items-center">
              {visibleActiveItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={(e) => selectThumbnail(e, idx)}
                  className={`flex-shrink-0 h-full aspect-square rounded-md overflow-hidden border-2 transition-all ${
                    idx === lightbox.index ? "border-primary-500 opacity-100 scale-105 shadow-xl" : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={item.url} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
        </div>
      )}

    </div>
  );
}
