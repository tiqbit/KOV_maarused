import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProcessPage from "./pages/ProcessPage";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
        {/* Header Navigation */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">K</div>
            <h1 className="text-xl font-bold tracking-tight uppercase text-slate-800">KOV avalike ürituste määrused</h1>
          </div>
        </header>

        <main className="flex-1 flex overflow-hidden">
          <Routes>
            <Route path="/" element={<MainPage />} />
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
