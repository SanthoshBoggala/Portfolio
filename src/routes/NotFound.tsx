import React from 'react';
import { SEO } from '@/components/SEO';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO title="404 - Page Not Found" />
      <main>
        <Section className="pt-32 md:pt-40 min-h-screen flex items-center">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-primary-400 mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild to="/" variant="primary">
              Go Home
            </Button>
          </div>
        </Section>
      </main>
    </>
  );
};

