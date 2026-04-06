import React from "react";

const creativeServices = [
  {
    id: "vid-01",
    title: "Video Editing & Production",
    description: "Cinematic storytelling and professional post-production. We turn raw footage into high-impact visual narratives for any platform.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/16716864424129032754_0",
    service: "Video Editing"
  },
  {
    id: "promo-02",
    title: "Promotional Videos",
    description: "Engaging commercial content designed to sell. From social media ads to corporate brand stories that convert viewers into customers.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/8690837764084221968_0",
    service: "Marketing"
  },
  {
    id: "gfx-03",
    title: "Graphic Design: Banners, YouTube Thumbnails & Flyers",
    description: "Professional brand identity and marketing materials. We design banners, youtube thumbnails and flyers that represent your brand's modern professional edge.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/8947684232893878767_0",
    service: "Design"
  },
  {
    id: "lp-04",
    title: "Simple Landing Pages",
    description: "High-conversion, minimalist single-page websites designed for speed and clarity. Perfect for lead generation and product launches.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/17562147661473925793_0",
    service: "Web UX"
  }
];

export default function CreativeStudioPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Visual Hero */}
      <section className="relative h-[70vh] w-full bg-neutral-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="http://googleusercontent.com/image_collection/image_retrieval/16716864424129032754_1" 
            className="h-full w-full object-cover opacity-60"
            alt="Creative Studio"
          />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black tracking-tighter text-white md:text-8xl">
              CREATIVE <span className="text-neutral-400">STUDIO</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-300">
              Where high-end technology meets artistic vision. 
              We craft the visuals that define your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Creative Portfolio Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="columns-1 gap-8 space-y-8 md:columns-2">
          {creativeServices.map((item) => (
            <div 
              key={item.id} 
              className="group relative break-inside-avoid overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  {item.service}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-neutral-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-900 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to start a creative project?</h2>
        <p className="mt-4 text-neutral-400">Let's build something beautiful together.</p>
        <button className="mt-8 rounded-full bg-blue-600 px-10 py-4 font-bold transition hover:bg-blue-700">
          Get a Quote
        </button>
      </section>
    </div>
  );
}