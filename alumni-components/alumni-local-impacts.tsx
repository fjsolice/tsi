"use client";

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ImpactData = {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
};

const impactData: ImpactData[] = [
  { id: 1, title: 'Dar Es Salaam', imageUrl: '/images/impact1.jpg', link: '/impact/1' },
  { id: 2, title: 'Kilimanjaro', imageUrl: '/images/impact2.jpg', link: '/impact/2' },
  { id: 3, title: 'Mwanza', imageUrl: '/images/impact3.jpg', link: '/impact/3' },
  { id: 4, title: 'Dodoma', imageUrl: '/images/impact4.jpg', link: '/impact/4' },
  { id: 5, title: 'Zanzibar', imageUrl: '/images/impact5.jpg', link: '/impact/5' },
  { id: 6, title: 'Iringa', imageUrl: '/images/impact6.jpg', link: '/impact/6' },
];

const LocalImpactSection: React.FC = () => {
  return (
    <section className="py-15 px-8 mt-20 text-center">
      {/* Enlarged and Modernized Header */}
      <motion.h2
        className="text-6xl md:text-7xl text-gray-900 tracking-tight leading-tight mb-12 text-left" initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Explore Our Local <br />
        <span>Impact</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Display all items in a 3-column grid */}
        {impactData.map((item) => (
          <motion.div
            key={item.id}
            className="mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={500}
                height={600}
                className="w-full h-72 object-cover transition-all duration-300 ease-in-out transform hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white p-4">
                <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                <Link href={item.link} className="text-blue-600 mt-3 inline-flex items-center hover:underline">
                  Explore More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LocalImpactSection;
