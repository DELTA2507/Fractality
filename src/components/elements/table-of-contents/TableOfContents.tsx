import { useEffect, useState } from "react";
import "./TableOfContents.css";

export default function TableOfContents() {
  const [links, setLinks] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("h2, h3"));

    setLinks(
      headings.map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
      }))
    );
  }, []);

  if (links.length === 0) return null;

  return (
    <nav className="toc">
      <h3 className="toc-title">Tabla de Contenidos</h3>

      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="toc-link"
        >
          {link.text}
        </a>
      ))}
    </nav>
  );
}