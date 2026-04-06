import React from "react";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-base-100 shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          About Dragon News 🐉
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
          Welcome to{" "}
          <span className="font-semibold text-secondary">Dragon News</span>,
          your trusted source for the latest and most reliable news from around
          the world. We are committed to delivering breaking news, in-depth
          analysis, and insightful stories that matter to you.
        </p>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
          Our mission is to provide accurate, unbiased, and timely information
          across various categories including politics, technology, business,
          entertainment, and more. We believe in the power of journalism to
          inform, educate, and empower people.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-base-200 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-primary mb-2">
              🌍 Our Vision
            </h2>
            <p className="text-gray-600">
              To become a leading digital news platform that people trust for
              authentic and real-time updates worldwide.
            </p>
          </div>

          <div className="bg-base-200 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-primary mb-2">
              🎯 Our Mission
            </h2>
            <p className="text-gray-600">
              Deliver factual, fast, and fair journalism while maintaining the
              highest standards of integrity and transparency.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-primary mb-3">
            💡 Why Choose Us?
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>✔ Real-time breaking news updates</li>
            <li>✔ Reliable and verified sources</li>
            <li>✔ Clean and user-friendly interface</li>
            <li>✔ Coverage across multiple categories</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Dragon News. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
