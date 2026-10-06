function PageContainer({ as: Element = 'div', className = '', children, ...props }) {
  return <Element className={`section-wrap ${className}`.trim()} {...props}>{children}</Element>;
}

export default PageContainer;
