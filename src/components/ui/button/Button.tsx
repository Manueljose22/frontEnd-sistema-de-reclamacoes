import { IButtonProps } from "./types";




function Button({ textBtn }: IButtonProps) {
  return (
    <div >
      <button className="w-100 btn btn-primary"  type={'submit'}>
        {textBtn}
      </button>
    </div>
  )
}

export { Button }