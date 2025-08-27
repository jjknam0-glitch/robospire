import { Card, CardContent } from "@/components/ui/card"

export function ImpactSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Measuring Our <span className="text-primary">Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We're just getting started on our journey to transform robotics education. Stay tuned as we begin tracking
            our impact and celebrating student achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="h-8 w-8 bg-primary/20 rounded"></div>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">--</div>
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground text-sm text-pretty">We'll share our impact metrics as we grow</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
