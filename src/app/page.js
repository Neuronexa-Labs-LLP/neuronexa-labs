import Home10 from "@/components/layout/main/Home10";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <Home10 />
        <ThemeController />
      </main>
    </PageWrapper>
  );
}
