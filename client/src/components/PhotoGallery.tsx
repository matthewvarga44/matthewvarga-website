import React from 'react';

interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  span?: 'col-span-1' | 'col-span-2';
}

const photos: PhotoItem[] = [
  {
    id: '1',
    src: '/images/62b1462d-8a9e-4087-9873-8eb9c666ec64.jpeg',
    alt: 'Family at Castaway Cay cruise port',
    caption: 'Living the Dream with Family',
    span: 'col-span-1'
  },
  {
    id: '2',
    src: '/images/6cec682f-2935-4430-846b-8b4ca3fb254d.jpeg',
    alt: 'Family with Minnie Mouse on Disney Cruise',
    caption: 'Creating Unforgettable Memories',
    span: 'col-span-1'
  },
  {
    id: '3',
    src: '/images/IMG_8960.jpeg',
    alt: 'Relaxing on cruise deck with ocean view',
    caption: 'Enjoying the Fruits of Financial Freedom',
    span: 'col-span-1'
  },
  {
    id: '4',
    src: '/images/IMG_3974.jpeg',
    alt: 'Surfing adventure lifestyle',
    caption: 'Adventure and Lifestyle Freedom',
    span: 'col-span-1'
  }
];

export function PhotoGallery() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Life Beyond the 9-5
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This is what financial freedom looks like. Real moments from my journey—family, adventure, and the lifestyle that's possible when you build wealth through real estate.
          </p>
        </div>

        {/* 4-Column Grid - All Images Side by Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${photo.span}`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-slate-200 aspect-square">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold text-lg">
                    {photo.caption}
                  </p>
                </div>
              </div>

              {/* Caption Below Image */}
              <div className="p-3 bg-white">
                <p className="text-center text-foreground font-medium text-xs">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            These moments are the result of intentional investing and strategic planning. Your story can be just as inspiring.
          </p>
          <a
            href="/apply-mastermind"
            className="inline-block px-8 py-3 bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full transition-colors duration-200 shadow-lg shadow-secondary/30"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
