import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProcessPage from "./pages/ProcessPage";

export type SortField = "kov" | "revisionDate";
export type SortDirection = "asc" | "desc";

export default function App() {
  const [sortField, setSortField] = useState<SortField>("kov");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [selectedCounty, setSelectedCounty] = useState<string>("");

  const resetFilters = () => {
    setSortField("kov");
    setSortDirection("asc");
    setSelectedCounty("");
  };

  return (
    <Router>
      <div className="flex flex-col h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
        {/* Header Navigation */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <Link 
            to="/" 
            onClick={resetFilters}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full p-1">
                <rect x="25" y="15" width="50" height="70" rx="2" fill="white"/>
                <text x="50" y="65" fontFamily="serif" fontSize="45" fontWeight="bold" fill="#1d4ed8" textAnchor="middle">§</text>
              </svg>
            </div>
            <h1 className="text-sm sm:text-xl font-bold tracking-tight uppercase text-slate-800">KOV avalike ürituste määrused</h1>
          </Link>
        </header>

        <main className="flex-1 flex overflow-hidden">
          <Routes>
            <Route path="/" element={
              <MainPage 
                sortField={sortField} 
                setSortField={setSortField}
                sortDirection={sortDirection}
                setSortDirection={setSortDirection}
                selectedCounty={selectedCounty}
                setSelectedCounty={setSelectedCounty}
              />
            } />
            <Route path="/process/:id" element={<ProcessPage />} />
          </Routes>
        </main>

        {/* Footer Bar */}
        <footer className="h-10 bg-slate-800 text-slate-400 flex items-center px-8 text-[10px] justify-center shrink-0">
          <span>Süsteemi versioon 2.4.0-stable</span>
        </footer>
      </div>
    </Router>
  );
}
