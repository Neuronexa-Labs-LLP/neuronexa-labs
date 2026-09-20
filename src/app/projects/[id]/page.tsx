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

  return {
    title: `${project.title} | Neuronexa Labs Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Enterprise Automation Case Study`,
      description: project.description,
      images: [
        {
          url: project.bannerImage,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData[id];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50/50">
      <ProductDetailClient project={project} />
    </main>
  );
}
