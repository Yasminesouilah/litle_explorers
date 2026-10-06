function Select({ label, id, children, ...props }) {
  return (
    <label htmlFor={id}>
      {label}
      <select id={id} {...props}>{children}</select>
    </label>
  );
}

export default Select;
