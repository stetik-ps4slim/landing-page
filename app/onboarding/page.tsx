import type { Metadata } from "next";
import { ConsultationIntakeApp } from "@/components/consultation-intake-app";

export const metadata: Metadata = {
  title: "Upper Notch Coaching Onboarding",
  description:
    "Client onboarding form for goals, schedule, training background, health screening, and coaching sign-off."
};

export default function OnboardingPage() {
  return <ConsultationIntakeApp />;
}
