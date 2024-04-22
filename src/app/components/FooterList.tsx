interface FooterListProps {
  children: React.ReactNode
}

export const FooterList: React.FC<FooterListProps> = ({children}) => {
  return(
    <article className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-2 flex flex-col gap-1">
      {children}
    </article>
  )
}