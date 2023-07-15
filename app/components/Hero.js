function Hero() {
  return (
    <section
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('./bg_desktop.jpeg')",
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex">
          <div className="w-1/2">
            <h1 className="text-5xl text-white font-bold">Big Text</h1>
          </div>
          <div class="w-1/2">
            <p class="text-white text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
