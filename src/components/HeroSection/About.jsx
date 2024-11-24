// import { BookOpen, Building, Clock, Globe, Heart, Mail, MapPin, Phone, Users } from "lucide-react";
// import React from "react";

// function AboutPage() {
//   const mission = [
//     {
//       icon: <Users size={24} />,
//       title: "Student Success",
//       description: "Empowering students to reach their full potential through meaningful professional experiences"
//     },
//     {
//       icon: <Building size={24} />,
//       title: "Industry Connection",
//       description: "Building bridges between academia and industry to create valuable opportunities"
//     },
//     {
//       icon: <Globe size={24} />,
//       title: "Global Network",
//       description: "Creating a worldwide network of opportunities for students and companies"
//     }
//   ];

//   const team = [
//     {
//       name: "Sarah Johnson",
//       role: "Founder & CEO",
//       image: "/api/placeholder/200/200",
//       description: "Former tech executive with 15+ years experience in education technology"
//     },
//     {
//       name: "Michael Chen",
//       role: "Head of Partnerships",
//       image: "/api/placeholder/200/200",
//       description: "Industry veteran specializing in corporate-academic relationships"
//     },
//     {
//       name: "Dr. Emily Rodriguez",
//       role: "Academic Director",
//       image: "/api/placeholder/200/200",
//       description: "PhD in Career Development with focus on student mentorship"
//     }
//   ];

//   const timeline = [
//     {
//       year: "2018",
//       title: "Foundation",
//       description: "Campus Connect was founded with a vision to transform student career development"
//     },
//     {
//       year: "2020",
//       title: "Platform Launch",
//       description: "Launched our digital platform connecting students with top companies"
//     },
//     {
//       year: "2022",
//       title: "Global Expansion",
//       description: "Expanded to 50+ countries and partnered with leading universities"
//     },
//     {
//       year: "2024",
//       title: "AI Integration",
//       description: "Introduced AI-powered matching system for better internship placements"
//     }
//   ];

//   const contact = {
//     email: "contact@campusconnect.com",
//     phone: "+1 (555) 123-4567",
//     address: "123 Innovation Street, Tech City, TC 12345"
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-gray-900 mb-6">
//             About Campus Connect
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We're on a mission to revolutionize how students connect with 
//             professional opportunities and launch their careers.
//           </p>
//         </div>

//         {/* Mission Section */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {mission.map((item, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
//               <div className="text-blue-500 bg-blue-50 p-3 rounded-full w-fit mb-4">
//                 {item.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Story Section */}
//         <div className="bg-white rounded-lg shadow-md p-8 mb-16">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             <div className="flex-1">
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
//               <p className="text-gray-600 mb-4">
//                 Founded in 2018, Campus Connect emerged from a simple observation: 
//                 students needed a better way to connect with meaningful professional 
//                 opportunities, and companies needed a more effective way to find emerging talent.
//               </p>
//               <p className="text-gray-600">
//                 Today, we've grown into a global platform that has helped thousands 
//                 of students launch their careers and enabled companies to build 
//                 their future workforce through meaningful internships and early 
//                 career programs.
//               </p>
//             </div>
//             <div className="flex-1">
//               <img 
//                 src="/api/placeholder/500/300" 
//                 alt="Our Story" 
//                 className="rounded-lg shadow-md"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Timeline Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             {timeline.map((item, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
//                 <div className="text-blue-500 text-2xl font-bold mb-2">{item.year}</div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Team Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {team.map((member, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-200">
//                 <div className="aspect-square relative overflow-hidden">
//                   <img 
//                     src={member.image} 
//                     alt={member.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
//                   <p className="text-blue-600 mb-3">{member.role}</p>
//                   <p className="text-gray-600">{member.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Contact Section */}
//         <div className="bg-white rounded-lg shadow-md p-8">
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Get in Touch</h2>
//           <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
//             <div className="flex items-center gap-3">
//               <Mail size={24} className="text-blue-500" />
//               <div>
//                 <div className="font-semibold text-gray-800">Email</div>
//                 <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
//                   {contact.email}
//                 </a>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <Phone size={24} className="text-blue-500" />
//               <div>
//                 <div className="font-semibold text-gray-800">Phone</div>
//                 <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
//                   {contact.phone}
//                 </a>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <MapPin size={24} className="text-blue-500" />
//               <div>
//                 <div className="font-semibold text-gray-800">Address</div>
//                 <div className="text-gray-600">{contact.address}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutPage;

import { BookOpen, Building, Clock, Globe, Heart, Mail, MapPin, Phone, Users } from "lucide-react";
import React from "react";
import storyImage from "../../assets/images/4.jpg";
import sarah from "../../assets/images/1.jpg";
import michael from "../../assets/images/3.jpg";
import emily from "../../assets/images/2.jpg";

function AboutPage() {
  const mission = [
    {
      icon: <Users size={24} />,
      title: "Student Success",
      description: "Empowering students to reach their full potential through meaningful professional experiences"
    },
    {
      icon: <Building size={24} />,
      title: "Industry Connection",
      description: "Building bridges between academia and industry to create valuable opportunities"
    },
    {
      icon: <Globe size={24} />,
      title: "Global Network",
      description: "Creating a worldwide network of opportunities for students and companies"
    }
  ];

  const team = [
    {
      name: "Therese",
      role: "Founder & CEO",
      image: sarah,
      description: "Former tech executive with 15+ years experience in education technology"
    },
    {
      name: "William",
      role: "Head of Partnerships",
      image: michael,
      description: "Industry veteran specializing in corporate-academic relationships"
    },
    {
      name: "Dr. Apolline",
      role: "Academic Director",
      image: emily,
      description: "PhD in Career Development with focus on student mentorship"
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Foundation",
      description: "Campus Connect was founded with a vision to transform student career development"
    },
    {
      year: "2020",
      title: "Platform Launch",
      description: "Launched our digital platform connecting students with top companies"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to 50+ countries and partnered with leading universities"
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Introduced AI-powered matching system for better internship placements"
    }
  ];

  const contact = {
    email: "contact@campusconnect.com",
    phone: "+250781299877",
    address: "KG 185 st 5, Kigali, Rwanda"
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Campus Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize how students connect with 
            professional opportunities and launch their careers.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mission.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="text-blue-500 bg-blue-50 p-3 rounded-full w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, Campus Connect emerged from a simple observation: 
                students needed a better way to connect with meaningful professional 
                opportunities, and companies needed a more effective way to find emerging talent.
              </p>
              <p className="text-gray-600">
                Today, we've grown into a global platform that has helped thousands 
                of students launch their careers and enabled companies to build 
                their future workforce through meaningful internships and early 
                career programs.
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

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
                <div className="text-blue-500 text-2xl font-bold mb-2">{item.year}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-200">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <Mail size={24} className="text-blue-500" />
              <div>
                <div className="font-semibold text-gray-800">Email</div>
                <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={24} className="text-blue-500" />
              <div>
                <div className="font-semibold text-gray-800">Phone</div>
                <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
                  {contact.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={24} className="text-blue-500" />
              <div>
                <div className="font-semibold text-gray-800">Address</div>
                <div className="text-gray-600">{contact.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;