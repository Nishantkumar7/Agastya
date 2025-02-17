'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import FileList from '@/components/FileList';
import { Avatar } from '@/components/ui/avatar';
import { Search, Sun, Moon } from 'lucide-react';
import { StorageDetails } from '@/components/storage-details';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <header className="bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            {/* Left Section: Title */}
            <h1 className="text-lg font-semibold">Documents</h1>

            {/* Right Section: Search Bar, Theme Toggle & User Profile */}
            <div className="flex items-center space-x-6">
              {/* Search Bar */}
              <div className="relative flex items-center w-96 border rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-2 pl-3 pr-10 border-none bg-transparent focus:ring-0 outline-none text-gray-900 dark:text-gray-100"
                />
                <button className="absolute right-2 text-gray-500 dark:text-gray-300">
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* Theme Toggle Button */}
              <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-2">
                <img
                  src="https://www.instyle.com/thmb/5wNi1r17rbIhFjBOxzfKCodpwL4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2007-2-angelina-jolie-567_0-1a69d505150c4046a54b65334a6fd636.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full object-contain"
                />
                <p className="font-medium">Angelina Joli</p>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <FileList />
            </div>
            <div>
              <StorageDetails />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
