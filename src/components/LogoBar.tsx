export default function LogoBar() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-y border-stone-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-stone-500 font-medium mb-8 uppercase tracking-wider">
          Trusted by Fortune 500 enterprises
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-28 h-10 bg-stone-100 rounded-lg flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <span className="text-stone-400 text-sm font-medium">Logo {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
