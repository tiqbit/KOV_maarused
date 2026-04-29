import { useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { regulations } from "@/src/data";
import { ArrowLeft, ExternalLink } from "lucide-react";
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

  useEffect(() => {
    const renderChart = async () => {
      if (ref.current && chart) {
        try {
          // Generate a unique ID for this specific render instance
          const id = `mermaid-chart-${Math.random().toString(36).slice(2, 11)}`;
          
          // Clear current content before rendering
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

  return (
    <div className="flex justify-center w-full py-4 overflow-x-auto" ref={ref} />
  );
};

export default function ProcessPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const reg = regulations.find((r) => r.id === id);

  if (!reg) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-slate-800">Määrust ei leitud</h1>
        <Button onClick={() => navigate("/")}>Tagasi pealehele</Button>
      </div>
    );
  }

  const mermaidChart = reg.mermaid;
  const steps = reg.steps;

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
             <div className="sticky top-0">
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">Visuaalne protsessiskeem</h4>
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 min-h-[400px] flex items-center justify-center overflow-auto">
                    <Mermaid chart={mermaidChart} />
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
