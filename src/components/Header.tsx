import { Upload, Sparkles, LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export function Header() {
  const { user, isAdmin, signOut } = useAuth();

  return (
    <header className="relative z-20 w-full">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
              <Upload className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
                LekkaWrzuta
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              </h1>
              <p className="text-xs text-muted-foreground">Wrzuć plik, wyślij link</p>
            </div>
          </a>

          <div className="flex items-center gap-3">
            {/* Auth */}
            {user ? (
              <div className="flex items-center gap-2">
                {isAdmin && (
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full border border-primary/30">
                    Admin
                  </span>
                )}
                <span className="text-sm text-muted-foreground hidden sm:block">
                  {user.email}
                </span>
                <Button
                  onClick={signOut}
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Wyloguj
                </Button>
              </div>
            ) : (
              <a href="#/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <LogIn className="w-4 h-4 mr-1" />
                  Zaloguj się
                </Button>
              </a>
            )}

            {/* LekkaWrzuta Button */}
            <a href="/">
              <Button
                className="rounded-full h-10 px-5 bg-primary hover:bg-primary/80 text-primary-foreground font-medium flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              >
                <Upload className="w-4 h-4" />
                LekkaWrzuta
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
