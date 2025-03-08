"use client";

import Header from "@/app/ui-components/header"; // Imported Header
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Users, BookOpen, Globe } from "lucide-react";

// Define interfaces for type safety
interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
}

interface Story {
  id: number;
  name: string;
  quote: string;
  image: string;
  classYear: string;
}

// Define events and stories as constants since setters are unused
const events: Event[] = [
  { id: 1, title: "Tanzania Investment Summit", date: "March 19, 2025", location: "Dar es Salaam", image: "/images/event1.jpg" },
  { id: 2, title: "Alumni Homecoming 2025", date: "May 9-10, 2025", location: "TSI Campus, Arusha", image: "/images/event2.jpg" },
  { id: 3, title: "Financial Literacy Workshop", date: "April 15, 2025", location: "Dodoma", image: "/images/event3.jpg" },
];

const stories: Story[] = [
  { id: 1, name: "Juma Kweka", quote: "TSI gave me the tools to launch my fintech startup in Dar.", image: "/images/alumni1.jpg", classYear: "2021" },
  { id: 2, name: "Fatima Mushi", quote: "Empowering women in finance across Tanzania, thanks to TSI.", image: "/images/alumni22.jpg", classYear: "2025" },
  { id: 3, name: "Elias Njoroge", quote: "From TSI to leading Tanzania’s investment policy reforms.", image: "/images/alumni3.jpg", classYear: "2000" },
];

const AlumniNetwork = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/alumni-hero.jpg" alt="TSI Alumni Hero" layout="fill" objectFit="cover" />
        </div>
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Tanzania School of Investments Alumni Network
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300">
            Connect with Tanzania’s leading investment professionals, share knowledge, and grow your impact in our nation’s financial future.
          </p>
          <Link href="/directory">
            <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 mx-auto hover:bg-gray-200 transition-all duration-300 shadow-lg">
              Explore Directory <ArrowRight size={24} />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { icon: Users, title: "Find Alumni", href: "/directory", desc: "Connect with TSI graduates driving Tanzania’s investment landscape." },
          { icon: Calendar, title: "Events", href: "/events", desc: "Attend TSI alumni gatherings across Tanzania." },
          { icon: BookOpen, title: "Resources", href: "/resources", desc: "Access TSI’s investment tools and insights for Tanzania." },
          { icon: Globe, title: "Give Back", href: "/volunteer", desc: "Mentor the next generation of TSI investors in Tanzania." },
        ].map((link, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
          >
            <link.icon size={32} className="mx-auto mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
            <p className="text-gray-400 mb-4">{link.desc}</p>
            <Link href={link.href}>
              <span className="text-white font-medium hover:underline">Learn More</span>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Alumni Stories Section */}
      <section className="w-full bg-gray-900 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          TSI Alumni Stories
        </motion.h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <Image src={story.image} alt={story.name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {story.name} <span className="text-gray-500">({story.classYear})</span>
                </h3>
                <p className="text-gray-400 italic">{story.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mt-12"
        >
          <Link href="/stories">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
              Read More Stories
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Upcoming Events Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Upcoming TSI Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <Image src={event.image} alt={event.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-1">{event.date}</p>
                <p className="text-gray-400">{event.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mt-12"
        >
          <Link href="/events">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
              View All Events
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-black py-20 text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Connected with TSI</h2>
          <p className="text-lg mb-10 text-gray-300">
            Join Tanzania School of Investments alumni, update your profile, and contribute to Tanzanias investment ecosystem.
          </p>
          <Link href="/profile">
            <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 mx-auto hover:bg-gray-200 transition-all duration-300 shadow-lg">
              Update Profile <ArrowRight size={24} />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">TSI Alumni Network</h3>
            <p>Building Tanzania’s future through investment expertise.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/directory" className="hover:text-white">Directory</Link></li>
              <li><Link href="/events" className="hover:text-white">Events</Link></li>
              <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
              <li><Link href="/volunteer" className="hover:text-white">Volunteer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p>Email: alumni@tsi.co.tz</p>
            <p>Phone: +255 123 456 789</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlumniNetwork;