const objectives = [
  {
    title: "Unify",
    description:
      "Unify healthcare professionals, radiological aspirants, and trainees to enhance radiology in Pakistan",
  },
  {
    title: "Discuss",
    description:
      "Create a platform for radiological students to discuss and shape policies in radiology",
  },
  {
    title: "Representation",
    description:
      "Represent Pakistani radiology students and trainees nationally and internationally",
  },
  {
    title: "Cooperation",
    description:
      "Foster cooperation between RSAP, national, and international radiological organizations",
  },
  {
    title: "Collaboration",
    description:
      "Lead intersectoral collaboration among diverse youth in radiology",
  },
  {
    title: "Education",
    description: "Develop and share impactful radiology educational content",
  },
  {
    title: "Innovation",
    description:
      "Encourage innovative solutions for radiology-related challenges",
  },
  {
    title: "Advocacy",
    description:
      "Mobilize RSAP members for advocacy through toolkits and outreach",
  },
  {
    title: "Research",
    description:
      "Lead intersectoral collaborations among diverse youth in radiology",
  },
  {
    title: "Technology",
    description: "Innovate healthcare technology for system enhancement",
  },
];

export default function About() {
  return (
    <div className="container-x prose-zinc prose dark:prose-invert py-20">
      <h1>About RSAP</h1>
      <h2>Our Vision</h2>
      <p>
        To unite all aspiring radiological students and trainees through
        Pakistan’s first and only radiological students’ organization.
      </p>
      <h2>Our Mission</h2>
      <p>
        To foster collaborations among future healthcare professionals, aspiring
        radiologists, and radiological trainees with the principal aim of
        providing opportunities, capacity building, and improving the scope of
        radiology within Pakistan.
      </p>
      <h2>Our Objectives</h2>
      <div className="grid grid-cols-1 md:gap-x-10 md:grid-cols-2">
        {objectives.map((item, index) => (
          <div key={index}>
            <h3 className="uppercase">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
