import { useState } from "react";
import { ChevronDown, ChevronUp, Keyboard } from "lucide-react";
import { cn } from "@/lib/utils";

interface MathKeyboardProps {
  onInsert: (text: string) => void;
  className?: string;
}

interface SymbolButton {
  label: string;
  insert: string;
  cursorOffset?: number; // how many chars back from end to place cursor
}

interface SymbolGroup {
  name: string;
  symbols: SymbolButton[];
}

const symbolGroups: SymbolGroup[] = [
  {
    name: "Basic",
    symbols: [
      { label: "√", insert: "√()", cursorOffset: 1 },
      { label: "π", insert: "π" },
      { label: "e", insert: "e" },
      { label: "x²", insert: "x^2" },
      { label: "x³", insert: "x^3" },
      { label: "xⁿ", insert: "^()", cursorOffset: 1 },
      { label: "1/x", insert: "1/()", cursorOffset: 1 },
      { label: "|x|", insert: "|()|", cursorOffset: 2 },
      { label: "±", insert: "±" },
      { label: "≤", insert: "≤" },
      { label: "≥", insert: "≥" },
      { label: "≠", insert: "≠" },
      { label: "∞", insert: "∞" },
    ],
  },
  {
    name: "Exponents & Logs",
    symbols: [
      { label: "exp()", insert: "exp()", cursorOffset: 1 },
      { label: "log()", insert: "log()", cursorOffset: 1 },
      { label: "ln()", insert: "ln()", cursorOffset: 1 },
      { label: "log₁₀()", insert: "log₁₀()", cursorOffset: 1 },
      { label: "10ˣ", insert: "10^()", cursorOffset: 1 },
      { label: "eˣ", insert: "e^()", cursorOffset: 1 },
    ],
  },
  {
    name: "Trig",
    symbols: [
      { label: "sin", insert: "sin()", cursorOffset: 1 },
      { label: "cos", insert: "cos()", cursorOffset: 1 },
      { label: "tan", insert: "tan()", cursorOffset: 1 },
      { label: "sin⁻¹", insert: "sin^(-1)()", cursorOffset: 1 },
      { label: "cos⁻¹", insert: "cos^(-1)()", cursorOffset: 1 },
      { label: "tan⁻¹", insert: "tan^(-1)()", cursorOffset: 1 },
    ],
  },
  {
    name: "Calculus",
    symbols: [
      { label: "d/dx", insert: "d/dx()", cursorOffset: 1 },
      { label: "∫", insert: "∫()", cursorOffset: 1 },
      { label: "∫ₐᵇ", insert: "∫(a,b)()", cursorOffset: 1 },
      { label: "Δ", insert: "Δ" },
      { label: "lim", insert: "lim(x→)()", cursorOffset: 1 },
    ],
  },
  {
    name: "Brackets",
    symbols: [
      { label: "( )", insert: "()", cursorOffset: 1 },
      { label: "[ ]", insert: "[]", cursorOffset: 1 },
      { label: "{ }", insert: "{}", cursorOffset: 1 },
    ],
  },
  {
    name: "Advanced",
    symbols: [
      { label: "i", insert: "i" },
      { label: "Σ", insert: "Σ(n=,)()", cursorOffset: 1 },
      { label: "n!", insert: "!()" , cursorOffset: 1 },
      { label: "nCr", insert: "C(,)", cursorOffset: 2 },
      { label: "nPr", insert: "P(,)", cursorOffset: 2 },
      { label: "→", insert: "→" },
      { label: "·", insert: "·" },
      { label: "×", insert: "×" },
      { label: "÷", insert: "÷" },
    ],
  },
];

export function MathKeyboard({ onInsert, className }: MathKeyboardProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeGroup, setActiveGroup] = useState(0);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-xl bg-muted text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors",
          className
        )}
      >
        <Keyboard className="w-4 h-4" />
        Math Keyboard
        <ChevronUp className="w-3 h-3" />
      </button>
    );
  }

  return (
    <div className={cn("rounded-xl border border-border bg-card overflow-hidden", className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-muted/50 border-b border-border">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Keyboard className="w-4 h-4 text-primary" />
          Math Keyboard
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Group tabs */}
      <div className="flex gap-1 px-2 py-1.5 overflow-x-auto border-b border-border bg-muted/30 scrollbar-hide">
        {symbolGroups.map((group, idx) => (
          <button
            key={group.name}
            onClick={() => setActiveGroup(idx)}
            className={cn(
              "px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors",
              idx === activeGroup
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {group.name}
          </button>
        ))}
      </div>

      {/* Symbols grid */}
      <div className="p-2 flex flex-wrap gap-1.5">
        {symbolGroups[activeGroup].symbols.map((sym) => (
          <button
            key={sym.label}
            onClick={() => onInsert(sym.insert)}
            className="min-w-[2.5rem] h-9 px-2.5 rounded-lg bg-muted/60 border border-border text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary active:scale-95 transition-all"
            title={`Insert ${sym.insert}`}
          >
            {sym.label}
          </button>
        ))}
      </div>
    </div>
  );
}
