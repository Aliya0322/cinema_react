import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Header.scss'


type HeaderProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {

  return (
    <header className="catalog-header">
      <h1 className="catalog-title">Кинополка</h1>
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
    </header>
  );
};