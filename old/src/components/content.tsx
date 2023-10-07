import Link from "next/link"
import Styles from "../scss/content.module.scss"

const Content = ({
    children,
  }: {
    children: React.ReactNode
  }) => {

    return(
        <div>
          <div>
            <div>
              <Link href="/"/>
              <Link href="/"/>
              <Link href="/"/>
            </div>
          </div>
          {children}
        </div>
    )
}

export default Content