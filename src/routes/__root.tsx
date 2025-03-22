import { createRootRoute, Outlet } from "@tanstack/react-router";
// eslint-disable-next-line import/no-extraneous-dependencies
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const Route = createRootRoute({
  component: () => (
    <>
      <main className="bg-background h-screen dark text-foreground relative isolate overflow-hidden">
        <div className="[mask-image:url('cirno.png')] [mask-repeat:no-repeat] bg-blue-300 fixed bottom-0 right-0 h-[600px] w-[300px] -z-10" />
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});

export { Route };
