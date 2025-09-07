import {Link} from "react-router-dom";
import './NotFoundPage.scss'

export function NotFoundPage () {
  return (
    <div className="not-found-page-container">
      <h1 className='not-found-page-title'>Ошибка 404</h1>
      <p className='not-found-page-descriptions'>Кажется что-то пошло не так!</p>
      <Link to="/">
        <button className="not-found-page-back-btn">
          Вернуться к каталогу
        </button>
      </Link>
    </div>
  )
}