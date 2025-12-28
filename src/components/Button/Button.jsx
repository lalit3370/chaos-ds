import './Button.scss';

const VARIANTS = ['primary', 'secondary', 'danger'];
const SIZES = ['sm', 'md', 'lg'];

function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  type = 'button',
  onClick,
}) {
  if (!VARIANTS.includes(variant)) {
    throw new Error(`Invalid Button variant: ${variant}`);
  }

  if (!SIZES.includes(size)) {
    throw new Error(`Invalid Button size: ${size}`);
  }

  const className = [
    'ds-button',
    `ds-button--${variant}`,
    `ds-button--${size}`,
    disabled && 'ds-button--disabled',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
