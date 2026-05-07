import React, { useEffect, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { regulations } from "@/src/data";
import { ArrowLeft, ExternalLink, Edit2, Save, X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  securityLevel: "loose",
  fontFamily: "inherit",
});

const Mermaid = ({ chart }: { chart: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const renderChart = async () => {
      if (ref.current && chart) {
        try {
          const id = `mermaid-chart-${Math.random().toString(36).slice(2, 11)}`;
          ref.current.innerHTML = "";
          const { svg } = await mermaid.render(id, chart);
          if (ref.current) {
            ref.current.innerHTML = svg;
          }
        } catch (error) {
          console.error("Mermaid render error:", error);
          if (ref.current) {
            ref.current.innerHTML = `<div class="text-red-500 text-xs p-4">Viga joonise genereerimisel</div>`;
          }
        }
      }
    };

    renderChart();
  }, [chart]);

  const updateOrigin = (clientX: number, clientY: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    setZoomOrigin({ x, y });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left click
    setIsZoomed(true);
    updateOrigin(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isZoomed) {
      updateOrigin(e.clientX, e.clientY);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsZoomed(true);
    updateOrigin(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isZoomed) {
      updateOrigin(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleEnd = () => {
    setIsZoomed(false);
  };

  return (
    <div 
      className="flex justify-center w-full py-4 cursor-zoom-in select-none touch-none"
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
      style={{
        transform: isZoomed ? 'scale(3)' : 'scale(1)',
        transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
        transition: isZoomed ? 'transform 0.15s ease-out' : 'transform 0.2s ease-in-out',
        zIndex: isZoomed ? 50 : 1,
      }}
    />
  );
};

export default function ProcessPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const reg = regulations.find((r) => r.id === id);

  const [isEditing, setIsEditing] = useState(false);
  const [currentChart, setCurrentChart] = useState("");
  const [editableCode, setEditableCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  const storageKey = `mermaid_override_${id}`;

  useEffect(() => {
    if (reg) {
      const savedChart = localStorage.getItem(storageKey);
      const initialChart = savedChart || reg.mermaid;
      setCurrentChart(initialChart);
      setEditableCode(initialChart);
    }
  }, [reg, id, storageKey]);

  if (!reg) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-slate-800">Määrust ei leitud</h1>
        <Button onClick={() => navigate("/")}>Tagasi pealehele</Button>
      </div>
    );
  }

  const steps = reg.steps;

  const handleEdit = () => {
    setEditableCode(currentChart);
    setIsEditing(true);
    setError(null);
  };

  const handleSave = async () => {
    try {
      await mermaid.parse(editableCode);
      setCurrentChart(editableCode);
      localStorage.setItem(storageKey, editableCode);
      setIsEditing(false);
      setError(null);
    } catch (e: any) {
      setError(e.message || "Vigane Mermaid kood. Palun kontrolli süntaksit.");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setError(null);
    setEditableCode(currentChart);
  };

  return (
    <aside className="fixed right-0 top-16 bottom-10 w-full md:w-[850px] bg-white border-l border-slate-200 flex flex-col shadow-2xl z-20 animate-in slide-in-from-right duration-300">
      <div className="p-8 flex flex-col gap-6 h-full overflow-y-auto">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 leading-tight">{reg.kov}</h3>
          </div>
          <button 
            onClick={() => navigate("/")}
            className="text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 p-2 rounded-full border border-slate-100"
            title="Sule aken"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-12">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Reguleeriv õigusakt</h4>
              <a 
                  href={reg.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-blue-600 hover:underline font-semibold inline-flex items-center gap-1.5 bg-blue-50 px-3 py-2 rounded-lg border border-blue-100 w-full lg:w-auto"
              >
                  {reg.name}
                  <ExternalLink className="h-3 w-3" />
              </a>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Protsessi parameetrid</h4>
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-200">
                    <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Taotluse esitamine</p>
                        <p className="text-sm font-semibold text-slate-700">{reg.deadlineDays || "Pole määratud"}</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Menetlemise aeg</p>
                        <p className="text-sm font-semibold text-slate-700">{reg.processingDays || "Pole määratud"}</p>
                    </div>
                </div>

                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Protsessi sammud</h4>
                <div className="space-y-4">
                    {steps.map((step, i) => {
                        const roll = step.role;
                        const tegevus = step.action;
                        const isDecision = tegevus.includes("?");
                        
                        return (
                            <div key={i} className="flex gap-3 items-start group">
                                <div className="flex flex-col items-center pt-1">
                                    <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${isDecision ? 'bg-amber-400 ring-2 ring-amber-100' : 'bg-blue-500 ring-2 ring-blue-100'}`}></div>
                                    {i < steps.length - 1 && <div className="w-px h-full min-h-[20px] bg-slate-200 mt-1"></div>}
                                </div>
                                <div className="text-[13px] leading-relaxed">
                                    <span className="font-bold text-slate-900">{roll}</span>
                                    <span className="text-slate-400 mx-1">:</span>
                                    <span className={isDecision ? "text-amber-800 font-medium" : "text-slate-700"}>{tegevus}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            <div className="p-4 bg-slate-900 rounded-xl text-white">
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Märkus</p>
                <p className="text-xs text-slate-300">Automaatselt genereeritud protsessikirjeldus vastavalt KOV määruse tekstile (seisuga 20.04.2026).</p>
            </div>
          </div>

          <div className="lg:col-span-7">
             <div className="sticky top-0 h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Visuaalne protsessiskeem</h4>
                    <div className="flex gap-2">
                        {!isEditing ? (
                            <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={handleEdit}
                                className="h-7 text-[10px] gap-1.5 px-2.5"
                            >
                                <Edit2 className="h-3 w-3" />
                                Muuda
                            </Button>
                        ) : (
                            <>
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    onClick={handleCancel}
                                    className="h-7 text-[10px] gap-1.5 px-2.5 text-slate-500"
                                >
                                    <X className="h-3 w-3" />
                                    Katkesta
                                </Button>
                                <Button 
                                    variant="default" 
                                    size="sm" 
                                    onClick={handleSave}
                                    className="h-7 text-[10px] gap-1.5 px-2.5 bg-blue-600 hover:bg-blue-700"
                                >
                                    <Save className="h-3 w-3" />
                                    Salvesta
                                </Button>
                            </>
                        )}
                    </div>
                </div>
                
                <div className={`flex-1 bg-white rounded-xl border border-slate-200 shadow-sm p-4 min-h-[400px] lg:min-h-[600px] flex flex-col overflow-hidden ${isEditing ? 'bg-slate-50' : ''}`}>
                    {isEditing ? (
                        <div className="flex flex-col h-full gap-3">
                            {error && (
                                <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex gap-2 items-start text-red-700 text-xs animate-in fade-in slide-in-from-top-1">
                                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                                    <p>{error}</p>
                                </div>
                            )}
                            <textarea
                                value={editableCode}
                                onChange={(e) => setEditableCode(e.target.value)}
                                className="flex-1 w-full p-4 font-mono text-xs bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none shadow-inner"
                                placeholder="Sisesta Mermaid kood siia..."
                                spellCheck={false}
                            />
                        </div>
                    ) : (
                        <div className="flex items-start justify-center overflow-hidden h-full pt-4">
                            <Mermaid chart={currentChart.trim()} />
                        </div>
                    )}
                </div>
             </div>
          </div>
        </div>

        <div className="mt-auto pt-8 border-t border-slate-100">
          <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 text-sm font-semibold uppercase tracking-wider transition-all hover:gap-3">
            <ArrowLeft className="h-4 w-4" />
            Tagasi pealehele
          </Link>
        </div>
      </div>
    </aside>
  );
}
