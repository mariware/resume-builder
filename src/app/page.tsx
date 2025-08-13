import Image from "next/image";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Sidebar } from "../../components/sidebar";
import { ProfileSection } from "../../components/sections/ProfileSection";

export default function Home() {
  return (
    <div className="font-urbanist w-full h-full max-w-7xl justify-center mx-auto flex flex-row px-6">
      <Sidebar className="hidden lg:flex" />
      <main className="flex w-full flex-col sm:items-start border-x border-x-foreground/10 lg:border-x-0">
        <div className="h-[calc(100vh-124px)] overflow-y-auto w-full [scrollbar-gutter:stable]">
          <ProfileSection />
        </div>
        <div className="h-fit flex justify-between items-center py-4 text-sm border-t border-t-foreground/10 w-full px-6">
          <Button>Prev</Button>
          <Button>Next</Button>
        </div>
      </main>
      <div className="hidden lg:flex border-l border-l-foreground/10 w-full bg-foreground/10" />
    </div>
  );
}
