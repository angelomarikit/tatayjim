import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { InquiryType } from "../data/site";

type SiteContextValue = {
  inquiryType: InquiryType;
  productNote: string;
  activeProductId: string | null;
  setInquiryType: (type: InquiryType) => void;
  setInquiry: (type: InquiryType, productNote?: string) => void;
  openProduct: (id: string) => void;
  closeProduct: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [inquiryType, setInquiryType] = useState<InquiryType>("General Inquiry");
  const [productNote, setProductNote] = useState("");
  const [activeProductId, setActiveProductId] = useState<string | null>(null);

  const value = useMemo<SiteContextValue>(
    () => ({
      inquiryType,
      productNote,
      activeProductId,
      setInquiryType,
      setInquiry: (type, note = "") => {
        setInquiryType(type);
        setProductNote(note);
        setActiveProductId(null);
        window.setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 30);
      },
      openProduct: (id) => setActiveProductId(id),
      closeProduct: () => setActiveProductId(null),
    }),
    [activeProductId, inquiryType, productNote],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) throw new Error("useSite must be used within SiteProvider");
  return value;
}
