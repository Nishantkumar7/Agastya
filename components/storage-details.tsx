"use client";

import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell } from "recharts";
import { FileText, Film, Folder, HelpCircle } from "lucide-react";

export function StorageDetails() {
  const storageData = {
    total: 128,
    used: 29.1,
    files: [
      { type: "Documents Files", size: 1.3, color: "#007bff", icon: <FileText size={16} className="text-blue-500" />, filesCount: 1328 },
      { type: "Media Files", size: 15.1, color: "#00bcd4", icon: <Film size={16} className="text-cyan-500" />, filesCount: 1328 },
      { type: "Other Files", size: 12.7, color: "#ffc107", icon: <Folder size={16} className="text-yellow-500" />, filesCount: 1328 },
      { type: "Unknown", size: 1.3, color: "#dc3545", icon: <HelpCircle size={16} className="text-red-500" />, filesCount: 428 },
    ],
  };

  const remainingStorage = storageData.total - storageData.used;

  return (
    <Card className="p-6 w-full max-w-sm mx-auto bg-white dark:bg-gray-900 shadow-md">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Storage Details</h2>
      
      <div className="flex flex-col items-center space-y-4">
        {/* Pie Chart with Storage Display */}
        <div className="relative flex items-center justify-center">
          <PieChart width={180} height={180}>
            <Pie
              data={[...storageData.files, { type: "Remaining", size: remainingStorage, color: "#d3d3d3" }]}
              dataKey="size"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              fill="#8884d8"
              paddingAngle={5}
              stroke="none"
            >
              {[...storageData.files, { type: "Remaining", color: "#d3d3d3" }].map((file, index) => (
                <Cell key={`cell-${index}`} fill={file.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{storageData.used}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">of {storageData.total}GB</div>
          </div>
        </div>

        {/* File Breakdown */}
        <div className="w-full space-y-2">
          {storageData.files.map((file) => (
            <div key={file.type} className="flex items-center justify-between p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
              <div className="flex items-center space-x-2">
                <div>{file.icon}</div>
                <div>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100 block">{file.type}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{file.filesCount} Files</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{file.size}GB</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
