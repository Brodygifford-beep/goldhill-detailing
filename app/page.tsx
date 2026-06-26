export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">
          GOLDHILL DETAILING
        </h1>
        <p className="text-zinc-400 text-lg">
          Premium mobile automotive detailing and surface protection.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-zinc-200 transition">
          Book a Detail
        </button>
      </div>
    </main>
  );
}