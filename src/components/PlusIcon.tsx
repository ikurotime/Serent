export const PlusIcon = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  label,
  ...props
}: {
  fill?: string;
  filled?: boolean;
  size?: string;
  height?: string;
  width?: string;
  label?: string;
}) => {
  return (
    <svg
      width={size || width || 21}
      height={size || height || 21}
      viewBox="0 0 24 24"
      fill={filled ? fill : 'none'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        stroke={fill}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 19.257812 8.660156 L 12.519531 8.660156 L 12.519531 1.929688 C 12.519531 0.863281 11.660156 0 10.59375 0 C 9.53125 0 8.671875 0.863281 8.671875 1.929688 L 8.671875 8.664062 L 1.929688 8.664062 C 0.867188 8.664062 0 9.53125 0 10.59375 C 0 11.125 0.214844 11.613281 0.5625 11.960938 C 0.914062 12.3125 1.394531 12.535156 1.929688 12.535156 L 8.671875 12.535156 L 8.671875 19.261719 C 8.671875 19.792969 8.882812 20.277344 9.230469 20.625 C 9.582031 20.972656 10.0625 21.1875 10.59375 21.1875 C 11.660156 21.1875 12.519531 20.324219 12.519531 19.261719 L 12.519531 12.535156 L 19.257812 12.535156 C 20.324219 12.535156 21.1875 11.660156 21.1875 10.59375 C 21.183594 9.53125 20.324219 8.660156 19.257812 8.660156 Z M 19.257812 8.660156 "
      />
    </svg>
  );
};