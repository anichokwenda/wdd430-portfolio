import SkillsCard from "@/components/SkillsCard";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4 text-zinc-600">
        I am a WDD 430 student building modern web apps with Next.js and TypeScript.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <SkillsCard
          title="Frontend"
          description="Modern UI development with React ecosystem"
          skills={["Next.js", "TypeScript", "Tailwind CSS", "React"]}
        />
        <SkillsCard
          title="Backend & Tools"
          description="Building full-stack applications"
          skills={["Node.js", "Supabase", "Git", "Vercel"]}
        />
      </div>
    </main>
  );
}