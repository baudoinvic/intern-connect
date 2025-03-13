
import React from "react";
import storyImage from "../../assets/images/4.jpg";

function AboutPage() {
  return (
    <div className=" min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
       
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {" "}
                About Intern connect
              </h2>
              <p className="text-gray-600 mb-4">
                Intern connect aims to modernize internship management, bridging
                the gap between students, institutions, and companies through a
                seamless digital experience.We're on a mission to revolutionize
                how students connect with professional opportunities and launch
                their careers.
              </p>
              <p className="text-gray-600">
                Today, we've grown into a global platform that has helped
                thousands of students launch their careers and enabled companies
                to build their future workforce through meaningful internships
                and early career programs.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={storyImage}
                alt="Our Story"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutPage;