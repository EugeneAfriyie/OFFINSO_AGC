import { HeroSection } from "@/components/home/HeroSection";
import { SanctuaryTickerBar } from "@/components/home/SanctuaryTickerBar";
import { ChurchImpactMetrics } from "@/components/home/ChurchImpactMetrics";
import { ServiceTimesSection } from "@/components/home/ServiceTimesSection";
import { PastoralWelcomeSection } from "@/components/home/PastoralWelcomeSection";
import { QuotesSection } from "@/components/home/QuotesSection";
import { MissionVisionSection } from "@/components/home/MissionVisionSection";
import { NewVisitorSection } from "@/components/home/NewVisitorSection";
import { SermonSection } from "@/components/home/SermonSection";
import { EventsSection } from "@/components/home/EventsSection";
import { MinistriesSection } from "@/components/home/MinistriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { GivingSection } from "@/components/home/GivingSection";
import { PrayerSection } from "@/components/home/PrayerSection";
import { LocationMapSection } from "@/components/home/LocationMapSection";

export default function HomePage() {
  return (
    <>
      {/* ACT 1: GRAND EDITORIAL HERO & MARQUEE ANNOUNCEMENTS */}
      <HeroSection />
      <SanctuaryTickerBar />

      {/* ACT 2: VERIFIED KINGDOM IMPACT & AUTHORITY METRICS */}
      <ChurchImpactMetrics />

      {/* ACT 3: INTERACTIVE SERVICE TIMES & GATHERING GUIDE */}
      <ServiceTimesSection />

      {/* ACT 4: PASTORAL HEART & INSPIRATION */}
      <PastoralWelcomeSection />
      <QuotesSection />

      {/* ACT 5: IDENTITY & VISITOR EXPERIENCE */}
      <MissionVisionSection />
      <NewVisitorSection />

      {/* ACT 6: MEDIA & SERMON BROADCAST */}
      <SermonSection />

      {/* ACT 7: COMMUNITY & MINISTRIES */}
      <EventsSection />
      <MinistriesSection />

      {/* ACT 8: FRUIT & STEWARDSHIP */}
      <TestimonialsSection />
      <GivingSection />

      {/* ACT 9: PASTORAL CARE & LOCATION FINALE */}
      <PrayerSection />
      <LocationMapSection />
    </>
  );
}
