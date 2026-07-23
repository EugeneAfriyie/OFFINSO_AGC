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

const cloudinaryUrls = [
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829370/719426116_2146544399238922_3597906351030759468_n_plhbav.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829367/718936053_27430374969971966_3646005875504049411_n_mnvbqk.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829364/718776675_1302282458694376_2352107280866221612_n_jrmrb9.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829362/718311251_1293859642946240_9206165397037896971_n_inh5l8.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829359/718099416_1990092631647472_6531422236264697459_n_umq2nq.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829357/717963501_1207688784722182_2022130942501843841_n_rbgecw.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829354/717960070_1021467773643276_6370392498260502872_n_zbondg.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829352/717959501_27039810325686702_1524478505022352236_n_wdkaa5.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829349/717938838_2176111146289106_5941974683589581417_n_i2ijmf.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829347/717910477_1537066584695555_4492341828459318653_n_owkqgs.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829344/717596063_1914887769220101_2241004413717343549_n_wf4u54.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829342/717582482_1505158221307778_7554155079297790187_n_xxdjbp.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829340/717358032_4001226316852747_6129081373910318591_n_jsbbon.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829337/717187294_1794731558361010_3444483635550505715_n_bzvl3v.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829335/717170061_977353951879415_5494597188410063536_n_lgvpcg.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829333/717038864_1681035139804449_248913445583641359_n_f1rg1k.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829330/716898202_1003775765720488_2110746001862204389_n_kq6c8x.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829328/716591281_4419690341653208_5079026505594833969_n_ibhedy.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829325/716591275_1591006275844005_350702273487626896_n_afvgah.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829323/716551303_2249437462552639_4252900274227205685_n_cjmoec.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829321/716510779_1322872963150883_5152299308424259092_n_rgz73n.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829319/716490426_1524911519373339_2604070248241497425_n_wlezyq.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829315/716353754_2127173528061739_9085697199758437676_n_py4p88.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829314/716091052_1521237899634615_635340699947573557_n_iyuvul.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829311/715870933_2054635552071504_7515258739314065108_n_mgrdxb.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829309/715711886_2771014596607898_700937405581073187_n_iab4ya.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829306/715494791_1237807558275179_5946497361540542531_n_xovhl2.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829304/715464670_986885671000418_952633686462347009_n_aqmtws.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829301/715441990_1027189546330864_6455057208052478394_n_up17sk.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829298/715434605_1722625652249640_1538205210890903533_n_xkrlsc.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829296/715426841_2827535454272735_633896995473572485_n_bs1gcc.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829292/715346869_1902820464067316_7688725346205695393_n_fazppo.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829290/715346771_27540687442229052_8488523061918581087_n_g03zr1.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829288/714838385_1864008231226814_6396892895979103384_n_tg8pn7.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829230/714829388_865124869388775_7007555336901307480_n_tutqzi.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829227/714715278_1696989544774706_2580317658037386641_n_g4wtxp.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829225/710827528_1011736811226856_1050823418370125464_n_ehsahp.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829223/710799563_2163981931045623_6162914761603469505_n_fze2dd.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829222/688559240_1400937482077581_6990471613443926480_n_bhodsh.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829219/688547332_1400937422077587_1014027905156086168_n_itfxgl.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829215/688111266_1400937528744243_291690960064752968_n_ntgxms.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829211/686958153_1400937492077580_479987853040969310_n_xjndtf.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829210/686192303_1400937615410901_3023629979847251849_n_hrrit8.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829209/685353515_1400937558744240_5020621293130412194_n_rhrasg.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829204/684670544_1400937622077567_6507850915536175164_n_pa7ix9.jpg",
  "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784828660/c28c371c-e097-4219-bf12-a0c709e60c70.png"
];

// Helper to optimize cloudinary URL for performance on the fly
const getOptimizedUrl = (rawUrl: string, width: number) => {
  if (!rawUrl.includes('/upload/')) return rawUrl;
  // This tells Cloudinary to automatically select the best format (WebP/AVIF), 
  // automatically compress quality, and scale it down to exactly the width we need.
  return rawUrl.replace('/upload/', `/upload/f_auto,q_auto,w_${width},c_limit/`);
};

const buildGalleryItems = (urls: string[], prefix: string, defaultTag: string) => {
  return urls.map((url, i) => {
    const randomTag = tags[(i % (tags.length - 1)) + 1]; 
    const assignedTag = i < 5 ? defaultTag : randomTag;

    return {
      id: `${prefix}-${i}`,
      rawUrl: url,
      // For the mosaic grid, w_600 is plenty fast and sharp enough
      url: getOptimizedUrl(url, 600),
      // For the fullscreen lightbox, we need higher resolution
      fullUrl: getOptimizedUrl(url, 1600),
      // For the tiny thumbnail strip, we need very small sizes for instant loading
      thumbUrl: getOptimizedUrl(url, 150),
      span: getMosaicSpan(i),
      tag: assignedTag,
      title: `Gallery Moment ${i + 1}`,
      date: `July ${1 + (i % 30)}, ${assignedTag === '2025' ? '2025' : '2026'}`,
    };
  });
};

// Split the 46 items equally into the two columns
const initialLeftItems = buildGalleryItems(cloudinaryUrls.slice(0, 23), "L", "Sunday Service");
const initialRightItems = buildGalleryItems(cloudinaryUrls.slice(23), "R", "Youth");

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
                <img src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829344/717596063_1914887769220101_2241004413717343549_n_wf4u54.jpg" alt="Artistic 1" className="w-full h-full object-cover saturate-50 hover:saturate-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-primary-900/20 mix-blend-overlay pointer-events-none" />
              </div>

              {/* Image 2 - Middle Front */}
              <div className="absolute bottom-10 left-10 w-[50%] aspect-square rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] -rotate-3 hover:-rotate-6 hover:scale-105 transition-all duration-700 border-4 border-slate-900 z-20">
                <img src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829298/715434605_1722625652249640_1538205210890903533_n_xkrlsc.jpg" alt="Artistic 2" className="w-full h-full object-cover saturate-50 hover:saturate-100 transition-all duration-700" />
              </div>

              {/* Image 3 - Accent Float */}
              <div className="absolute top-24 left-[30%] w-[25%] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl -rotate-12 hover:-rotate-0 hover:scale-110 transition-all duration-700 border-2 border-white/10 z-30">
                <img src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1784829330/716898202_1003775765720488_2110746001862204389_n_kq6c8x.jpg" alt="Artistic 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
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
              src={visibleActiveItems[lightbox.index].fullUrl} 
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
                  <img src={item.thumbUrl} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
          
        </div>
      )}

    </div>
  );
}
