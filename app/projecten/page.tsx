"use client";

import { useState } from 'react';
import Image from 'next/image';

interface Project {
    title: string;
    description: string;
    id: number;
    images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    images: [
      '/images/projecten/breda/Original/1.jpg',
      '/images/projecten/breda/Original/2.jpg',
      '/images/projecten/breda/Original/3.jpg',
      '/images/projecten/breda/Original/4.jpg',
      '/images/projecten/breda/Original/5.jpg',
      '/images/projecten/breda/Original/6.jpg',
      '/images/projecten/breda/Original/7.jpg',
    ],
    title: "Breda - Stucadoren",
    description: 'Project omschrijving'
  },
  {
    id: 2,
    images: [
      '/images/projecten/havenhoofd/Original/1.jpg',
      '/images/projecten/havenhoofd/Original/2.jpg',
      '/images/projecten/havenhoofd/Original/3.jpg',
      '/images/projecten/havenhoofd/Original/4.jpg',
      '/images/projecten/havenhoofd/Original/5.jpg',
      '/images/projecten/havenhoofd/Original/6.jpg',
      '/images/projecten/havenhoofd/Original/7.jpg',
    ],
    title: "Goeree Havenhoofd - Stucadoren",
    description: 'Project omschrijving',
  },
  {
    id: 3,
    images: [
      '/images/projecten/middelharnis/Original/20.jpg',
      '/images/projecten/middelharnis/Original/2.jpg',
      '/images/projecten/middelharnis/Original/3.jpg',
      '/images/projecten/middelharnis/Original/4.jpg',
      '/images/projecten/middelharnis/Original/5.jpg',
      '/images/projecten/middelharnis/Original/6.jpg',
      '/images/projecten/middelharnis/Original/7.jpg',
      '/images/projecten/middelharnis/Original/8.jpg',
      '/images/projecten/middelharnis/Original/9.jpg',
      '/images/projecten/middelharnis/Original/10.jpg',
      '/images/projecten/middelharnis/Original/11.jpg',
      '/images/projecten/middelharnis/Original/12.jpg',
      '/images/projecten/middelharnis/Original/13.jpg',
      '/images/projecten/middelharnis/Original/14.jpg',
      '/images/projecten/middelharnis/Original/15.jpg',
      '/images/projecten/middelharnis/Original/16.jpg',
      '/images/projecten/middelharnis/Original/17.jpg',
      '/images/projecten/middelharnis/Original/18.jpg',
      '/images/projecten/middelharnis/Original/19.jpg',
      '/images/projecten/middelharnis/Original/1.jpg',
    ],
    title: "Middelharnis - Tegelwerk Tieleman Keukens",
    description: 'Project omschrijving',
  },
  {
    id: 4,
    images: [
      '/images/projecten/sommelsdijk1/Original/3.jpg',
      '/images/projecten/sommelsdijk1/Original/1.jpg',
      '/images/projecten/sommelsdijk1/Original/2.jpg',
      '/images/projecten/sommelsdijk1/Original/4.jpg',
      '/images/projecten/sommelsdijk1/Original/5.jpg',
    ],
    title: "Sommelsdijk - Stucadoren en tegelen badkamer",
    description: 'Project omschrijving',
  },
  {
    id: 5,
    images: [
      '/images/projecten/sommelsdijk2/Original/1.jpg',
      '/images/projecten/sommelsdijk2/Original/2.jpg',
      '/images/projecten/sommelsdijk2/Original/3.jpg',
      '/images/projecten/sommelsdijk2/Original/4.jpg',
      '/images/projecten/sommelsdijk2/Original/5.jpg',
      '/images/projecten/sommelsdijk2/Original/6.jpg',
    ],
    title: "Sommelsdijk - Tegelen en stucadoren",
    description: 'Project omschrijving',
  },
  {
    id: 6,
    images: [
      '/images/projecten/tegelwerk/Original/1.jpg',
      '/images/projecten/tegelwerk/Original/2.jpg',
      '/images/projecten/tegelwerk/Original/3.jpg',
      '/images/projecten/tegelwerk/Original/4.jpg',
      '/images/projecten/tegelwerk/Original/5.jpg',
      '/images/projecten/tegelwerk/Original/6.jpg',
      '/images/projecten/tegelwerk/Original/7.jpg',
      '/images/projecten/tegelwerk/Original/8.jpg',
      '/images/projecten/tegelwerk/Original/9.jpg',
      '/images/projecten/tegelwerk/Original/10.jpg',
    ],
    title: "Tegelwerk vloeren",
    description: 'Project omschrijving',
  },
  {
    id: 7,
    images: [
      '/images/projecten/wandstenen/Original/1.jpg',
      '/images/projecten/wandstenen/Original/2.jpg',
      '/images/projecten/wandstenen/Original/3.jpg',
      '/images/projecten/wandstenen/Original/4.jpg',
    ],
    title: "Wandstenen in keuken",
    description: 'Project omschrijving',
  },
  {
    id: 8,
    images: [
      '/images/projecten/nieuwbeijerland/Original/1.jpg',
      '/images/projecten/nieuwbeijerland/Original/2.jpg',
      '/images/projecten/nieuwbeijerland/Original/3.jpg',
      '/images/projecten/nieuwbeijerland/Original/4.jpg',
      '/images/projecten/nieuwbeijerland/Original/5.jpg',
      '/images/projecten/nieuwbeijerland/Original/6.jpg',
      '/images/projecten/nieuwbeijerland/Original/7.jpg',
      '/images/projecten/nieuwbeijerland/Original/8.jpg',
      '/images/projecten/nieuwbeijerland/Original/9.jpg',
    ],
    title: "Nieuw Beijerland - Tegelwerk",
    description: 'Project omschrijving',
  },
];


