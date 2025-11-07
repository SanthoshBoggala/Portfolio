import React from 'react';
import { SEO } from '@/components/SEO';
import { Section } from '@/components/Section';
import { ProjectCard } from '@/components/ProjectCard';
import { siteData } from '@/data/site-data';

export const Projects: React.FC = () => {
  return (
    <>
      <SEO
        title="Projects"
        description={`Projects by ${siteData.profile.name} - ${siteData.profile.summary}`}
      />
      <main>
        <Section className="pt-32 md:pt-40">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Projects
            </h1>
            <p className="text-lg text-gray-300 mb-12">
              Here are some of the projects I've worked on. Each project represents
              a unique challenge and learning experience.
            </p>
          </div>
        </Section>

        <Section id="projects-list" className="bg-gray-800/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
};

