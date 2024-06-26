import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonial from "@/components/MusicSchoolTestimonial";
import WhyChooseUs from "@/components/WhyChoseUs";


export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
          <HeroSection/>
          <FeaturedCourses/>
          <WhyChooseUs/>
          <MusicSchoolTestimonial/>

      </main>
    </>
  );
}
