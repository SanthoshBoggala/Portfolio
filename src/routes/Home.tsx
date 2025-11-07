import React from 'react';
import { SEO } from '@/components/SEO';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/ProjectCard';
import { siteData } from '@/data/site-data';

export const Home: React.FC = () => {
  const featuredProjects = siteData.projects.slice(0, 2);

  return (
    <>
      <SEO />
      <main>
        {/* Hero Section */}
        <Section className="pt-32 md:pt-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm <span className="text-primary-400">{siteData.profile.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              {siteData.profile.title}
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              {siteData.profile.summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild to="/projects" variant="primary">
                View Projects
              </Button>
              <Button asChild to="/contact" variant="outline">
                Get In Touch
              </Button>
            </div>
          </div>
        </Section>

        {/* Featured Projects */}
        <Section id="featured-projects" title="Featured Projects" className="bg-gray-800/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild to="/projects" variant="outline">
              View All Projects
            </Button>
          </div>
        </Section>

        {/* Skills Preview */}
        <Section id="skills" title="Skills" subtitle="Technologies I work with">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.skills.map((skill, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2" role="list">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="tag"
                      role="listitem"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
};

