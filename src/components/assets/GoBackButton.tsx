"use client";

import { useRouter } from "next/navigation";
import { CarbonChevronLeft } from "@/components/icons/CarbonChevronLeft";

export default function GoBackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/"); // Fallback URL (e.g., home page)
    }
  };

  return (
    <button onClick={handleGoBack} className="w-6 h-6">
      <CarbonChevronLeft />
    </button>
  );
}
