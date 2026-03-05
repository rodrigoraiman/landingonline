import Image from 'next/image';

export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Circular logo container - clips image to circle */}
      <div className="relative w-12 h-12 rounded-full shadow-md border-2 border-green-500 dark:border-green-400 overflow-hidden bg-white dark:bg-slate-800">
        <Image
          src="/images/logo.png"
          alt="Terre Paysage Logo"
          width={48}
          height={48}
          className="w-full h-full object-cover rounded-full"
          priority
        />
      </div>
      
      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-slate-800 dark:text-white font-bold text-base tracking-wide">
          TERRE VIVA
        </span>
        <span className="text-green-600 dark:text-green-400 font-medium text-base tracking-wider">
          PAYSAGE
        </span>
      </div>
    </div>
  );
}
