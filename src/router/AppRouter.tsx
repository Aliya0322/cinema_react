import { Routes, Route } from "react-router-dom";
import  CatalogPage  from "../pages/CatalogPage";
import { Header } from '../components/Header';
import {useState} from "react";



export default function AppRouter() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <Routes>
        <Route path="/" element={<CatalogPage searchQuery={searchQuery}/>} />
      </Routes>
    </>

  );
}
