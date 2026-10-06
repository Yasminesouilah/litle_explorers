function Card({ as: Element = 'article', className = '', children, ...props }) {
  return <Element className={`content-card ${className}`.trim()} {...props}>{children}</Element>;
}

export default Card;
