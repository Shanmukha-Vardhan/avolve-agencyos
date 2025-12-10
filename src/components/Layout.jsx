
import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  UserPlus,
  KanbanSquare,
  CreditCard,
  Mail,
  Hexagon,
  Users,
  Wand2,
  FileText,
  Receipt,
  Calendar as CalendarIcon
} from 'lucide-react';
import '../styles/Layout.css';
import { motion } from 'framer-motion';

const Layout = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/onboarding', icon: UserPlus, label: 'Onboarding' },
    { path: '/projects', icon: KanbanSquare, label: 'Projects' },
    { path: '/dealflow', icon: Wand2, label: 'DealFlow AI' },
    { path: '/team', icon: Users, label: 'Team' },
    { path: '/invoices', icon: Receipt, label: 'Invoices' },
    { path: '/calendar', icon: CalendarIcon, label: 'Calendar' },
    { path: '/pricing', icon: CreditCard, label: 'Pricing' },
    { path: '/contact', icon: Mail, label: 'Contact' },
    { path: '/notes', icon: FileText, label: 'Dev Notes' },
  ];

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="logo-container">
          <div className="logo-icon">
            <Hexagon size={20} fill="white" />
          </div>
          <span className="logo-text">AgencyOS</span>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};

export default Layout;
