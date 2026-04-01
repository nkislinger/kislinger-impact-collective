interface SourceTagProps {
  label: string;
}

export default function SourceTag({ label }: SourceTagProps) {
  return (
    <span className="inline-block text-[10px] tracking-wider uppercase border border-border rounded-full px-3 py-1 text-text-light mt-2">
      {label}
    </span>
  );
}
