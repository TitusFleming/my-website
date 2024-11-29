import Image from 'next/image';

export default function Intro() {
  return (
    <section className="py-16 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/Tito.png"
          alt="Richard “Tito” Fleming"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Richard “Tito” Fleming</h1>
        <h2 className="text-2xl text-slate-600 mb-4">Computer Science Sophomore at Brown University</h2>
        <p className="text-slate-700">
          Passionate about software development, artificial intelligence, and using technology to solve real-world problems. 
          Always eager to learn and take on new challenges in the ever-evolving field of computer science.
        </p>
      </div>
    </section>
  );
}
