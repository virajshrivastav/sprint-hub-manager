import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogOut, Zap, MapPin, Clock, BarChart3, ArrowRight } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  const getPerformanceBadgeVariant = (score: number) => {
    if (score >= 80) return "success";
    if (score >= 60) return "warning";
    return "destructive";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">BAU Dashboard</h1>
              <p className="text-sm text-muted-foreground">Business Operations</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => navigate("/analytics")} variant="outline" className="gap-2">
              <Zap className="w-4 h-4" />
              View Live Sprints
            </Button>
            <Button onClick={handleSignOut} variant="ghost" className="gap-2">
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Top Performance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Current/Live Drives */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Current / Live Drives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "NCN", score: 85, rank: 1 },
                { name: "MRP", score: 72, rank: 2 },
                { name: "N2R", score: 58, rank: 3 },
              ].map((drive) => (
                <div key={drive.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-muted-foreground">{drive.rank}</span>
                    <span className="font-medium">{drive.name}</span>
                  </div>
                  <Badge variant={getPerformanceBadgeVariant(drive.score)}>
                    {drive.score}%
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* City View */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                City View
              </CardTitle>
              <CardDescription>Performance by City</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Pune", score: 90 },
                { name: "Mumbai", score: 80 },
                { name: "Hyderabad", score: 75 },
                { name: "Bangalore", score: 25 },
              ].map((city) => (
                <div key={city.name} className="flex items-center justify-between">
                  <span className="text-sm">{city.name}</span>
                  <Badge variant={getPerformanceBadgeVariant(city.score)}>
                    {city.score}%
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Zone View */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Zone View
              </CardTitle>
              <CardDescription>Performance by Zone</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "East", score: 70 },
                { name: "North-West", score: 25 },
                { name: "South", score: 60 },
              ].map((zone) => (
                <div key={zone.name} className="flex items-center justify-between">
                  <span className="text-sm">{zone.name}</span>
                  <Badge variant={getPerformanceBadgeVariant(zone.score)}>
                    {zone.score}%
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* KAM View */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">KAM View</CardTitle>
              <CardDescription>Key Account Managers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Shiv", score: 50 },
                { name: "Amdeep", score: 70 },
                { name: "Shrawani", score: 70 },
                { name: "Rutuja", score: 20 },
              ].map((kam) => (
                <div key={kam.name} className="flex items-center justify-between">
                  <span className="text-sm">{kam.name}</span>
                  <Badge variant={getPerformanceBadgeVariant(kam.score)}>
                    {kam.score}%
                  </Badge>
                </div>
              ))}
              <Button variant="link" className="text-primary p-0 h-auto gap-1">
                View all KAMs
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Past Drives - Smaller */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Past Drives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">Ads Drive</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Clock className="w-4 h-4" />
                      Completed: Jan 15, 2025
                    </div>
                  </div>
                  <Badge variant="success">92%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Drives - Smaller */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Upcoming Drives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">Image Drive</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Clock className="w-4 h-4" />
                      Starting: Feb 20, 2025
                    </div>
                  </div>
                  <Badge variant="outline">Scheduled</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics - Extended */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-base">Performance Metrics</CardTitle>
              <CardDescription>Detailed analytics and insights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Metric Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Owner Live Drives</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>NCN</span>
                      <Badge variant="success" className="text-xs">85%</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>MRP</span>
                      <Badge variant="warning" className="text-xs">72%</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>N2R</span>
                      <Badge variant="destructive" className="text-xs">58%</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">City Wise</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Pune</span>
                      <Badge variant="success" className="text-xs">90%</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Mumbai</span>
                      <Badge variant="success" className="text-xs">80%</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Hyderabad</span>
                      <Badge variant="warning" className="text-xs">75%</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Past Drives</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Ads Drive</span>
                      <Badge variant="success" className="text-xs">92%</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Upcoming Drives</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Image Drive</span>
                      <Badge variant="outline" className="text-xs">Feb 20</Badge>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 space-y-1">
                  <p className="text-sm text-muted-foreground">Performance Metrics</p>
                  <p className="text-xs text-muted-foreground">Registered drivers data insights</p>
                </div>
              </div>

              <Button onClick={() => navigate("/analytics")} variant="outline" size="sm" className="w-full">
                View Full Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Restaurants Section */}
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Restaurants</CardTitle>
              <CardDescription>Registered restaurant locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">No restaurants registered yet</p>
                <Button variant="outline">Add Restaurant</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
