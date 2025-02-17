'use client';

import { 
  LayoutDashboard, 
  Receipt, 
  ClipboardList, 
  Files, 
  Store, 
  Bell, 
  User, 
  Settings, 
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center mb-8">
        <Files className="h-8 w-8 text-blue-500" />
        <span className="ml-2 text-xl font-bold text-gray-900 dark:text-gray-100">Shop</span>
      </div>
      
      <nav className="space-y-2">
        <SidebarItem icon={<LayoutDashboard />} text="Dashboard" active={false} />
        <SidebarItem icon={<Receipt />} text="Transaction" active={false} />
        <SidebarItem icon={<ClipboardList />} text="Task" active={false} />
        <SidebarItem icon={<Files />} text="Documents" active={true} />
        <SidebarItem icon={<Store />} text="Store" active={false} />
        <SidebarItem icon={<Bell />} text="Notification" active={false} />
        <SidebarItem icon={<User />} text="Profile" active={false} />
        <SidebarItem icon={<Settings />} text="Settings" active={false} />
      </nav>

      <div className="absolute bottom-4">
        <SidebarItem icon={<LogOut />} text="Log Out" active={false} />
      </div>
    </div>
  );
};

const SidebarItem = ({ 
  icon, 
  text, 
  active 
}: { 
  icon: React.ReactNode; 
  text: string; 
  active: boolean;
}) => {
  return (
    <div className={`flex items-center p-2 rounded-lg cursor-pointer
      ${active ? 'bg-blue-50 dark:bg-blue-900 text-blue-500' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
      <span className="w-5 h-5">{icon}</span>
      <span className="ml-3">{text}</span>
    </div>
  );
};

export default Sidebar;
