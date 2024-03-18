export function CustomTextField({
  label,
  placeholder,
  validation,
  error,
  type,
  className,
}) {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <p className={`text-sm ${className}`}>{label}</p>
      <input
        id="email"
        {...validation}
        type={type ? type : "text"}
        placeholder={placeholder}
        className="placeholder:text-[#A09FAA] text-sm/[17px]  xl:px-4 xl:py-4 md:px-4 md:py-4 py-3 px-3 rounded-full border border-solid"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
