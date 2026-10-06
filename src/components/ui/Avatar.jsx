function Avatar({ src, name, size = 'medium' }) {
  const initials = name.split(/\s+/).map((part) => part[0]).slice(0, 2).join('').toUpperCase();
  return src
    ? <img className={`avatar avatar-${size}`} src={src} alt={name} />
    : <span className={`avatar avatar-${size} avatar-fallback`} aria-label={name}>{initials}</span>;
}

export default Avatar;
