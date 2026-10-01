"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AudioControl from "@/components/AudioControl";
import Cover from "@/components/Cover";
import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import Details from "@/components/sections/Details";
import Program from "@/components/sections/Program";
import FamilyNote from "@/components/sections/FamilyNote";
import Closing from "@/components/sections/Closing";

export default function Home() {
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleOpen = useCallback(() => {
    if (opening) return;
    setOpening(true);
  }, [opening]);

  return (
    // عالديسكتوب: بطاقة بعرض موبايل بنص الشاشة، عالموبايل: كامل الشاشة
    <main className="min-h-dvh w-full flex items-center justify-center overflow-hidden bg-[#ecdccf]">
      <div
        className="relative h-dvh shadow-2xl shadow-ink/20 overflow-hidden bg-blush"
        style={{ width: "min(100vw, 420px)" }}
      >
        <AudioControl play={opening} />

        <AnimatePresence>
          {!opened && <Cover key="cover" onOpen={handleOpen} onOpened={() => setOpened(true)} />}
        </AnimatePresence>

        {opened && (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="snap-container"
          >
            <Hero />
            <Countdown />
            <Details />
            <Program />
            <FamilyNote />
            <Closing />
          </motion.div>
        )}
      </div>
    </main>
  );
}
