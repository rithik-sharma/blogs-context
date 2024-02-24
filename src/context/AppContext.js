import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ childern }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
}