export default function Projecten() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleProjectClick = (projectIndex: number) => {
    setSelectedProjectIndex(projectIndex);
    setSelectedImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProjectIndex !== null) {
      setSelectedImageIndex(prevIndex => (prevIndex + 1) % projects[selectedProjectIndex].images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProjectIndex !== null) {
      setSelectedImageIndex(prevIndex => (prevIndex - 1 + projects[selectedProjectIndex].images.length) % projects[selectedProjectIndex].images.length);
    }
  };

  const handleCloseModal = () => {
    setSelectedProjectIndex(null);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className='min-h-screen pb-20'>
        <section className="text-center pt-10">
          <div className="container mx-auto mb-10">
            <p className="lg:text-2xl text-lg text-[#7690B8] mt-6">
              Wat leveren wij?
            </p>
            <h1 className="text-3xl max-sm:max-w-[90%] lg:text-5xl font-bold leading-tight mb-4 text-black max-w-[50%] mx-auto">
              Bekijk onze projecten
            </h1>
          </div>
        </section>

        <section className="bg-transparent max-w-[70%] max-sm:max-w-[90%] pt-6 mx-auto max-sm:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="w-full">
                <div className="bg-white flex flex-col">
                  <div className="mb-2">
                    <Image
                      src={project.images[0]}
                      alt={`Project ${index + 1}`}
                      width={500}
                      height={300}
                      loading="lazy"
                      style={{ width: '500px', height: '350px'}}
                      className="brightness-75 hover:brightness-100 hover:cursor-pointer transition-all duration-300 rounded-lg"
                      onClick={() => handleProjectClick(index)}
                    />
                  </div>
                  <div>
                    <h3 className=' font-semibold'>{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal for displaying the enlarged image */}
      {selectedProjectIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleCloseModal}>
          <div className="max-h-80vh relative" onClick={handleModalClick}>
            <div className="absolute top-0 right-0 m-4">
              <button onClick={handleCloseModal}>
              </button>
            </div>
            <div className="relative">
              <Image
                src={projects[selectedProjectIndex].images[selectedImageIndex]}
                alt={`Project ${selectedProjectIndex + 1}`}
                width={800}
                height={450}
                layout="responsive"
                className="rounded-lg"
                style={{ border: 'black', boxShadow : '0 0 40px 2px black', width: '800px', height: '450', maxWidth: '90vw', maxHeight: '80vh', objectFit: 'cover', objectPosition: 'center', margin: '0 auto', padding: '20' }}
              />
              <button className="absolute top-1/2 -translate-y-1/2 left-0 px-4 py-2 text-white bg-black bg-opacity-50 rounded-lg" onClick={handlePrevImage}>
              ← Vorige
              </button>
              <button className="absolute top-1/2 -translate-y-1/2 right-0 px-4 py-2 text-white bg-black bg-opacity-50 rounded-lg" onClick={handleNextImage}>
                Volgende →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
