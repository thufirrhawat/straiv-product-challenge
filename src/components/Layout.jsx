import { useState, useEffect } from 'react';
import { LogOut, Menu, X, Home } from 'lucide-react';
import { setAuthStatus, getDemoState, saveDemoState } from '../utils/storage';
import { SECTIONS, SECTION_LABELS, SECTION_DESCRIPTIONS, APP_CONFIG } from '../utils/constants';
import nuriPp from '../assets/images/nuri-pp.png';

// Import section components
import Overview from './sections/Overview';
import CurrentAnalysis from './sections/CurrentAnalysis';
import StickinessStrategy from './sections/StickinessStrategy';
import ConversionStrategy from './sections/ConversionStrategy';
import InnovationStrategy from './sections/InnovationStrategy';
import GrowthStrategy from './sections/GrowthStrategy';
import ImplementationRoadmap from './sections/ImplementationRoadmap';
import PrototypeDemo from './sections/PrototypeDemo';

const Layout = ({ onLogout }) => {
  const [currentSection, setCurrentSection] = useState(SECTIONS.OVERVIEW);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [demoState, setDemoState] = useState(getDemoState());

  useEffect(() => {
    const state = getDemoState();
    setCurrentSection(state.currentSection || SECTIONS.OVERVIEW);
    setDemoState(state);
  }, []);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    setIsMobileMenuOpen(false);
    
    // Update demo state
    const updatedState = {
      ...demoState,
      currentSection: section
    };
    setDemoState(updatedState);
    saveDemoState(updatedState);
  };

  const handleLogout = () => {
    setAuthStatus(false);
    onLogout();
  };

  const renderCurrentSection = () => {
    const sectionProps = { demoState, setDemoState, onSectionChange: handleSectionChange };
    
    switch (currentSection) {
      case SECTIONS.OVERVIEW:
        return <Overview {...sectionProps} />;
      case SECTIONS.CURRENT_ANALYSIS:
        return <CurrentAnalysis {...sectionProps} />;
      case SECTIONS.STICKINESS_STRATEGY:
        return <StickinessStrategy {...sectionProps} />;
      case SECTIONS.CONVERSION_STRATEGY:
        return <ConversionStrategy {...sectionProps} />;
      case SECTIONS.INNOVATION_STRATEGY:
        return <InnovationStrategy {...sectionProps} />;
      case SECTIONS.GROWTH_STRATEGY:
        return <GrowthStrategy {...sectionProps} />;
      case SECTIONS.IMPLEMENTATION_ROADMAP:
        return <ImplementationRoadmap {...sectionProps} />;
      case SECTIONS.PROTOTYPE_DEMO:
        return <PrototypeDemo {...sectionProps} />;
      default:
        return <Overview {...sectionProps} />;
    }
  };

  const sectionEntries = Object.entries(SECTIONS);

  return (
    <div className="drawer lg:drawer-open">
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" 
             checked={isMobileMenuOpen} 
             onChange={(e) => setIsMobileMenuOpen(e.target.checked)} />
      
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100 shadow-sm border-b lg:hidden sticky top-0 z-50">
          <div className="flex-none">
            <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </label>
          </div>
          
          <div className="flex-1">
            <h1 className="text-lg font-bold text-primary">{APP_CONFIG.name}</h1>
          </div>
          
          <div className="flex-none">
            <button 
              className="btn btn-ghost btn-sm"
              onClick={handleLogout}
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 p-4 lg:p-6 max-w-full overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Desktop section header */}
            <div className="hidden lg:block mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-primary mb-2">
                    {SECTION_LABELS[currentSection]}
                  </h1>
                  <p className="text-base-content/60">
                    {SECTION_DESCRIPTIONS[currentSection]}
                  </p>
                </div>
                <button 
                  className="btn btn-outline btn-sm"
                  onClick={handleLogout}
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>

            {/* Section content */}
            <div className="fade-in">
              {renderCurrentSection()}
            </div>
          </div>
        </main>
      </div>

      {/* Drawer sidebar */}
      <div className="drawer-side">
        <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
        
        <aside className="w-80 min-h-full bg-base-200 flex flex-col">
          {/* Sidebar header */}
          <div className="p-4 border-b border-base-300">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img 
                    src={nuriPp} 
                    alt="Nuri Profile Picture" 
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-primary">{APP_CONFIG.name}</h2>
                <p className="text-xs text-base-content/60">{APP_CONFIG.author}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="menu menu-lg w-full">
              {sectionEntries.map(([key, value], index) => {
                const isActive = currentSection === value;
                
                return (
                  <li key={value} className="mb-1">
                    <button
                      onClick={() => handleSectionChange(value)}
                      className={`flex items-center gap-3 w-full text-left rounded-lg p-3 transition-all duration-200 ${
                        isActive 
                          ? 'bg-primary text-primary-content shadow-md' 
                          : 'hover:bg-base-300'
                      }`}
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-sm">
                          {SECTION_LABELS[value]}
                        </div>
                        <div className={`text-xs opacity-70 ${isActive ? 'text-primary-content' : 'text-base-content'}`}>
                          {SECTION_DESCRIPTIONS[value]}
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>


        </aside>
      </div>
    </div>
  );
};

export default Layout; 