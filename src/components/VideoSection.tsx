const VideoSection = () => {
  // Convert YouTube URL to embed format
  const videoId = "1LLS1HyDxMs";
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-secondary mb-4">
            Conheça a <span className="text-primary">Agrobiotech</span>
          </h2>
          <p className="font-montserrat text-muted-foreground text-lg">
            Assista ao nosso vídeo institucional e saiba mais sobre nós
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 pointer-events-none z-10" />
          
          <div className="aspect-video">
            <iframe
              src={embedUrl}
              title="Vídeo Institucional Agrobiotech"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
