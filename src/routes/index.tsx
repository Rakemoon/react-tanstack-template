import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import reactLogo from "@/assets/react.svg";

const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [count, setCount] = useState<number>(0);
  const addCount = setCount.bind(undefined, count + 1);
  const subCount = setCount.bind(undefined, count - 1);
  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="gap-2 grid grid-cols-4">
        <div className="col-span-4 text-3xl rotate-2 mx-auto mb-2">
          Reusable Template~
        </div>
        <Button onClick={addCount} className="rotate-1.5">
          Add {count}
        </Button>
        <div className="col-span-3 -rotate-1 border rounded-md flex items-center justify-center">
          Edit src/routes.index.tsx
        </div>
        <div className="col-span-3 -rotate-2 border rounded-full bg-secondary flex items-center justify-center p-2">
          React + Vite + Tanstack + Opinionated Eslint{" "}
        </div>
        <Button variant="ghost" className="rotate-2" onClick={subCount}>
          Sub {count}
        </Button>
        <img src="/vite.svg" className="size-20 col-span-2 mx-auto" />
        <img src={reactLogo} className="size-20 col-span-2 mx-auto" />
      </div>
    </div>
  );
}

export { Route };
