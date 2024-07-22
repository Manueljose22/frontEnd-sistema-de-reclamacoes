import { BiMenu } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import styles from './Layout.module.css';
import { IHeaderProps } from './interfaces';



function Header({ hideSidebar }: IHeaderProps) {

  return (
    <header className={`${styles.header} container-fluid bg-secondary p-4 text-white d-flex justify-content-between`}>
      <div className="container-btn">
        <button onClick={hideSidebar}><BiMenu className='fs-3' /></button>
      </div>
      <div className='d-flex gap-3 icon-color align-items-center me-3'>
        <p className='m-0 p-0'>Manuel</p>
        <button><FaArrowRight className='fs-5' title='Sair' /></button>
      </div>
    </header>
  )
}

export { Header }