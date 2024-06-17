import { createRoute } from "honox/factory";
import { Button } from "@/components/ui/button";
import Counter from "./$counter";
import Calendar from "./$calendar";

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div>
      <Counter />
      <Button>Click</Button>
      <Calendar />
    </div>,
    { title: name },
  );
});
