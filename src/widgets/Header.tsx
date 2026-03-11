import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useFavoriteStore } from "@/features/auth/favorites/store";

function Header() {
  const navigate = useNavigate();
  const { favorites } = useFavoriteStore();
  const token = localStorage.getItem("token");

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-border">
      <Link to="/" className="text-xl font-bold">
        CryptoDashboard
      </Link>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>⭐</span>
          <span>{favorites.length} избранных</span>
        </div>
        {token ? (
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
