import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-800 text-white py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">Richard “Tito” Fleming</Link>
        <ul className="flex space-x-4">
          <li><Link href="#education" className="hover:text-slate-300">Education</Link></li>
          <li><Link href="#skills" className="hover:text-slate-300">Skills</Link></li>
          <li><Link href="#projects" className="hover:text-slate-300">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-slate-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
