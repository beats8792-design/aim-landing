"use client";
import AboutCard from "@/components/cards/AboutCard";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const aboutCards = [
  {
    image: "/images/location (1).jpg",
    title: "Visa Processing",
    description:
      "Professional guidance to ensure smooth and error-free visa applications.",
  },
  {
    image: "/images/location (2).jpg",
    title: "Japanese N4 Courses",
    description:
      "Comprehensive training programs to help you achieve your target scores.",
  },
  {
    image: "/images/location (3).jpg",
    title: "Spoken Japanese",
    description:
      "Interactive classes designed to improve fluency and confidence in Japanese.",
  },
  {
    image: "/images/location (4).jpg",
    title: "Mock Tests",
    description:
      "Practice exams that simulate real test environments for better preparation.",
  },
  {
    image: "/images/location (2).jpg",
    title: "University Admission",
    description:
      "Step-by-step assistance in selecting and applying to top universities abroad.",
  },
  {
    image: "/images/location (1).jpg",
    title: "Career Counseling",
    description:
      "Personalized advice to help you choose the right study and career path.",
  },
];

export default function About() {
  return (
    <section className="py-6 md:py-8 lg:py-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">

          {/* Team Members */}
          <div className="lg:col-span-6">
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">

              {/* Member 1 */}
              <div className="text-center">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl border border-outline-variant">
                  <Image
                    src="/images/ceo (1).jpeg"
                    alt="S. M. ARIF KAMAL"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="mt-2 text-primary text-2xl sm:text-3xl font-headline-lg">
                  S. M. ARIF KAMAL
                </h2>

                <div className="mt-5 text-secondary text-sm md:text-base uppercase tracking-wider">
                  Chief Executive Officer <br /> (Name Of Representative)
                </div>
              </div>

              {/* Member 2 */}
              <div className="text-center">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl border border-outline-variant">
                  <Image
                    src="/images/ceo (2).jpeg"
                    alt="DR. HARUN OR RASHID"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="mt-2 text-primary text-2xl sm:text-3xl font-headline-lg">
                  DR. HARUN OR RASHID
                </h2>

                <div className="mt-5 text-secondary text-sm md:text-base uppercase tracking-wider">
                  Language Instructor <br /> (Name Of Representative)
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-6 text-center lg:text-left">
            <p className="text-sm sm:text-base leading-7 text-on-surface-variant mx-auto lg:mx-0">
              Welcome to AIM JAPANESE LANGUAGE ACADEMY — a trusted and professional overseas education consultancy and Japanese language training institution dedicated to helping Bangladeshi students achieve their dreams of international education and global career success.
              <br />
              <br />
              AIM JAPANESE LANGUAGE ACADEMY is under Aim Education, established with the vision of creating better educational opportunities for students who aspire to study abroad, especially in Japan. Our primary services include Japanese language education, student consultancy, overseas admission support, visa assistance, and complete guidance for studying abroad.
              <br />
              <br />
              Founded by a team of experienced professionals in overseas education, language training, and international career development, AIM JAPANESE LANGUAGE ACADEMY provides reliable, ethical, and student-focused consultancy services. We are committed to delivering professional guidance and internationally recognized educational solutions that help students successfully pursue higher education overseas.
              <br />
              <br />
              With a strong commitment to educational excellence, we carefully evaluate each student’s academic background, aptitude, financial condition, and career goals to recommend the most suitable universities, language schools, and academic pathways. Through personalized counseling sessions and detailed profile analysis, we ensure that every student receives the best possible support for making informed educational decisions.
              <br />
              <br />
              AIM JAPANESE LANGUAGE ACADEMY proudly operates a Japanese language training center in Bangladesh, where hundreds of students study Japanese language and culture every year under the supervision of experienced instructors. Our language programs are designed to prepare students for academic success, daily communication, and professional opportunities in Japan.
              </p>
          </div>

          <div className="lg:col-span-12 text-center lg:text-left">
            <p className="text-sm sm:text-base leading-7 text-on-surface-variant mx-auto lg:mx-0">
              We have maintained cooperative relationships with Japanese language schools and educational institutions in Japan.  As a complete “one-stop solution” for overseas education, AIM JAPANESE LANGUAGE ACADEMY provides comprehensive support services including:
              <br />
              <br />
              Japanese Language Courses<br />
              Student Counseling & Career Guidance<br />
              University & Language School Admission Support<br />
              Documentation & Application Assistance<br />
              SOP & Interview Preparation<br />
              Visa Processing & Embassy Support<br />
              Accommodation & Pre-Departure Guidance<br />
              Scholarship & Career Consultation<br />
              <br />
              <br />
              Our experienced counselors and professional support team work closely with students and guardians to ensure a smooth, transparent, and successful study abroad journey from the initial consultation to final visa approval.
              <br />
              <br />
              At AIM JAPANESE LANGUAGE ACADEMY, we believe education has the power to transform lives and create global opportunities. Our mission is to empower students with the knowledge, skills, and international exposure necessary to build a brighter future.
            </p>
          </div>

          <div className="lg:col-span-12">
            {/* Swiper */}
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
              }}
              className="team_swiper"
            >
              <SwiperSlide>
                {/* Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-5 border-t border-outline-variant pt-6 md:pt-8">
                  {aboutCards.map((card, index) => (
                    <AboutCard key={index} {...card} />
                  ))}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                {/* Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-5 border-t border-outline-variant pt-6 md:pt-8">
                  {aboutCards.map((card, index) => (
                    <AboutCard key={index} {...card} />
                  ))}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}