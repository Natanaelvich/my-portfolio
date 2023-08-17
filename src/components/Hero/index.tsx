export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
          Natanael
        </h1>
        <h2 className="will-change-opacity text-lg font-medium text-gray-400 will-change-transform">
          3th grader • Fullstack Web Developer • Tech Lead
        </h2>
        <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
          I am a fullstack web developer, my main stack is React, Node.js and
          React Native. I am also a tech lead in my day to day job.
        </p>
      </div>
    </div>
  )
}
