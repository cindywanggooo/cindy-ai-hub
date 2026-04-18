import { useEffect, useRef } from "react";

interface DisqusCommentsProps {
  identifier: string;
  title: string;
  url?: string;
}

declare global {
  interface Window {
    DISQUS?: {
      reset: (config: { reload: boolean; config: () => void }) => void;
    };
    disqus_config?: () => void;
  }
}

export default function DisqusComments({ identifier, title, url }: DisqusCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pageUrl = url || window.location.href;
    const pageIdentifier = identifier;

    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          // @ts-ignore
          this.page.identifier = pageIdentifier;
          // @ts-ignore
          this.page.url = pageUrl;
          // @ts-ignore
          this.page.title = title;
        },
      });
    } else {
      window.disqus_config = function () {
        // @ts-ignore
        this.page.url = pageUrl;
        // @ts-ignore
        this.page.identifier = pageIdentifier;
        // @ts-ignore
        this.page.title = title;
      };

      const script = document.createElement("script");
      script.src = "https://cindy-ai-hub.disqus.com/embed.js";
      script.setAttribute("data-timestamp", String(+new Date()));
      script.async = true;
      document.body.appendChild(script);
    }
  }, [identifier, title, url]);

  return (
    <div className="mt-6 pt-6 border-t border-[oklch(1_0_0/8%)]">
      <p className="text-sm font-semibold text-foreground/50 mb-4 uppercase tracking-widest">
        留言討論
      </p>
      <div id="disqus_thread" ref={containerRef} />
    </div>
  );
}
