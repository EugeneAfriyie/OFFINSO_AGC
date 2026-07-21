import { HeroSection } from "@/components/home/HeroSection";
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
      {/* ACT 1: WELCOME & IMMEDIATE CLARITY */}
      {/* Section 9: Master Hero Section */}
      <HeroSection />

      {/* Section 10: Service Times & Location Bar */}
      <ServiceTimesSection />

      {/* ACT 2: PASTORAL HEART & INSPIRATION */}
      {/* Section 11: Pastoral Welcome Section */}
      <PastoralWelcomeSection />

      {/* Section 11.5: Pastoral & Scripture Quotes Showcase */}
      <QuotesSection />

      {/* ACT 3: IDENTITY & VISITOR EXPERIENCE */}
      {/* Section 12: Mission & Vision Section */}
      <MissionVisionSection />

      {/* Section 13: New Visitor Experience Section */}
      <NewVisitorSection />

      {/* ACT 4: MEDIA & SERMON SHOWCASE */}
      {/* Section 14: Sermon & Media Section */}
      <SermonSection />

      {/* ACT 5: COMMUNITY & MINISTRIES */}
      {/* Section 15: Upcoming Events Section */}
      <EventsSection />

      {/* Section 16: Ministries Showcase Section */}
      <MinistriesSection />

      {/* ACT 6: FRUIT & STEWARDSHIP */}
      {/* Section 18: Testimonials & Community Impact Section */}
      <TestimonialsSection />

      {/* Section 17: Online Giving & Tithing Section */}
      <GivingSection />

      {/* ACT 7: CARE & LOCATION FINALE */}
      {/* Section 19: Prayer Request & Pastoral Support Banner */}
      <PrayerSection />

      {/* Section 21: Campus Map & Directions Banner */}
      <LocationMapSection />
    </>
  );
}
