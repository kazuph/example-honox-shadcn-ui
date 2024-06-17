import { createClient } from "honox/client";

createClient({
  hydrate: async (elem, root) => {
    try {
      const { hydrateRoot } = await import("react-dom/client");
      hydrateRoot(root, elem);
    } catch (error) {
      console.error("Error during hydration:", error);
      // エラーハンドリングのロジックをここに追加します
    }
  },
  createElement: async (type: any, props: any) => {
    const { createElement } = await import("react");
    return createElement(type, props);
  },
});
