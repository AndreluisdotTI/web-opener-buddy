import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import IndexPage from "./pages/Index";

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", textAlign: "center" }}>
      <div>
        <h1 style={{ fontSize: "3rem", fontWeight: 700 }}>404</h1>
        <p>Página não encontrada</p>
        <a href="/" style={{ color: "#2563eb", textDecoration: "underline" }}>Voltar ao início</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
