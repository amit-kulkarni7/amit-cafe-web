const reviews = [
  {
    quote: "The tiramisu alone is worth coming back for. A perfect slice of quiet luxury in the city.",
    author: "Rohan M.",
    featured: false,
  },
  {
    quote: "My favourite escape after college. The Sea Salt Cold Brew and the ambiance make studying feel like a treat.",
    author: "Claire T.",
    featured: false,
  },
  {
    quote: "Came for coffee. Stayed for three hours. The vibe is just unmatched in Portland.",
    author: "Marcus J.",
    featured: false,
  },
  {
    quote: "Quiet luxury in every pour.",
    author: "The Daily",
    featured: true,
  },
];

export default function FloatingReviews() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg py-12 lg:py-stack-lg relative overflow-hidden bg-surface-container-lowest rounded-3xl border border-outline-variant/10">
      <h2 className="font-headline text-[32px] sm:text-[40px] lg:text-5xl text-primary text-center mb-8 sm:mb-12 lg:mb-16 relative z-10 font-bold">
        Whispers of Peace
      </h2>

      {/* Mobile & Tablet List Presentation (Below lg) */}
      <div className="block lg:hidden relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl border shadow-sm ${
                rev.featured
                  ? "bg-primary-container text-white border-primary/20"
                  : "bg-surface text-on-surface border-outline-variant/20 shadow-[0_10px_30px_rgba(61,43,31,0.05)]"
              }`}
            >
              <p
                className={`font-body text-[15px] sm:text-[17px] italic mb-4 leading-relaxed ${
                  rev.featured ? "text-white font-bold" : "text-on-surface"
                }`}
              >
                &quot;{rev.quote}&quot;
              </p>
              <span
                className={`font-body text-[12px] uppercase block tracking-widest font-bold ${
                  rev.featured ? "text-[#dec1af]" : "text-secondary"
                }`}
              >
                — {rev.author}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Floating Layout (lg and above) */}
      <div className="hidden lg:block relative h-[600px] w-full">
        {/* Review 1 */}
        <div className="absolute top-[10%] left-[5%] max-w-sm bg-surface p-8 rounded-xl shadow-[0_20px_40px_rgba(61,43,31,0.08)] z-20 border border-outline-variant/20 transform -rotate-2 review-drift-1">
          <p className="font-body text-[18px] text-on-surface italic mb-6">
            &quot;The tiramisu alone is worth coming back for. A perfect slice of quiet luxury in the city.&quot;
          </p>
          <span className="font-body text-[12px] text-secondary uppercase block tracking-widest font-bold">
            — Rohan M.
          </span>
        </div>
        
        {/* Review 2 */}
        <div className="absolute top-[40%] right-[5%] max-w-sm bg-surface p-8 rounded-xl shadow-[0_20px_40px_rgba(61,43,31,0.08)] z-20 border border-outline-variant/20 transform rotate-3 review-drift-2">
          <p className="font-body text-[18px] text-on-surface italic mb-6">
            &quot;My favourite escape after college. The Sea Salt Cold Brew and the ambiance make studying feel like a treat.&quot;
          </p>
          <span className="font-body text-[12px] text-secondary uppercase block tracking-widest font-bold">
            — Claire T.
          </span>
        </div>
        
        {/* Review 3 */}
        <div className="absolute bottom-[5%] left-[20%] max-w-sm bg-surface p-8 rounded-xl shadow-[0_20px_40px_rgba(61,43,31,0.08)] z-20 border border-outline-variant/20 transform rotate-1 review-drift-3">
          <p className="font-body text-[18px] text-on-surface italic mb-6">
            &quot;Came for coffee. Stayed for three hours. The vibe is just unmatched in Portland.&quot;
          </p>
          <span className="font-body text-[12px] text-secondary uppercase block tracking-widest font-bold">
            — Marcus J.
          </span>
        </div>
        
        {/* Review 4 */}
        <div className="absolute top-[10%] right-[10%] max-w-[300px] bg-primary-container p-6 rounded-xl shadow-[0_20px_40px_rgba(61,43,31,0.12)] z-10 border border-primary/20 transform -rotate-6 review-drift-4">
          <p className="font-body text-[16px] text-white italic mb-4 font-bold">
            &quot;Quiet luxury in every pour.&quot;
          </p>
          <span className="font-body text-[12px] text-[#dec1af] uppercase block tracking-widest font-bold">
            — The Daily
          </span>
        </div>
      </div>

      {/* Central decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
    </section>
  );
}
