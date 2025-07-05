export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Welcome to My Blog</h1>
        <p className="text-xl text-muted-foreground">
          Thoughts, stories and ideas about programming, design, and technology.
        </p>
      </div>

      {/* Featured post */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Featured Post</h2>
        <article className="p-6 rounded-lg border border-border hover:bg-secondary/10 transition-colors">
          <div className="mb-2 text-sm text-muted-foreground">October 15, 2024</div>
          <h3 className="text-xl font-semibold mb-2">Building a Modern Blog with Next.js and Tailwind CSS</h3>
          <p className="text-muted-foreground mb-4">
            Learn how to create a beautiful, responsive blog using the latest web technologies.
            This comprehensive guide covers everything from setup to deployment.
          </p>
          <a href="#" className="text-primary font-medium hover:underline">Read more →</a>
        </article>
      </div>

      {/* Recent posts */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Recent Posts</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <article key={i} className="p-6 rounded-lg border border-border hover:bg-secondary/10 transition-colors">
              <div className="mb-2 text-sm text-muted-foreground">October {i + 5}, 2024</div>
              <h3 className="text-xl font-semibold mb-2">Sample Blog Post {i}</h3>
              <p className="text-muted-foreground mb-4">
                This is a sample blog post description. It would contain a brief summary of the article content.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
