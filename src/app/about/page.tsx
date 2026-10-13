"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  BookOpen, 
  Heart, 
  ShieldCheck, 
  Users, 
  Flame, 
  Languages,
  Crown,
  MapPin, 
  Calendar, 
  ArrowRight,
  Cross,
  Sun,
  Shield,
  Target,
  Compass,
  Star,
  Car,
  Smile,
  Baby,
  HeartHandshake,
  Globe,
  CheckCircle2,
  Bookmark,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useModal } from "@/contexts/ModalContext";

export default function AboutPage() {
  const { openModal } = useModal();
  const [showAllTruths, setShowAllTruths] = useState(false);
  const [expandedTruths, setExpandedTruths] = useState<Record<number, boolean>>({});

  const toggleTruthDescription = (index: number) => {
    setExpandedTruths((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const churchCulture = [
    {
      icon: Flame,
      title: "Spirit-Empowered Prayer",
      description: "Every gathering is saturated in fervent, Spirit-led prayer and Pentecostal worship, inviting the tangible presence of God.",
      badge: "Prayer First",
    },
    {
      icon: BookOpen,
      title: "Uncompromising Gospel Truth",
      description: "Grounded in the Holy Bible, Senior Pastor Collins Ababio teaches practical, life-transforming scriptures for daily victory.",
      badge: "Biblical Foundation",
    },
    {
      icon: HeartHandshake,
      title: "Authentic Family Fellowship",
      description: "A warm, intergenerational church family in Offinso where every guest is embraced with love, dignity, and true belonging.",
      badge: "Radical Hospitality",
    },
    {
      icon: Globe,
      title: "Compassionate Community Outreach",
      description: "Demonstrating Christ's love beyond our sanctuary walls through medical fairs, food relief, and youth empowerment in Offinso.",
      badge: "Kingdom Impact",
    },
  ];

  // ALL 16 FUNDAMENTAL TRUTHS OF ASSEMBLIES OF GOD GHANA
  const fundamentalTruths = [
    {
      num: "01",
      title: "The Scriptures Inspired",
      scripture: "2 Timothy 3:15-17",
      text: "The Bible is the inspired Word of God, a revelation from God to man, the infallible rule of faith and conduct, superior to conscience and reason.",
      icon: BookOpen,
    },
    {
      num: "02",
      title: "The One True God",
      scripture: "Deuteronomy 6:4",
      text: "The one true God has revealed Himself as the eternally self-existent 'I AM', the Creator of heaven and earth, embodied as Father, Son, and Holy Spirit.",
      icon: Sun,
    },
    {
      num: "03",
      title: "Deity of Lord Jesus Christ",
      scripture: "Matthew 1:23",
      text: "The Lord Jesus Christ is the eternal Son of God. We affirm His virgin birth, sinless life, miracles, substitutionary death, bodily resurrection, and exaltation.",
      icon: Cross,
    },
    {
      num: "04",
      title: "The Fall of Man",
      scripture: "Genesis 1:26-27",
      text: "Man was created good and upright; for God said, 'Let us make man in our image.' However, man by voluntary transgression fell and thereby incurred spiritual death.",
      icon: Heart,
    },
    {
      num: "05",
      title: "The Salvation of Man",
      scripture: "Luke 24:47",
      text: "Man's only hope of redemption is through the shed blood of Jesus Christ the Son of God, received through repentance toward God and faith in Christ.",
      icon: ShieldCheck,
    },
    {
      num: "06",
      title: "Ordinances of the Church",
      scripture: "Mark 16:16",
      text: "Water Baptism by immersion commanded for all who repent, and Holy Communion (Lord's Supper) consisting of the elements expressing our sharing the divine nature.",
      icon: Bookmark,
    },
    {
      num: "07",
      title: "Baptism in the Holy Spirit",
      scripture: "Acts 1:4-8",
      text: "All believers are entitled to and should ardently expect and earnestly seek the promise of the Father, enduing us with Pentecostal power for witness and service.",
      icon: Flame,
    },
    {
      num: "08",
      title: "Initial Physical Evidence",
      scripture: "Acts 2:4",
      text: "The baptism of believers in the Holy Spirit is witnessed by the initial physical sign of speaking with other tongues as the Spirit of God gives utterance.",
      icon: Languages,
    },
    {
      num: "09",
      title: "Sanctification",
      scripture: "Romans 12:1-2",
      text: "Sanctification is an act of separation from that which is evil, and of dedication unto God. By the power of the Holy Spirit we obey the command: 'Be ye holy.'",
      icon: Shield,
    },
    {
      num: "10",
      title: "The Church & Its Mission",
      scripture: "Ephesians 1:22-23",
      text: "The Church is the Body of Christ, the habitation of God through the Spirit, called to evangelize the world, worship God, and build a body of saints in Christ.",
      icon: Users,
    },
    {
      num: "11",
      title: "The Ministry",
      scripture: "Ephesians 4:11-16",
      text: "A divinely called and scripturally ordained ministry has been provided by our Lord for the fourfold purpose of leading the Church in evangelism and worship.",
      icon: Compass,
    },
    {
      num: "12",
      title: "Divine Healing",
      scripture: "Isaiah 53:4-5",
      text: "Divine healing is an integral part of the gospel. Deliverance from sickness is provided for in the atonement, and is the privilege of all believers.",
      icon: HeartHandshake,
    },
    {
      num: "13",
      title: "The Blessed Hope (Rapture)",
      scripture: "1 Thessalonians 4:16-17",
      text: "The resurrection of those who have fallen asleep in Christ and their translation together with those who are alive at the coming of the Lord is the blessed hope.",
      icon: Star,
    },
    {
      num: "14",
      title: "Millennial Reign of Christ",
      scripture: "Revelation 20:1-6",
      text: "The second coming of Christ includes the rapture of the saints, followed by the visible return of Christ with His saints to reign on earth for one thousand years.",
      icon: Target,
    },
    {
      num: "15",
      title: "The Final Judgment",
      scripture: "Revelation 20:11-15",
      text: "There will be a final judgment in which the wicked dead will be raised and judged according to their works, receiving everlasting punishment.",
      icon: ShieldCheck,
    },
    {
      num: "16",
      title: "New Heavens & New Earth",
      scripture: "2 Peter 3:13",
      text: "'We, according to His promise, look for new heavens and a new earth wherein dwelleth righteousness.'",
      icon: Globe,
    },
  ];

  const displayedTruths = showAllTruths ? fundamentalTruths : fundamentalTruths.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
              <Crown className="w-4 h-4 text-primary-600" />
              <span>ABOUT THE KING'S TEMPLE ASSEMBLIES OF GOD</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
              A House of Revival, Hope & Purpose in Offinso
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
              Serving Offinso, Kumasi, and Ghana since April 9, 2019 under the spiritual leadership of Senior Pastor Collins Ababio.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openModal("plan-visit")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Plan Your Visit This Sunday</span>
              </button>

              <a
                href="#beliefs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-xl border border-slate-200 shadow-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-primary-600" />
                <span>Explore Statement of Faith</span>
              </a>
            </div>

          </div>

          <div className="mt-14 max-w-5xl mx-auto relative aspect-[16/8] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
            <Image
              src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1784559187/326fa0fb-f0b5-4856-aaf8-82bff6ea5e05.png"
              alt="The King's Temple A/G Sanctuary Worship Experience"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-black text-slate-950 uppercase tracking-wider bg-amber-400 px-3 py-1 rounded-full">
                  OFFINSO CATHEDRAL SANCTUARY
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Main Cathedral Highway • Offinso Toll Booth
                </h3>
              </div>

              <div className="text-xs font-extrabold text-amber-300 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                Established April 9, 2019
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Church History & Foundation Story */}
      <section id="history" className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
                <Calendar className="w-3.5 h-3.5 text-primary-600" />
                <span>ESTABLISHED APRIL 9, 2019</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Our Journey of Faith in Offinso
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Founded on <strong>April 9, 2019</strong> under the visionary leadership of <strong>Senior Pastor Collins Ababio</strong>, {siteConfig.name} began with a burning conviction to establish a vibrant, Pentecostal worship center at the Offinso Toll Booth along the Main Cathedral Highway.
                </p>
                <p>
                  From a humble gathering of dedicated believers, God has faithfully expanded our church family into a thriving cathedral congregation. Over the past 7+ years, hundreds of individuals and families across Offinso and Kumasi have experienced salvation, divine healing, and spiritual transformation.
                </p>
                <p>
                  Today, as an official church under the Assemblies of God Ghana framework, we continue to stand as a beacon of truth, prayer, and compassionate community outreach.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-primary-600">2019</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase">Year Founded</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-amber-600">2.4K+</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase">Community</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-600">6 Teams</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase">Ministries</div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 space-y-6 relative overflow-hidden">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-amber-300 shadow-md bg-slate-800">
                  <Image
                    src={siteConfig.pastorImage}
                    alt={siteConfig.seniorPastor}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-white">{siteConfig.seniorPastor}</h3>
                  <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                    Senior Pastor & Founder
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal pt-2">
                    "We exist to raise a Spirit-empowered generation that knows God intimately and transforms society through love and righteousness."
                  </p>
                </div>

                <Link
                  href="/leadership"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl transition-all"
                >
                  <span>Meet Our Leadership Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. KINGDOM CULTURE & CORE PILLARS */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
              <Heart className="w-3.5 h-3.5 text-primary-600" />
              <span>OUR KINGDOM CULTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              The Heart & Culture of Our House
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Discover the core values that shape our worship services, community fellowship, and spiritual family in Offinso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {churchCulture.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-primary-300 transition-all flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center font-bold border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider bg-amber-100 px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-primary-700 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. STATEMENT OF FAITH — CLICK CARD TO EXPAND DESCRIPTION */}
      <section id="beliefs" className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
              <ShieldCheck className="w-3.5 h-3.5 text-primary-600" />
              <span>DOCTRINAL FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What We Believe & Teach
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Our faith is firmly anchored in the unadulterated Word of God and the 16 Fundamental Truths of the Assemblies of God Ghana. <span className="text-primary-600 font-bold">Click any card to read its full description.</span>
            </p>
          </div>

          {/* 2-Column Mobile / 3-Column Desktop Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-10">
            {displayedTruths.map((item, idx) => {
              const Icon = item.icon;
              const isExpanded = !!expandedTruths[idx];

              return (
                <div
                  key={idx}
                  onClick={() => toggleTruthDescription(idx)}
                  className={`cursor-pointer rounded-2xl sm:rounded-3xl border p-4 sm:p-6 transition-all flex flex-col justify-between group space-y-3 select-none ${
                    isExpanded 
                      ? "bg-white border-primary-500 shadow-xl ring-2 ring-primary-500/20" 
                      : "bg-slate-50 hover:bg-white border-slate-200 hover:border-primary-300 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="space-y-2.5 sm:space-y-3">
                    
                    {/* Top Number Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold shadow-sm border transition-colors ${
                        isExpanded ? "bg-primary-600 text-white border-primary-600" : "bg-white text-primary-600 border-slate-200 group-hover:bg-primary-600 group-hover:text-white"
                      }`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] sm:text-xs font-black text-slate-400 tracking-widest font-mono">
                          {item.num}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-primary-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-primary-600" />
                        )}
                      </div>
                    </div>

                    {/* Belief Title */}
                    <h3 className="text-xs sm:text-base font-extrabold text-slate-900 group-hover:text-primary-700 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Scripture Reference */}
                    <div className="text-[10px] sm:text-[11px] font-bold text-amber-700 uppercase tracking-wider bg-amber-100/70 px-2 py-0.5 rounded-md sm:rounded-full inline-block">
                      {item.scripture}
                    </div>

                    {/* Interactive Description Text (toggled on click) */}
                    {isExpanded ? (
                      <div className="pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal animate-fadeIn">
                        {item.text}
                      </div>
                    ) : (
                      <div className="text-[10px] sm:text-xs font-bold text-primary-600 flex items-center gap-1 pt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                        <span>Tap to read description</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Toggle Expand Button */}
          <div className="text-center mb-14">
            <button
              onClick={() => setShowAllTruths(!showAllTruths)}
              className="inline-flex items-center gap-2 bg-primary-50 hover:bg-primary-100 text-primary-700 font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border border-primary-200 transition-all shadow-sm"
            >
              <span>{showAllTruths ? "Show Less" : "Show All 16 Fundamental Truths"}</span>
              {showAllTruths ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Assemblies of God Covenant Seal Callout Banner */}
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-primary-900 via-primary-800 to-navy-950 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 text-amber-300 text-xs font-black uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>ASSEMBLIES OF GOD GHANA DOCTRINAL SEAL</span>
              </div>
              <h4 className="text-lg font-extrabold text-white">
                Anchored in 100+ Years of Pentecostal Revival
              </h4>
              <p className="text-xs text-slate-200 max-w-xl">
                The King's Temple A/G adheres faithfully to all 16 non-negotiable doctrines of the Assemblies of God Ghana.
              </p>
            </div>

            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all whitespace-nowrap flex-shrink-0"
            >
              <span>Learn About Leadership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Plan a Visit Callout Bar */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-2xl font-extrabold text-white">Ready to Experience Our Service?</h3>
            <p className="text-xs text-slate-200">Join us this Sunday at 9:00 AM or 11:00 AM at Offinso Toll Booth, Kumasi.</p>
          </div>

          <button
            onClick={() => openModal("plan-visit")}
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-all"
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            <span>Plan Your Visit This Sunday</span>
          </button>
        </div>
      </section>

    </div>
  );
}
