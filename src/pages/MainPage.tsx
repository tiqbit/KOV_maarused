import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { regulations } from "@/src/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ExternalLink, Search, ArrowUpDown, ChevronUp, ChevronDown, Info } from "lucide-react";

type SortField = "kov" | "revisionDate";
type SortDirection = "asc" | "desc";

export default function MainPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<SortField>("kov");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const processedRegulations = useMemo(() => {
    const filtered = regulations.filter(
      (reg) =>
        reg.kov.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return [...filtered].sort((a, b) => {
      let comparison = 0;
      if (sortField === "kov") {
        comparison = a.kov.localeCompare(b.kov, "et");
      } else if (sortField === "revisionDate") {
        const dateA = a.revisionDate.split(".").reverse().join("");
        const dateB = b.revisionDate.split(".").reverse().join("");
        comparison = dateA.localeCompare(dateB);
      }
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [searchTerm, sortField, sortDirection]);

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown className="ml-1 h-3 w-3" />;
    return sortDirection === "asc" ? (
      <ChevronUp className="ml-1 h-3 w-3 text-blue-600" />
    ) : (
      <ChevronDown className="ml-1 h-3 w-3 text-blue-600" />
    );
  };

  return (
    <section className="flex-1 p-6 flex flex-col overflow-hidden">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex-1 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h2 className="font-semibold text-slate-700 uppercase text-xs tracking-wider">
            Avaliku ürituse korraldamise määrused ({regulations.length})
          </h2>
          <div className="relative w-64">
            <Search className="absolute left-3 top-2 h-3.5 w-3.5 text-slate-400" />
            <Input
              placeholder="Otsi omavalitsust..."
              className="pl-9 h-8 text-sm bg-white border-slate-200 focus:ring-blue-100 placeholder:text-slate-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <Table className="table-fixed w-full">
            <TableHeader>
              <TableRow className="hover:bg-transparent border-b border-slate-100">
                <TableHead 
                  className="px-2 lg:px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-600 transition-colors w-24 sm:w-32 lg:w-48"
                  onClick={() => toggleSort("kov")}
                >
                  <div className="flex items-center">
                    KOV Nimetus <SortIcon field="kov" />
                  </div>
                </TableHead>
                <TableHead className="px-2 lg:px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider w-auto">Määrus</TableHead>
                <TableHead 
                  className="px-2 lg:px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider w-20 sm:w-28 lg:w-40 cursor-pointer hover:text-slate-600 transition-colors"
                  onClick={() => toggleSort("revisionDate")}
                >
                  <div className="flex items-center">
                    Jõustumine <SortIcon field="revisionDate" />
                  </div>
                </TableHead>
                <TableHead className="px-2 lg:px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider w-20 sm:w-28 lg:w-32 hidden md:table-cell text-center">Esitamine</TableHead>
                <TableHead className="px-2 lg:px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider w-20 sm:w-28 lg:w-32 hidden xl:table-cell text-center">Menetlus</TableHead>
                <TableHead className="px-2 lg:px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider lg:text-right w-10 lg:w-24"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-sm text-slate-600 divide-y divide-slate-50">
              {processedRegulations.map((reg) => (
                <TableRow key={reg.id} className="hover:bg-blue-50/30 transition-colors">
                  <TableCell className="px-2 lg:px-6 py-3 font-semibold text-slate-800 text-xs sm:text-sm truncate">{reg.kov}</TableCell>
                  <TableCell className="px-2 lg:px-6 py-3 overflow-hidden">
                    <a
                      href={reg.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-1 w-full max-w-full"
                    >
                      <span className="truncate hidden sm:block">{reg.name}</span>
                      <span className="sm:hidden font-bold">RT</span>
                      <ExternalLink className="h-3 w-3 opacity-50 shrink-0" />
                    </a>
                  </TableCell>
                  <TableCell className="px-2 lg:px-6 py-3 font-mono text-[10px] sm:text-xs truncate text-right lg:text-left">{reg.revisionDate}</TableCell>
                  <TableCell className="px-2 lg:px-6 py-3 text-center text-[11px] text-slate-500 hidden md:table-cell truncate">
                    {reg.deadlineDays || "—"}
                  </TableCell>
                  <TableCell className="px-2 lg:px-6 py-3 text-center text-[11px] text-slate-500 hidden xl:table-cell truncate">
                    {reg.processingDays || "—"}
                  </TableCell>
                  <TableCell className="px-2 lg:px-6 py-3 lg:text-right">
                    <Link
                      to={`/process/${reg.id}`}
                      className="inline-flex items-center justify-center bg-blue-600 text-white w-7 h-7 rounded-sm hover:bg-blue-700 transition-colors shrink-0"
                      title="Protsess"
                    >
                      <Info className="h-4 w-4" />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {processedRegulations.length === 0 && (
            <div className="text-center py-20 text-slate-400 italic text-sm">
              Tulemusi ei leitud.
            </div>
          )}
        </div>
        
        <div className="p-3 border-t border-slate-100 bg-slate-50/50 flex justify-center text-[10px] font-medium text-slate-400 uppercase tracking-widest">
           Kuvatakse {processedRegulations.length} / {regulations.length} omavalitsusest
        </div>
      </div>
    </section>
  );
}
