
// import { ArrowRight, Award, BookOpen, Briefcase, Users } from "lucide-react";
// import React from "react";

// function HeroSection() {
//   const features = [
//     {
//       icon: <Briefcase size={24} />,
//       title: "Internship Matching",
//       description: "Connect with top companies and find your perfect internship opportunity"
//     },
//     {
//       icon: <Users size={24} />,
//       title: "Mentor Network",
//       description: "Get guidance from industry professionals and experienced alumni"
//     },
//     {
//       icon: <BookOpen size={24} />,
//       title: "Resource Hub",
//       description: "Access career resources, training materials, and interview prep guides"
//     },
//     {
//       icon: <Award size={24} />,
//       title: "Skills Development",
//       description: "Track your progress and earn certifications for your achievements"
//     }
//   ];

//   const stats = [
//     { value: "500+", label: "Partner Companies" },
//     { value: "10,000+", label: "Successful Placements" },
//     { value: "95%", label: "Placement Rate" },
//     { value: "4.8/5", label: "Student Satisfaction" }
//   ];

//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
//         {/* Main Hero Content */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             Your Bridge to Professional Success
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//             Campus Connect empowers students to discover and secure meaningful internships, 
//             build professional networks, and launch successful careers through our comprehensive platform.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center">
//               Find Internships
//               <ArrowRight className="ml-2" size={20} />
//             </button>
//             <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Statistics */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {stats.map((stat, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
//               <div className="text-gray-600">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Features */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((feature, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
//               <div className="text-blue-500 mb-4 bg-blue-50 p-3 rounded-full w-fit">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

// import { ArrowRight, Award, BookOpen, Briefcase, Users } from "lucide-react";
// import React from "react";

// function HeroSection() {
//   const features = [
//     {
//       icon: <Briefcase size={24} />,
//       title: "Internship Matching",
//       description: "Connect with top companies and find your perfect internship opportunity"
//     },
//     {
//       icon: <Users size={24} />,
//       title: "Mentor Network",
//       description: "Get guidance from industry professionals and experienced alumni"
//     },
//     {
//       icon: <BookOpen size={24} />,
//       title: "Resource Hub",
//       description: "Access career resources, training materials, and interview prep guides"
//     },
//     {
//       icon: <Award size={24} />,
//       title: "Skills Development",
//       description: "Track your progress and earn certifications for your achievements"
//     }
//   ];

//   const stats = [
//     { value: "500+", label: "Partner Companies" },
//     { value: "10,000+", label: "Successful Placements" },
//     { value: "95%", label: "Placement Rate" },
//     { value: "4.8/5", label: "Student Satisfaction" }
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
//         {/* Main Hero Content */}
//         <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
//           <div className="flex-1 text-left">
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//               Your Bridge to Professional Success
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//               Campus Connect empowers students to discover and secure meaningful internships, 
//               build professional networks, and launch successful careers.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center">
//                 Find Internships
//                 <ArrowRight className="ml-2" size={20} />
//               </button>
//               <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
//                 Learn More
//               </button>
//             </div>
//           </div>
//           <div className="flex-1 relative">
//             <div className="relative">
//               <img 
//                 src="/api/placeholder/600/400" 
//                 alt="Students working" 
//                 className="rounded-lg shadow-xl"
//               />
//               <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
//                 <div className="text-blue-600 font-bold text-xl">2,500+</div>
//                 <div className="text-gray-600 text-sm">Active Internships</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Statistics */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {stats.map((stat, index) => (
//             <div 
//               key={index} 
//               className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200"
//             >
//               <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
//               <div className="text-gray-600">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Features */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((feature, index) => (
//             <div 
//               key={index} 
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group"
//             >
//               <div className="text-blue-500 mb-4 bg-blue-50 p-3 rounded-full w-fit group-hover:bg-blue-100 transition-colors duration-200">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Trust Banner */}
//         <div className="mt-16 bg-white rounded-lg shadow-md p-8">
//           <h3 className="text-center text-gray-600 mb-6">Trusted by leading companies</h3>
//           <div className="flex justify-center items-center gap-12">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <div key={i} className="w-24 h-12 bg-gray-100 rounded flex items-center justify-center">
//                 <img 
//                   src={`/api/placeholder/96/48`}
//                   alt={`Company ${i}`}
//                   className="max-w-full h-auto opacity-50 hover:opacity-100 transition-opacity duration-200"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

