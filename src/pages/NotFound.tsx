
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center gradient-bg">
      <div className="glass-card rounded-xl p-8 max-w-lg w-full mx-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-teal">404</h1>
          <p className="text-xl text-foreground mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
