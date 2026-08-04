import { Link } from 'react-router-dom';

function EntryLink({ href, external, className, children }) {
  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener">
        {children}
      </a>
    );
  }
  return (
    <Link className={className} to={href}>
      {children}
    </Link>
  );
}

export function Entry({
  headingLevel = 'h3',
  title,
  href,
  external,
  note,
  stack,
  thumb,
  links = [],
  state,
}) {
  // JSX only treats an identifier as a dynamic tag name when it is capitalised.
  const Heading = headingLevel;

  return (
    <article className="entry">
      <div className="entry-body">
        <Heading className="entry-title">
          {href ? (
            <EntryLink href={href} external={external}>
              {title}
            </EntryLink>
          ) : (
            title
          )}
        </Heading>

        <p className="entry-note">{note}</p>

        <ul className="stack">
          {stack.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>

        {thumb && (
          <EntryLink className="thumb entry-media" href={thumb.href} external={thumb.external}>
            <img
              src={thumb.src}
              width={1600}
              height={1000}
              loading="lazy"
              decoding="async"
              alt={thumb.alt}
            />
          </EntryLink>
        )}
      </div>

      <p className="entry-links">
        {state ? (
          <span className="entry-state">{state}</span>
        ) : (
          links.map((link) => (
            <EntryLink key={link.label} href={link.href} external={link.external}>
              {link.label}
            </EntryLink>
          ))
        )}
      </p>
    </article>
  );
}
