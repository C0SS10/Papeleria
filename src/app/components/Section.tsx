interface SectionProps {
  children: React.ReactNode;

}

export const Section: React.FC<SectionProps> = ({children}) => {
  return(
    <section className="max-w-full mx-auto xl:px-20 md:px-2 px-4">
      {children}
    </section>
  )
}