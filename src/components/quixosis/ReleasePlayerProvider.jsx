import { createContext, useContext, useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import ReleaseDialog from "@/components/quixosis/ReleaseDialog";

const ReleasePlayerContext = createContext(null);

export function useReleasePlayer() {
  return useContext(ReleasePlayerContext);
}

export default function ReleasePlayerProvider({ children }) {
  const [release, setRelease] = useState(null);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => { setOpen(false); }, [pathname]);

  function showRelease(nextRelease) {
    setRelease((current) => current?.albumId === nextRelease.albumId ? current : nextRelease);
    setOpen(true);
  }

  return (
    <ReleasePlayerContext.Provider value={{ showRelease }}>
      {children}
      {release && <ReleaseDialog release={release} open={open} onOpenChange={setOpen} />}
    </ReleasePlayerContext.Provider>
  );
}