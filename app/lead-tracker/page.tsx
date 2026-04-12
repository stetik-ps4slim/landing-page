import { LeadTrackerDashboard } from "@/components/lead-tracker-dashboard";
import { hasSupabaseConfig, sampleLeads, type Lead } from "@/lib/leads";
import { createSupabaseAdminClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

async function getInitialLeads(): Promise<{ leads: Lead[]; isFallback: boolean }> {
  if (!hasSupabaseConfig()) {
    return { leads: sampleLeads, isFallback: true };
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return { leads: (data ?? []) as Lead[], isFallback: false };
  } catch (error) {
    console.error("Lead tracker load failed", error);
    return { leads: sampleLeads, isFallback: true };
  }
}

export default async function LeadTrackerPage() {
  const { leads, isFallback } = await getInitialLeads();

  return <LeadTrackerDashboard initialLeads={leads} isFallback={isFallback} />;
}
