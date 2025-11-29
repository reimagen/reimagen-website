export default function ToolkitCTA({
  as = 'a',
  href,
  to,
  onClick,
  children,
  className = '',
  colorClass = 'bg-brand-lavender hover:bg-brand-lavender-dark text-black',
  icon = null,
  ...rest
}) {
  const Component = as;
  const content = (
    <span className="inline-flex items-center gap-1">
      {children}
      {icon}
    </span>
  );

  const baseClass = `brand-cta inline-flex items-center justify-center ${colorClass} ${className} transition-transform duration-200 hover:scale-105`.trim();

  if (Component === 'a') {
    return (
      <a href={href} onClick={onClick} className={baseClass} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Component to={to} onClick={onClick} className={baseClass} {...rest}>
      {content}
    </Component>
  );
}
