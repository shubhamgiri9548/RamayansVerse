import { Link } from "react-router-dom";
import  { YATRA_STOPS } from "../data/stops";


function Yatra() {
  
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 overflow-hidden">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 tracking-wide uppercase">
          The Sacred Yatra
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          Follow the chronological path of Shri Rama's epic journey linked across historical milestones.
        </p>
      </div>

      {/* Timeline Map Container */}
      <div className="max-w-5xl mx-auto relative">
        
        {/* CSS Animation Styles Injector */}
        <style>{`
          @keyframes dash {
            to {
              stroke-dashoffset: -40;
            }
          }
          .animate-route-dots {
            stroke-dasharray: 8, 8;
            animation: dash 2s linear infinite;
          }
        `}</style>

        {/* Dynamic Dotted Connector Line (Hidden on tiny screens for layout stability) */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 top-4 bottom-4 z-0 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <line 
              x1="50%" y1="0" x2="50%" y2="100%" 
              className="stroke-yellow-600 animate-route-dots" 
              strokeWidth="4"
            />
          </svg>
        </div>

        {/* Timeline Items */}
        <div className="space-y-24 relative z-10">
          {YATRA_STOPS.map((stop, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={stop.id} 
                className={`flex flex-col md:flex-row items-center justify-between w-full relative pl-10 md:pl-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Side Card */}
                <div className="w-full md:w-[45%] bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden p-6 shadow-xl hover:border-yellow-500/50 hover:shadow-[0_0_25px_rgba(234,179,8,0.15)] transition-all duration-300">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={stop.image} 
                      alt={stop.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                    />
                    <span className="absolute bottom-2 right-2 bg-black/80 px-3 py-1 rounded text-xs text-yellow-500 font-semibold tracking-wider">
                      {stop.coordinates}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-yellow-500">{stop.title}</h3>
                  <h4 className="text-sm font-medium text-orange-400 mt-1 italic">{stop.subtitle}</h4>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">{stop.description}</p>
                  
                  <Link 
                    to={stop.seasonLink}
                    className="inline-block mt-5 text-sm bg-yellow-600 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition-colors shadow-md"
                  >
                    Watch Episodes
                  </Link>
                </div>

                {/* Central Map Milestone Node */}
                <div className="absolute left-0 md:left-1/2 transform translate-x-0.5 md:-translate-x-1/2 w-8 h-8 rounded-full bg-black border-4 border-yellow-500 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(234,179,8,0.6)]">
                  <span className="text-xs font-bold text-yellow-500">{stop.id}</span>
                </div>

                {/* Layout Spacer */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Yatra;

