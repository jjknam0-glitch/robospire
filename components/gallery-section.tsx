"use client"

const galleryImages: { src: string; alt: string; title: string }[] = []

export function GallerySection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Coming soon! We'll be sharing photos and videos of our students' robotics journey as we begin our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto mb-4"></div>
                  <p className="text-sm text-muted-foreground">Photo Coming Soon</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
