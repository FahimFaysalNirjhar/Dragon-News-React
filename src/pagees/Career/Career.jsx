import React from "react";

const Career = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-base-100 shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Careers at Dragon News 🐉
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
          Join <span className="font-semibold text-secondary">Dragon News</span>
          and be part of a passionate team dedicated to delivering accurate and
          impactful journalism. We are always looking for talented individuals
          who are eager to innovate and make a difference in the media industry.
        </p>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
          Whether you're a journalist, developer, designer, or content creator,
          we offer a dynamic environment where your skills and ideas can grow.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-base-200 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-primary mb-2">
              🚀 Why Work With Us?
            </h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>✔ Collaborative and creative environment</li>
              <li>✔ Opportunities for growth and learning</li>
              <li>✔ Work on real-world impactful projects</li>
              <li>✔ Flexible and modern workplace</li>
            </ul>
          </div>

          <div className="bg-base-200 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-primary mb-2">
              💼 Open Roles
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>📰 News Reporter</li>
              <li>💻 Frontend Developer (React)</li>
              <li>🎨 UI/UX Designer</li>
              <li>📊 Data Analyst</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 bg-base-200 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-primary mb-3">
            📩 How to Apply
          </h2>
          <p className="text-gray-600 mb-4">
            Interested candidates can send their resume and portfolio to:
          </p>
          <p className="font-semibold text-secondary">careers@dragonnews.com</p>
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

export default Career;
