function Button({ as: Element = 'button', variant = 'yellow', size, className = '', children, ...props }) {
  const classes = ['button', `button-${variant}`, size && `button-${size}`, className].filter(Boolean).join(' ');
  return <Element className={classes} {...props}>{children}</Element>;
}

export default Button;
