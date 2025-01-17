import Image from 'next/image';

export default function Intro() {
  return (
    <section className="py-8 md:py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 md:w-64 flex-shrink-0">
          <Image
            src="/Tito.png"
            alt='Richard "Tito" Fleming'
            width={300}
            height={300}
            className="rounded-full shadow-lg"
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Richard &quot;Tito&quot; Fleming</h1>
          <h2 className="text-xl md:text-2xl text-slate-600 mb-4">Computer Science Student at Brown University</h2>
          <p className="text-slate-700 max-w-2xl">
            Passionate about software development, artificial intelligence, and using technology to solve real-world problems. 
            Always eager to learn and take on new challenges in the ever-evolving field of computer science.
          </p>
        </div>
      </div>
    </section>
  );
}
