import { FaMagnifyingGlass } from 'react-icons/fa6';
import './Searchbar.scss';

export const Searchbar = () => {
  return (
    <form action="" className='searchbar'>
      <input type="search" placeholder='Buscar en el canal...' />
      <button><FaMagnifyingGlass/></button>
    </form>
  )
}
