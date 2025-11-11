import { Button } from "@/components/ui/button";
import { Brain, Calendar, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-study.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Study Smarter with
              <span className="text-primary"> AI-Powered</span> Planning
            </h1>
            <p className="text-xl text-muted-foreground">
              Your personal AI study assistant that helps you organize tasks, track progress, 
              and achieve your academic goals with intelligent recommendations.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground"
                onClick={() => navigate("/dashboard")}
              >
                Start Planning
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => navigate("/ai-chat")}
              >
                Try AI Chat
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI Assistant</h3>
                  <p className="text-sm text-muted-foreground">Smart tips</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Auto Schedule</h3>
                  <p className="text-sm text-muted-foreground">Time blocks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Track Progress</h3>
                  <p className="text-sm text-muted-foreground">Stay motivated</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
            <img 
              src={heroImage} 
              alt="Student studying with StudyMate AI" 
              className="relative rounded-3xl shadow-2xl w-full object-cover animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
