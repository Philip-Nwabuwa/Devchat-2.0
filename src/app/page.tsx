import { Redis } from "@upstash/redis";

export const revalidate = 0; // disable cache

const redis = new Redis({
  url: "https://eu2-capable-octopus-30343.upstash.io",
  token:
    "AXaHASQgMjVhYTBkYzMtNjU5OC00YmI5LWI5ODYtMDJkNjQwOGNjNTZmMWFiODNiMTJhM2I1NDQzMGJhY2Q1MGNkMmM3ODAyOWM=",
});

export default async function Home() {
  const member = await redis.srandmember<string>("nextjs13");

  return (
    <div>
      <main>
        <h1>Welcome {member}</h1>
        <p>You have been randomly chosen by the redis algorithm.</p>
      </main>
    </div>
  );
}
