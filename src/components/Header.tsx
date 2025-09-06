import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Header.scss'
import {Link} from "react-router-dom";


type HeaderProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {

  return (
    <header className="catalog-header">
      <Link to="/">
        <h1 className="catalog-title">Кинополка</h1>
      </Link>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          className="catalog-input"
          type="text"
          placeholder="Поиск фильмов ..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <nav className="catalog-nav">
        <button className="favorites-btn">Избранное (1)</button>
        <button className="settings-btn">Настройки</button>
      </nav>
    </header>
  );
};