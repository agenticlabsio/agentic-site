import LiquidEther from '@/components/LiquidEther';

export default function RootPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-8">
        <main className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            Welcome to My Site
          </h1>
          <p className="text-xl text-white/80">
            Interactive liquid ether background
          </p>
        </main>
      </div>
    </div>
  );
}