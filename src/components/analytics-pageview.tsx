"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/lib/analytics";

/**
 * Analytics Pageview Tracker
 *
 * This component tracks page views in Google Analytics 4.
 * It automatically tracks the initial page load and subsequent route changes.
 *
 * Usage: Add this component to your root layout.
 */
export function AnalyticsPageview() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      pageview(url);
    }
  }, [pathname, searchParams]);

  return null;
}
