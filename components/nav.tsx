'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {
  Bars3Icon,
  BookOpenIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { SiGithub, SiLinkedin, SiTwitter, SiYoutube } from 'react-icons/si';

const navigation = [
  { name: 'Blog', href: '/blog', icon: BookOpenIcon },
  { name: 'YouTube', href: '#', icon: SiYoutube },
  { name: 'GitHub', href: '#', icon: SiGithub },
  { name: 'Twitter', href: '#', icon: SiTwitter },
  { name: 'LinkedIn', href: '#', icon: SiLinkedin },
];

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Navigation(props: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div {...props}>
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="font-bold uppercase tracking-wider">
            Aman Thakur
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:bg-slate-200 rounded-md px-3 py-2"
            >
              {/* <item.icon className="h-4 w-4 opacity-70" aria-hidden="true" /> */}
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 lg:px-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="font-bold text-sm uppercase tracking-wider"
            >
              Aman Thakur
            </Link>
            <button
              type="button"
              className="rounded-md text-gray-700 p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-sm font-medium text-slate-700 rounded-lg py-2 px-3 hover:bg-slate-100"
                  >
                    <item.icon
                      className="h-4 w-4 opacity-70"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