// import { ArrowRight, Award, BookOpen, Briefcase, Users } from "lucide-react";
// import React from "react";
// import heroImage from "../../assets/images/stud2(1).jpg";
// import company1 from "../../assets/images/stud2(2).jpg";
// import company2 from "../../assets/images/stud2(3).jpg";
// import company3 from "../../assets/images/stud2(4).jpg";
// import company4 from "../../assets/images/stud2(5).jpg";
// import company5 from "../../assets/images/stud2(6).jpg";

// function HeroSection() {
//   // ... rest of the features and stats arrays stay the same ...

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
//         {/* Main Hero Content */}
//         <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
//           <div className="flex-1 text-left">
//             {/* ... text content stays the same ... */}
//           </div>
//           <div className="flex-1 relative">
//             <div className="relative">
//               <img 
//                 src={heroImage}
//                 alt="Students working" 
//                 className="rounded-lg shadow-xl"
//               />
//               <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
//                 <div className="text-blue-600 font-bold text-xl">2,500+</div>
//                 <div className="text-gray-600 text-sm">Active Internships</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ... Stats section stays the same ... */}

//         {/* ... Features section stays the same ... */}

//         {/* Trust Banner */}
//         <div className="mt-16 bg-white rounded-lg shadow-md p-8">
//           <h3 className="text-center text-gray-600 mb-6">Trusted by leading companies</h3>
//           <div className="flex justify-center items-center gap-12">
//             {[company1, company2, company3, company4, company5].map((companyLogo, i) => (
//               <div key={i} className="w-24 h-12 bg-gray-100 rounded flex items-center justify-center">
//                 <img 
//                   src={companyLogo}
//                   alt={`Company ${i + 1}`}
//                   className="max-w-full h-auto opacity-50 hover:opacity-100 transition-opacity duration-200"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

import { ArrowRight, Award, BookOpen, Briefcase, Users } from "lucide-react";
import React from "react";
import heroImage from "../../assets/images/stud2(1).jpg";
import company1 from "../../assets/images/stud2(2).jpg";
import company2 from "../../assets/images/stud2(3).jpg";
import company3 from "../../assets/images/stud2(4).jpg";
import company4 from "../../assets/images/stud2(5).jpg";
import company5 from "../../assets/images/stud2(6).jpg";

function HeroSection() {
  const features = [
    {
      icon: <Briefcase size={24} />,
      title: "Internship Matching",
      description: "Connect with top companies and find your perfect internship opportunity"
    },
    {
      icon: <Users size={24} />,
      title: "Mentor Network",
      description: "Get guidance from industry professionals and experienced alumni"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Resource Hub",
      description: "Access career resources, training materials, and interview prep guides"
    },
    {
      icon: <Award size={24} />,
      title: "Skills Development",
      description: "Track your progress and earn certifications for your achievements"
    }
  ];

  const stats = [
    { value: "500+", label: "Partner Companies" },
    { value: "10,000+", label: "Successful Placements" },
    { value: "95%", label: "Placement Rate" },
    { value: "4.8/5", label: "Student Satisfaction" }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Bridge to Professional Success
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Campus Connect empowers students to discover and secure meaningful internships, 
              build professional networks, and launch successful careers.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center">
                Find Internships
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative">
              <img 
                src={heroImage}
                alt="Students working" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold text-xl">2,500+</div>
                <div className="text-gray-600 text-sm">Active Internships</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group"
            >
              <div className="text-blue-500 mb-4 bg-blue-50 p-3 rounded-full w-fit group-hover:bg-blue-100 transition-colors duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-center text-gray-600 mb-6">Trusted by leading companies</h3>
          <div className="flex justify-center items-center gap-12">
            {[company1, company2, company3, company4, company5].map((companyLogo, i) => (
              <div key={i} className="w-24 h-12 bg-gray-100 rounded flex items-center justify-center">
                <img 
                  src={companyLogo}
                  alt={`Company ${i + 1}`}
                  className="max-w-full h-auto opacity-50 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;