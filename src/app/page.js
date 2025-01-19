import HomeMain from "@/components/layout/main/Home";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <HomeMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
}
