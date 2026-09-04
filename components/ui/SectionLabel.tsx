type SectionLabelProps = {
  children: React.ReactNode;
  as?: "h2" | "p";
  id?: string;
};

export function SectionLabel({ children, as: Tag = "h2", id }: SectionLabelProps) {
  return (
    <Tag className="section-label" id={id}>
      {children}
    </Tag>
  );
}
