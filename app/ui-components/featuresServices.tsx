import React from 'react';

const FeaturesServices: React.FC = () => {
  return (
    <section className="bg-white py-8 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          A world-class learning experience that energizes aspiring and established changemakers.
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* First Column - Image */}
        <div className="lg:w-1/4">
          <img
            src="/images/learning-experience.jpg"
            alt="Learning Experience"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Second Column - Titles and Text */}
        <div className="lg:w-1/3 space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Breakthrough learning</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Stimulating classes led by faculty at the forefront of their fields. Topics that will define the future of business. Discussions that transform perspectives and ways of thinking. Access to the brightest business minds on the planet. In short, a world-class learning experience that only Harvard can provide.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Powerful connections</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our programs strengthen organizations and individuals by deepening relationships and fostering new ones. Participants leave with lifelong friends, new potential business partners, and a powerful, globe-spanning network of fellow changemakers.
            </p>
          </div>
        </div>

        {/* Third Column - Titles and Text */}
        <div className="lg:w-1/3 space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Holistic support</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Premium amenities and purpose-built accommodations for all participants on the TSI campus. Astonishingly attentive staff. Classrooms that foster collaboration. Virtual, in-person, and blended formats for learning on your terms. Here, every detail is carefully calibrated to nurture your growth.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Intentional diversity</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We curate a truly diverse classroom for good reason. Exposure to different perspectives sharpens our thinking and leaves us better equipped to lead in today’s business landscape. Expect to learn with—and from—peers that come from around the world, a variety of industries, and all walks of life.
            </p>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="mt-16 border-t border-gray-300"></div>
    </section>
  );
};

export default FeaturesServices;
