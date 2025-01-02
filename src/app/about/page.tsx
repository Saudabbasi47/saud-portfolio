import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  GraduationCap,
  User,
  Code,
} from "lucide-react";
import { client } from "../../sanity/lib/sanity";

const AboutPage = async () => {
  let aboutData = null;

  try {
    aboutData = await client.fetch(`*[_type == "about"][0]{
      jobtitle,
      headline,
      paragraphone,
      paragraphtwo,
      frontendskill,
      backendskill,
      experience[] {
        position,
        company,
        durationfrom,
        durationto,
        description
      },
      education[] {
        institute,
        field,
        durationfrom,
        durationto,
        keypoints
      }
    }`);
  } catch (error) {
    console.error("Error fetching Sanity data:", error);
  }

  if (!aboutData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Failed to load About data. Please try again later.</p>
      </div>
    );
  }

  const about: any = aboutData; // Access the first document

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-10"></div>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {about?.jobtitle || "Job Title"}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {about?.headline || "Headline goes here."}
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/Saudabbasi47"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/profile/saudabbasiofficial"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <User className="w-6 h-6 mr-2 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600 leading-relaxed mb-6">
              {about?.paragraphone || "No paragraph available."}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {about?.paragraphtwo || "No paragraph available."}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Code className="w-6 h-6 mr-2 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {about?.frontendskill?.map((skill: any, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )) || "No skills available."}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {about?.backendskill?.map((skill: any, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )) || "No skills available."}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Experience Section */}
          <section>
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6">
                {about?.experience?.map((exp: any, index: number) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {exp?.position || "Position not available"}
                    </h3>
                    <p className="text-gray-600">
                      {exp?.company || "Company not available"} • From{" "}
                      {exp?.durationfrom || "N/A"} To{" "}
                      {exp?.durationto || "N/A"}
                    </p>
                    <ul className="mt-2 text-gray-600 list-disc list-inside">
                      {exp?.description?.map((i: any, iIndex: number) => (
                        <li key={iIndex}>{i || "Description not available"}</li>
                      )) || "No description available."}
                    </ul>
                  </div>
                )) || "No experience available."}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6">
                {about?.education?.map((edu: any, index: number) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {edu?.institute || "Institute not available"}
                    </h3>
                    <p className="text-gray-600">
                      {edu?.field || "Field not available"} • From{" "}
                      {edu?.durationfrom || "N/A"} To{" "}
                      {edu?.durationto || "N/A"}
                    </p>
                    <p className="mt-2 text-gray-600">
                      {edu?.keypoints || "No key points available."}
                    </p>
                  </div>
                )) || "No education available."}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
