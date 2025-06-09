import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Code2, 
  Zap, 
  Globe, 
  Monitor, 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Github,
  ExternalLink,
  Sparkles,
  Brain,
  MessageSquare,
  Play
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

interface TechBadgeProps {
  name: string;
  version?: string;
  className?: string;
}

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface UseCaseCardProps {
  title: string;
  description: string;
  examples: string[];
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className = "" }) => (
  <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>
    <CardHeader className="pb-4">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
    </CardContent>
  </Card>
);

const TechBadge: React.FC<TechBadgeProps> = ({ name, version, className = "" }) => (
  <Badge variant="secondary" className={`text-xs font-medium ${className}`}>
    {name} {version && <span className="text-muted-foreground ml-1">v{version}</span>}
  </Badge>
);

const StepCard: React.FC<StepCardProps> = ({ step, title, description, icon }) => (
  <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
      {step}
    </div>
    <CardHeader className="pb-4">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <CardTitle className="text-lg pr-12">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
    </CardContent>
  </Card>
);

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description, examples, icon }) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardHeader className="pb-4">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        {examples.map((example, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span>{example}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

function App(): React.JSX.Element {
  const handleGetStarted = (): void => {
    window.open("https://bolt.diy", "_blank");
  };

  const handleViewGithub = (): void => {
    window.open("https://github.com/stackblitz/bolt.new", "_blank");
  };

  const handleLearnMore = (): void => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative container mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Professional React + Tauri Template
              </Badge>
            </div>
            
            {/* Prometheus Logo */}
            <div className="flex justify-center mb-8">
              <img
                src="/logo.png"
                alt="Prometheus AI Platform"
                className="h-16 w-auto object-contain"
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              From Prompt to Production
              <span className="block text-primary mt-2">with Prometheus AI & Bolt.diy</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Skip weeks of boilerplate setup. This professional template gives you a modern React + Tauri
              foundation that works seamlessly with AI-powered development tools like the Prometheus AI platform and Bolt.diy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={handleGetStarted} className="group">
                <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Start Building Now
              </Button>
              <Button variant="outline" size="lg" onClick={handleViewGithub} className="group">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <TechBadge name="React" version="19" />
              <TechBadge name="Vite" version="6" />
              <TechBadge name="Tauri" version="2" />
              <TechBadge name="TypeScript" />
              <TechBadge name="Zustand" />
              <TechBadge name="Zod" />
              <TechBadge name="Shadcn-UI" />
              <TechBadge name="CoPilotKit" />
            </div>

            <div className="text-center">
              <Button variant="ghost" onClick={handleLearnMore} className="group">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why This Template Exists
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Setting up a modern React + Tauri project with proper TypeScript, state management, 
              UI components, and AI integration typically takes weeks. This template gives you 
              everything pre-configured and ready for AI-powered development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 bg-destructive/5 border-destructive/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-destructive flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Without This Template
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Weeks of configuration and setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Complex TypeScript and build tool configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Manual integration of state management and UI libraries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Time spent on boilerplate instead of features</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-green-500/5 border-green-500/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-green-600 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  With This Template
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Start building features immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Production-ready configuration out of the box</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Modern stack with best practices built-in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Perfect for AI-powered development workflows</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Everything You Need, Pre-Configured
            </h2>
            <p className="text-lg text-muted-foreground">
              A carefully curated stack of modern tools and libraries, 
              configured with best practices and ready for AI-powered development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Code2 className="w-6 h-6 text-primary" />}
              title="Modern React 19"
              description="Latest React with concurrent features, server components support, and optimized performance for both web and desktop applications."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-primary" />}
              title="Lightning Fast Vite 6"
              description="Ultra-fast development server with hot module replacement, optimized builds, and seamless TypeScript integration."
            />
            <FeatureCard
              icon={<Monitor className="w-6 h-6 text-primary" />}
              title="Cross-Platform Tauri"
              description="Build native desktop applications from your React code with Rust-powered performance and security."
            />
            <FeatureCard
              icon={<Brain className="w-6 h-6 text-primary" />}
              title="AI-Ready with CoPilotKit"
              description="Pre-integrated AI capabilities for building intelligent features and chatbots directly into your application."
            />
            <FeatureCard
              icon={<Star className="w-6 h-6 text-primary" />}
              title="Beautiful Shadcn-UI"
              description="Professional, accessible UI components built on Radix UI with customizable design system and dark mode support."
            />
            <FeatureCard
              icon={<CheckCircle className="w-6 h-6 text-primary" />}
              title="Type-Safe Everything"
              description="Full TypeScript configuration with Zod validation, ensuring runtime safety and excellent developer experience."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              How It Works with Prometheus AI & Bolt.diy
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience the future of development with natural language programming.
              Simply describe what you want to build, and watch it come to life using the Prometheus AI platform and Bolt.diy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <StepCard
              step={1}
              title="Import Template"
              description="Start with this template in the Prometheus AI platform, Bolt.diy, or clone it locally. All dependencies and configurations are ready to go."
              icon={<Rocket className="w-6 h-6 text-primary" />}
            />
            <StepCard
              step={2}
              title="Describe Your Vision"
              description="Use natural language to describe features, UI components, or entire application flows. The AI understands your intent."
              icon={<MessageSquare className="w-6 h-6 text-primary" />}
            />
            <StepCard
              step={3}
              title="Watch It Build"
              description="See your ideas transform into production-ready code with real-time preview, automatic testing, and deployment options."
              icon={<Play className="w-6 h-6 text-primary" />}
            />
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto p-6 bg-primary/5 border-primary/20">
              <CardContent className="text-center">
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI-Powered Development</h3>
                <p className="text-muted-foreground text-sm">
                  Leverage multiple LLMs, WebContainer technology, and real-time preview 
                  to build full-stack applications through conversation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Perfect For Any Project
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you're building for web, desktop, or both, this template 
              provides the foundation for professional applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <UseCaseCard
              title="Desktop Applications"
              description="Build native desktop apps with web technologies"
              examples={[
                "Productivity tools and utilities",
                "Creative software and editors",
                "Business applications",
                "System monitoring tools"
              ]}
              icon={<Monitor className="w-6 h-6 text-primary" />}
            />
            <UseCaseCard
              title="Web Applications"
              description="Modern web apps with excellent performance"
              examples={[
                "SaaS platforms and dashboards",
                "E-commerce applications",
                "Content management systems",
                "Real-time collaboration tools"
              ]}
              icon={<Globe className="w-6 h-6 text-primary" />}
            />
            <UseCaseCard
              title="MVP Development"
              description="Rapid prototyping and proof of concepts"
              examples={[
                "Startup MVPs and prototypes",
                "Client demos and presentations",
                "Internal tools and automation",
                "AI-powered applications"
              ]}
              icon={<Smartphone className="w-6 h-6 text-primary" />}
            />
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of developers who are building the future with AI-powered development tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" onClick={handleGetStarted} className="group">
                <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Try Prometheus AI & Bolt.diy
              </Button>
              <Button variant="outline" size="lg" onClick={handleViewGithub} className="group">
                <Github className="w-5 h-5 mr-2" />
                Clone Template
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>
                🚀 <strong>Web-first development:</strong> This template works perfectly in browsers and can be enhanced with Tauri for desktop deployment.
              </p>
              <p className="mt-2">
                💡 <strong>AI-native:</strong> Designed specifically for natural language programming and AI-assisted development workflows.
              </p>
              <p className="mt-4 text-xs opacity-75">
                Template created by <strong>Prometheus Agentic Growth Solutions</strong> for the Prometheus AI platform and Bolt.diy ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
