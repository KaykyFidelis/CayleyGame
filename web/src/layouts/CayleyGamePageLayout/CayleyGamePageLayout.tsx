import Header from 'src/components/Header/Header'

type CayleyGamePageLayoutProps = {
  children?: React.ReactNode
}

const CayleyGamePageLayout = ({ children }: CayleyGamePageLayoutProps) => {
  return (
    <>
      <Header title={''} />
      <main>{children}</main>
    </>
  )
}

export default CayleyGamePageLayout
