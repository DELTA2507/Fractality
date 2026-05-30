import "./Breadcrumbs.css";

interface BreadcrumbProps {
  paths: { name: string; href?: string }[];
}

export default function Breadcrumbs({ paths }: BreadcrumbProps) {
  return (
    <nav className="breadcrumbs" aria-label="breadcrumb">
      <ol className="breadcrumbs-list">
        {paths.map((path, idx) => (
          <li key={idx} className="breadcrumbs-item">
            {path.href ? (
              <a href={path.href} className="breadcrumbs-link">
                {path.name}
              </a>
            ) : (
              <span className="breadcrumbs-current">
                {path.name}
              </span>
            )}

            {idx < paths.length - 1 && (
              <span className="breadcrumbs-separator">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}