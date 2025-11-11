import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plus, CheckCircle2, Circle, TrendingUp, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

interface Task {
  id: number;
  title: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
}

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Complete Math Assignment Chapter 5", priority: "high", completed: false },
    { id: 2, title: "Review Biology Notes - Cell Division", priority: "medium", completed: false },
    { id: 3, title: "Prepare for History Quiz on WWII", priority: "high", completed: false },
    { id: 4, title: "Read English Literature - Pages 45-67", priority: "low", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { 
        id: Date.now(), 
        title: newTask, 
        priority: "medium", 
        completed: false 
      }]);
      setNewTask("");
    }
  };

  const completedTasks = tasks.filter(t => t.completed).length;
  const progressPercentage = (completedTasks / tasks.length) * 100;

  const priorityColors = {
    high: "bg-destructive/10 text-destructive border-destructive/20",
    medium: "bg-warning/10 text-warning border-warning/20",
    low: "bg-success/10 text-success border-success/20",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-2">Study Dashboard</h1>
            <p className="text-muted-foreground">Track your tasks and progress</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-4 animate-fade-in">
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Today's Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">{tasks.length}</span>
                  <span className="text-sm text-muted-foreground">total</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-secondary">{completedTasks}</span>
                  <span className="text-sm text-muted-foreground">tasks</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Study Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">4.5</span>
                  <span className="text-sm text-muted-foreground">hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-accent">7</span>
                  <span className="text-sm text-muted-foreground">days</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Card */}
          <Card className="border-border shadow-sm animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Overall Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Task Completion</span>
                  <span className="font-medium text-foreground">{Math.round(progressPercentage)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
              </div>
              <p className="text-sm text-muted-foreground">
                You've completed {completedTasks} out of {tasks.length} tasks today. Keep going!
              </p>
            </CardContent>
          </Card>

          {/* Task List */}
          <Card className="border-border shadow-sm animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Today's Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add Task Input */}
              <div className="flex gap-2">
                <Input 
                  placeholder="Add a new task..." 
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addTask()}
                  className="flex-1"
                />
                <Button onClick={addTask} className="bg-primary hover:bg-primary-dark">
                  <Plus className="w-4 h-4 mr-2" />
                  Add
                </Button>
              </div>

              {/* Task List */}
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div 
                    key={task.id}
                    className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors bg-card"
                  >
                    <button
                      onClick={() => toggleTask(task.id)}
                      className="mt-1 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {task.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                    </button>
                    
                    <div className="flex-1">
                      <p className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {task.title}
                      </p>
                    </div>

                    <Badge variant="outline" className={priorityColors[task.priority]}>
                      {task.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
