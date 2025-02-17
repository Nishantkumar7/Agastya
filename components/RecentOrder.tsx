"use client";

import { ChevronDown, File, FileText, FileImage, FileMusic } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const RecentOrder = ({ files }: { files: { id: string; name: string; type: string; size: string; date: string }[] }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Recent Order</h3>
        <Button variant="outline" size="sm" className="text-gray-600 dark:text-gray-300 border dark:border-gray-700">
          See more
        </Button>
      </div>

      {/* Table Container */}
      <div className="w-full">
        {/* Table Header */}
        <div className="grid grid-cols-3 px-4 py-2 text-gray-500 dark:text-gray-400 text-sm font-medium border-b dark:border-gray-700">
          <div className="flex items-center">
            File Name
            <ChevronDown className="w-4 h-4 ml-1 text-gray-400 dark:text-gray-500" />
          </div>
          <div className="flex items-center justify-center">
            Date
            <ChevronDown className="w-4 h-4 ml-1 text-gray-400 dark:text-gray-500" />
          </div>
          <div className="flex items-center justify-end">
            Size
            <ChevronDown className="w-4 h-4 ml-1 text-gray-400 dark:text-gray-500" />
          </div>
        </div>

        {/* File Items */}
        {files.map((file) => (
          <FileItem key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
};

// File Item Component
const FileItem = ({ file }: { file: { name: string; type: string; size: string; date: string } }) => {
  const getFileIcon = (type: string) => {
    switch (type) {
      case "xd":
        return { icon: <FileText className="text-pink-500" />, bg: "bg-pink-100 dark:bg-pink-900" };
      case "figma":
        return { icon: <FileText className="text-purple-500" />, bg: "bg-purple-100 dark:bg-purple-900" };
      case "pdf":
        return { icon: <FileText className="text-red-500" />, bg: "bg-red-100 dark:bg-red-900" };
      case "mp3":
        return { icon: <FileMusic className="text-green-500" />, bg: "bg-green-100 dark:bg-green-900" };
      case "media":
        return { icon: <FileImage className="text-yellow-500" />, bg: "bg-yellow-100 dark:bg-yellow-900" };
      case "excel":
        return { icon: <FileText className="text-blue-500" />, bg: "bg-blue-100 dark:bg-blue-900" };
      default:
        return { icon: <File className="text-gray-500 dark:text-gray-400" />, bg: "bg-gray-100 dark:bg-gray-800" };
    }
  };

  const { icon, bg } = getFileIcon(file.type);

  return (
    <div className="grid grid-cols-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg border-b dark:border-gray-700 items-center">
      {/* File Name */}
      <div className="flex items-center">
        <div className={clsx("w-8 h-8 flex items-center justify-center rounded-lg", bg)}>
          {icon}
        </div>
        <div className="ml-3">
          <p className="font-medium text-gray-900 dark:text-gray-100">{file.name}</p>
        </div>
      </div>

      {/* Date - Center Aligned */}
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{file.date}</p>

      {/* Size - Right Aligned */}
      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 text-right">{file.size}</span>
    </div>
  );
};

export default RecentOrder;
