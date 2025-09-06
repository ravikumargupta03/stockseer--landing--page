export default function Home() {
    return (
      <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Ravi Gupta</h1>
        <p className="text-lg text-gray-300 mb-6">
          AI Enthusiast | Data Science Student | C++ Developer
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition"
        >
          View My Projects
        </a>
      </main>
    );
  }
  