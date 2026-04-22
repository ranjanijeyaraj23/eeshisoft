"use client";

const GradientBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] bg-yellow-400"></div>

        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] bg-orange-400"></div>

        <div className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] rounded-full opacity-20 blur-[80px] bg-red-400"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;