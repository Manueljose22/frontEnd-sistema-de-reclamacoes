import { Link } from "react-router-dom";
import { IButtonLinkProps } from "./types";






function ButtonLink({url, textBtn}: IButtonLinkProps) {
  return (
    <Link className="btn btn-secondary" to={url}> {textBtn} </Link>
  )
}

export {ButtonLink};