import React from 'react';
import { SEO } from '@/components/SEO';
import { Section } from '@/components/Section';
import { Tag } from '@/components/Tag';
import { siteData } from '@/data/site-data';

export const About: React.FC = () => {
  return (
    <>
      <SEO title="About" description={`About ${siteData.profile.name} - ${siteData.profile.summary}`} />
      <main>
        <Section className="pt-32 md:pt-40">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About Me
            </h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {siteData.profile.summary}
              </p>
            </div>
          </div>
        </Section>

        <Section id="education" title="Education" className="bg-gray-800/50">
          <div className="max-w-4xl mx-auto space-y-6">
            {siteData.education.map((edu, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-primary-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mt-1">{edu.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="text-gray-400 text-sm">
                      {new Date(edu.startDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                      })}{' '}
                      -{' '}
                      {new Date(edu.endDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                      })}
                    </p>
                    {edu.gpa && (
                      <p className="text-primary-400 font-medium mt-1">GPA: {edu.gpa}</p>
                    )}
                  </div>
                </div>
                {edu.description && edu.description.length > 0 && (
                  <ul className="space-y-2" role="list">
                    {edu.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="honors" title="Honors & Awards">
          <div className="max-w-4xl mx-auto space-y-6">
            {siteData.honors.map((honor, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {honor.title}
                </h3>
                <p className="text-gray-400">{honor.description}</p>
                {honor.date && (
                  <p className="text-gray-500 text-sm mt-2">{honor.date}</p>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="Technologies I work with" className="bg-gray-800/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.skills.map((skill, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2" role="list">
                  {skill.items.map((item, itemIndex) => (
                    <Tag key={itemIndex}>{item}</Tag>
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

