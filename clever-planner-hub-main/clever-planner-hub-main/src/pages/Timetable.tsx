import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Plus, Calendar as CalendarIcon } from "lucide-react";
import Navbar from "@/components/Navbar";

interface TimeSlot {
  time: string;
  subject: string;
  type: "study" | "break" | "assignment";
  duration: string;
}

const Timetable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const currentDay = "Monday";

  const schedule: TimeSlot[] = [
    { time: "08:00 AM", subject: "Mathematics", type: "study", duration: "1h 30m" },
    { time: "09:30 AM", subject: "Break", type: "break", duration: "15m" },
    { time: "09:45 AM", subject: "Physics", type: "study", duration: "1h 30m" },
    { time: "11:15 AM", subject: "Lunch Break", type: "break", duration: "45m" },
    { time: "12:00 PM", subject: "Chemistry Lab", type: "assignment", duration: "2h" },
    { time: "02:00 PM", subject: "English Literature", type: "study", duration: "1h" },
    { time: "03:00 PM", subject: "Break", type: "break", duration: "15m" },
    { time: "03:15 PM", subject: "History Essay", type: "assignment", duration: "1h 30m" },
    { time: "04:45 PM", subject: "Free Time", type: "break", duration: "Rest of day" },
  ];

  const typeColors = {
    study: "bg-primary/10 text-primary border-primary/20",
    break: "bg-secondary/10 text-secondary border-secondary/20",
    assignment: "bg-accent/10 text-accent border-accent/20",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Study Timetable</h1>
              <p className="text-muted-foreground">Plan your study sessions effectively</p>
            </div>
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
              <Plus className="w-4 h-4 mr-2" />
              Add Session
            </Button>
          </div>

          {/* Day Selector */}
          <Card className="border-border shadow-sm animate-fade-in">
            <CardContent className="pt-6">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {days.map((day) => (
                  <Button
                    key={day}
                    variant={day === currentDay ? "default" : "outline"}
                    className={day === currentDay ? "bg-primary hover:bg-primary-dark" : ""}
                  >
                    {day.slice(0, 3)}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Today's Schedule */}
          <Card className="border-border shadow-sm animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-primary" />
                {currentDay}'s Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schedule.map((slot, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all bg-card hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2 min-w-[100px]">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">{slot.time}</span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{slot.subject}</h3>
                      <p className="text-sm text-muted-foreground">{slot.duration}</p>
                    </div>

                    <Badge variant="outline" className={typeColors[slot.type]}>
                      {slot.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Summary Stats */}
          <div className="grid md:grid-cols-3 gap-4 animate-fade-in">
            <Card className="border-border shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Study Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">6h</span>
                  <span className="text-sm text-muted-foreground">today</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-accent">2</span>
                  <span className="text-sm text-muted-foreground">pending</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Breaks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-secondary">3</span>
                  <span className="text-sm text-muted-foreground">scheduled</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Timetable;
