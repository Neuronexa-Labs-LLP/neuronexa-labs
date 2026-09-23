import { notFound } from 'next/navigation';
import { projectsData } from '../../../data/projectsData';
import ProductDetailClient from '../../../components/ProductDetailClient';

export function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData[id];
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const canonicalUrl = `https://neuronexalabs.com/projects/${id}/`;

  return {
    title: `${project.title} | Neuronexa Labs Case Study`,
    description: project.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} - Enterprise Automation Case Study`,
      description: project.description,
      url: canonicalUrl,
      images: [
        {
          url: project.bannerImage,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Neuronexa Labs`,
      description: project.description,
    },
  };
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData[id];

  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "applicationCategory": project.category,
    "operatingSystem": "All",
    "author": {
      "@type": "Organization",
      "name": "Neuronexa Labs",
      "url": "https://neuronexalabs.com/"
    },
    "url": `https://neuronexalabs.com/projects/${id}/`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <main className="min-h-screen bg-slate-50/50">
        <ProductDetailClient project={project} />
      </main>
    </>
  );
}
