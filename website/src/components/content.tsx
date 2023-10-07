const Content = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
        <div className="flex flex-row items-center justify-between bg-gray-400 w-full h-full min-h-screen">
            <div className="flex flex-col items-center h-full w-20 bg-red-50">

            </div>
            {children}
        </div>
    )
}

export default Content