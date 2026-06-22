import React from "react";
import Portfolio from "@/pages/Portfolio";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <TooltipProvider>
      <Portfolio />
    </TooltipProvider>
  );
}

export default App;
