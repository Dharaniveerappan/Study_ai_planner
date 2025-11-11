import { Button } from "@/components/ui/button";
import { Brain, Calendar, MessageSquare, LayoutDashboard } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
            <Brain className="w-6 h-6 text-primary" />
            <span>StudyMate AI</span>
          </NavLink>
          
          <div className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/dashboard" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </NavLink>
            <NavLink 
              to="/timetable" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              <Calendar className="w-4 h-4" />
              <span>Timetable</span>
            </NavLink>
            <NavLink 
              to="/ai-chat" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              <span>AI Chat</span>
            </NavLink>
          </div>

          <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
