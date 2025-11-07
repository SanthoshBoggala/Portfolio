import React from 'react';
import { SEO } from '@/components/SEO';
import { Section } from '@/components/Section';
import { ExperienceCard } from '@/components/ExperienceCard';
import { siteData } from '@/data/site-data';

export const Experience: React.FC = () => {
  return (
    <>
      <SEO
        title="Experience"
        description={`Work experience of ${siteData.profile.name} - ${siteData.profile.summary}`}
      />
      <main>
        <Section className="pt-32 md:pt-40">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Experience
            </h1>
            <p className="text-lg text-gray-300 mb-12">
              My professional journey and the experiences that have shaped my career.
            </p>
          </div>
        </Section>

        <Section id="experience-list" className="bg-gray-800/50">
          <div className="max-w-4xl mx-auto space-y-6">
            {siteData.experience.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
};

