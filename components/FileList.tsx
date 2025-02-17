'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { FileText, FileImage, Cloud, Package, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import RecentOrder from './RecentOrder';

const FileList = () => {
  const files = useSelector((state: RootState) => state.files.items);

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">My Files</h2>
        <Button variant="default" size="sm" className="flex items-center bg-sky-500 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </Button>
      </div>

      {/* Storage Boxes */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StorageBox 
          title="Documents" 
          files="1,328" 
          size="1.3GB"
          progress={40} 
          color="text-blue-500" 
          progressClass="bg-blue-500"
          icon={<FileText className="w-6 h-6 text-blue-500" />} 
        />
        <StorageBox 
          title="Google Drive" 
          files="2,329" 
          size="2.9GB"
          progress={65} 
          color="text-yellow-500" 
          progressClass="bg-yellow-500"
          icon={<FileImage className="w-6 h-6 text-yellow-500" />} 
        />
        <StorageBox 
          title="One Drive" 
          files="1,916" 
          size="1.7GB"
          progress={55} 
          color="text-blue-400" 
          progressClass="bg-blue-400"
          icon={<Cloud className="w-6 h-6 text-blue-400" />} 
        />
        <StorageBox 
          title="Dropbox" 
          files="1,916" 
          size="1.1GB"
          progress={30} 
          color="text-blue-600" 
          progressClass="bg-blue-600"
          icon={<Package className="w-6 h-6 text-blue-600" />} 
        />
      </div>

      {/* Recent Files Section */}
      <RecentOrder files={files} />
    </div>
  );
};

// Storage Box Component
const StorageBox = ({ 
  title, 
  files, 
  size, 
  progress, 
  color, 
  progressClass, 
  icon 
}: { 
  title: string; 
  files: string; 
  size: string;
  progress: number;
  color: string;
  progressClass: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between mb-2">
        <span className={color}>{icon}</span>
      </div>
      <h3 className="font-medium text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{files} Files</p>
      <div className="relative mt-2 h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
        <div className={`h-1 rounded-full ${progressClass}`} style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">{size}</p>
    </div>
  );
};

export default FileList;
