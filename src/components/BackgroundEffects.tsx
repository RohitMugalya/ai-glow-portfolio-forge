
const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.15]"></div>
      
      {/* Animated "stars" */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute top-3/4 left-2/3 w-2 h-2 bg-primary rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-3/4 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default BackgroundEffects;
