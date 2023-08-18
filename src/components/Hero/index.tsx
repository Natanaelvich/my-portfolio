export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-center items-center h-96 gap-28">
      <div className="w-96 flex flex-col gap-6">
        <h1 className="w-96 text-slate-800 text-5xl font-bold leading-10">
          Hi, I am John,
          <br />
          Creative Technologist
        </h1>
        <p className="text-slate-800 text-base font-normal">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <button className="w-52 h-12 bg-red-400 rounded-sm text-white text-xl font-medium">
          Download Resume
        </button>
      </div>

      <div className="relative">
        <img
          src="https://github.com/natanaelvich.png"
          alt="Natanael Lima"
          className="w-60 h-60 rounded-full"
        />
        <div className="w-60 h-60 bg-slate-100 rounded-full absolute -bottom-2 -left-2 z-0" />
      </div>
    </div>
  )
}
