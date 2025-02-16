import { api } from "@/utils/api";

export default function Dashboard() {
  const { data } = api.health.get.useQuery();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              apps/web/pages/dashboard/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex flex-col gap-2 text-sm">
          <h2 className="text-center sm:text-left">Status</h2>
          <ul className="list-inside list-disc text-center sm:text-left">
            <li>
              <strong>Node.js:</strong> {data?.nodeVersion ?? "Unknown"}
            </li>
            <li>
              <strong>TRPC:</strong> {data?.trpcVersion ?? "Unknown"}
            </li>
            <li>
              <strong>Database:</strong> {data?.dbVersion ?? "Unknown"}
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
