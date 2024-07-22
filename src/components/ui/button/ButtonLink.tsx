import { Link } from "react-router-dom";
import { IButtonLinkProps } from "./types";






function ButtonLink({url, textBtn}: IButtonLinkProps) {
  return (
    <Link className="btn btn-primary" to={url}> {textBtn} </Link>
  )
}

export {ButtonLink};