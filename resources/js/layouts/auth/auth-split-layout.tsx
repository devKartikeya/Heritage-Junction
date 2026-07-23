import { Link, usePage } from '@inertiajs/react';
// import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSplitLayout({
  children,
  title,
  description,
}: AuthLayoutProps) {
  // const { name } = usePage().props;

  return (
    <div className="bg-white text-black relative grid h-dvh flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
      
      {/* Left Section with Image + Overlay + Motivational Text */}
      <div className="relative hidden h-full flex-col lg:flex dark:border-r">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://imgs.search.brave.com/uP2hw3YVoddC7BTbF4bKtaO3bKwgFBtSyUNGrJrapBM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODYz/NjU1ODgyL3Bob3Rv/L3NhZGh1LWluZGlh/bi1ob2x5bWVuLXNp/dHRpbmctaW4tdGhl/LXRlbXBsZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RnYx/bG43SXNvdDNrRTdQ/dEM1ekFxNnNXVXJ5/U2hlSmxhMjd5ZkNf/Wk1wQT0)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Motivational Text */}
        <div className="relative z-10 flex flex-col items-center justify-evenly h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
            {title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg max-w-md text-gray-200">
            Unlock authentic travel experiences, cultural immersion, and unforgettable memories. 
            Join a community of explorers who believe travel is more than movement — it’s transformation.
          </p>
        </div>
      </div>

      {/* Right Section with Signup Form */}
      <div className="w-full lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Link
            href={home()}
            className="relative z-20 flex items-center justify-center lg:hidden"
          >
          </Link>
          <div className="flex flex-col items-start gap-2 text-left sm:items-center sm:text-center">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-sm text-balance font-bold text-muted-foreground">
              {description}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
