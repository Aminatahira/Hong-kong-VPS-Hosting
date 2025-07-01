import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  Zap,
  Shield,
  Settings,
  Server,
  HardDrive,
  Wifi,
  CheckCircle,
  Star,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Server className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">
                ARZ Host
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="https://arzhost.com/vps/"
                className="text-foreground hover:text-primary transition-colors"
              >
                VPS
              </a>
              <a
                href="https://arzhost.com/region-based-vps/"
                className="text-foreground hover:text-primary transition-colors"
              >
                VPS Region
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Lifetime Web Hosting
              </a>
              <a
                href="https://www.arzhost.com/about-us/"
                className="text-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
            <Button asChild>
              <a href="https://arzhost.com/vps/">Get Started</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            No ICP License Required
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Hong Kong VPS Hosting – Speed, Flexibility & No Red Tape
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Craving powerful server performance that's optimized for Asia and
            the world—without any licensing headaches? Our{" "}
            <strong>Hong Kong VPS Hosting</strong> delivers instant deployment,
            unbeatable flexibility, and blazing-fast connectivity with no ICP
            license required.
          </p>
          <Button size="lg" className="mr-4" asChild>
            <a href="https://arzhost.com/vps/">👉 Launch Your VPS in Minutes</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://arzhost.com/">Learn More About ARZ Host</a>
          </Button>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            See Hong Kong VPS in Action
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/p8qVXz_2mPI"
                title="Hong Kong VPS Hosting Overview"
                className="w-full h-full rounded-lg"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Reasons Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            🚀 Top Reasons to Choose Hong Kong VPS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>🌐 Strategic Asia-Pacific Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Powered by Hong Kong's prime internet exchange infrastructure,
                  your server delivers stellar connectivity across mainland
                  China, Southeast Asia, and the rest of the world.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>⚡ High-Speed Performance with SSD/NVMe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every plan features ultra-fast SSD or NVMe storage and a
                  99.99% uptime SLA—so your site or app stays online and
                  responsive around the clock.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>🛡️ ICP-Free Hosting, Instant Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Skip the red tape—hosting in Hong Kong requires no ICP
                  license, so you can go live instantly without waiting for
                  bureaucratic approval.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>🔧 Root Access & Full Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enjoy total control with root access on every plan. Install
                  your tools, tweak firewall rules, and scale exactly how you
                  want.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            💡 Features Included in Every Plan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⚙️",
                title: "Full Root Access",
                desc: "Total server control from day one",
              },
              {
                icon: "💽",
                title: "SSD / NVMe Storage",
                desc: "Lightning-fast disk I/O for applications",
              },
              {
                icon: "🧩",
                title: "Linux & Windows Support",
                desc: "Ubuntu, CentOS, Debian, Windows Server, and more",
              },
              {
                icon: "🌐",
                title: "IPv4 & IPv6 Included",
                desc: "Future-ready connectivity",
              },
              {
                icon: "🔒",
                title: "DDoS Protection",
                desc: "Server hardening against attacks",
              },
              {
                icon: "📊",
                title: "99.99% Uptime SLA",
                desc: "Guaranteed reliability",
              },
              {
                icon: "👨‍💻",
                title: "24/7 Expert Support",
                desc: "Always here to help in English",
              },
              {
                icon: "⚡",
                title: "Instant Setup",
                desc: "Your VPS is deployed within minutes",
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            💵 Hong Kong VPS Pricing Plans
          </h2>

          {/* Standard VPS Plans */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Standard VPS Plans
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {[
                {
                  name: "Starter VPS",
                  price: "$12.50",
                  cpu: "1 vCore CPU",
                  ram: "2 GB RAM",
                  storage: "20 GB SSD",
                  network: "250 Mbps",
                  desc: "Ideal for small projects or testing servers",
                },
                {
                  name: "Value VPS",
                  price: "$16.00",
                  cpu: "1 vCore CPU",
                  ram: "2 GB RAM",
                  storage: "40 GB SSD",
                  network: "250 Mbps",
                  desc: "Great for simple websites or low-traffic apps",
                },
                {
                  name: "Essential VPS",
                  price: "$34.00",
                  cpu: "2 vCore CPU",
                  ram: "4 GB RAM",
                  storage: "80 GB SSD",
                  network: "500 Mbps",
                  desc: "Perfect for growing businesses, small eCommerce",
                },
                {
                  name: "Comfort VPS",
                  price: "$54.00",
                  cpu: "4 vCore CPU",
                  ram: "8 GB RAM",
                  storage: "160 GB SSD",
                  network: "1 Gbps",
                  desc: "Built for production apps and mid-scale deployments",
                },
                {
                  name: "Elite VPS",
                  price: "$60.00",
                  cpu: "8 vCore CPU",
                  ram: "8–32 GB RAM",
                  storage: "160–640 GB SSD",
                  network: "2 Gbps",
                  desc: "Resource-intensive apps, databases, large-scale platforms",
                },
              ].map((plan, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">
                      {plan.price}
                      <span className="text-sm text-muted-foreground">
                        /month
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {plan.cpu}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {plan.ram}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {plan.storage}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {plan.network}
                      </li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-4">
                      {plan.desc}
                    </p>
                    <Button className="w-full mt-4" asChild>
                      <a href="https://arzhost.com/vps/">Choose Plan</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* HH Series */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              🏋️‍♂️ High-Performance HH Series
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  name: "HH 1",
                  price: "$9.50",
                  cores: "1 AMD EPYC Milan core",
                  ram: "2 GB RAM",
                  storage: "10 GB SSD",
                  network: "1 Gbps & 1 TB bandwidth",
                  desc: "Entry-level high-performance option",
                },
                {
                  name: "HH 2",
                  price: "$17.00",
                  cores: "2 AMD EPYC Milan cores",
                  ram: "4 GB RAM",
                  storage: "20 GB SSD",
                  network: "1 Gbps & 2 TB bandwidth",
                  desc: "For heavier usage and swift multitasking",
                },
                {
                  name: "HH 3",
                  price: "$36.00",
                  cores: "2 AMD EPYC Milan cores",
                  ram: "8 GB RAM",
                  storage: "35 GB SSD",
                  network: "1 Gbps & 4 TB bandwidth",
                  desc: "Perfect for data-heavy workloads",
                },
              ].map((plan, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">
                      {plan.price}
                      <span className="text-sm text-muted-foreground">
                        /month
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {plan.cores}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {plan.ram}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {plan.storage}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {plan.network}
                      </li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-4">
                      {plan.desc}
                    </p>
                    <Button className="w-full mt-4" asChild>
                      <a href="https://arzhost.com/vps/">Order Now</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CB Series */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">
              🛠️ Custom CB-Series VPS
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "CB Starter",
                  price: "$76.00",
                  specs: "4 vCore • 8 GB RAM • 50 GB NVMe or 200 GB SSD",
                },
                {
                  name: "CB Value",
                  price: "$86.00",
                  specs: "6 vCore • 16 GB RAM • 100 GB NVMe or 400 GB SSD",
                },
                {
                  name: "CB Essential",
                  price: "$101.00",
                  specs: "8 vCore • 30 GB RAM • 200 GB NVMe or 800 GB SSD",
                },
                {
                  name: "CB Comfort",
                  price: "$131.00",
                  specs: "10 vCore • 60 GB RAM • 400 GB NVMe or 1.6 TB SSD",
                },
              ].map((plan, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">
                      {plan.price}
                      <span className="text-sm text-muted-foreground">
                        /month
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{plan.specs}</p>
                    <Button className="w-full mt-4" asChild>
                      <a href="https://arzhost.com/vps/">Configure</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            🎯 Who Should Choose Hong Kong VPS?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global eCommerce Sites",
                desc: "Low-latency access for Asian shoppers",
              },
              {
                title: "VPN & Proxy Servers",
                desc: "Fast, censorship-free connection points",
              },
              {
                title: "Developers & Agencies",
                desc: "Ideal for client projects and staging",
              },
              {
                title: "SaaS Platforms",
                desc: "Scalable and globally accessible infrastructure",
              },
              {
                title: "Content Creators",
                desc: "Serve regional and international audiences easily",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            💬 Customer Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "We switched to Hong Kong VPS for its speed and simplicity—no pesky ICP delays. Our site loads super fast across Asia!",
                author: "Yuki Wong",
                title: "Online Store Owner",
              },
              {
                quote:
                  "Ideal for our VPN service. Setup was minutes, speeds are excellent, and support is always responsive.",
                author: "Shoaib Malik",
                title: "Security Engineer",
              },
              {
                quote:
                  "Great uptime and performance. SSD storage with instant deployment makes it perfect for dev work.",
                author: "Rajiv Sharma",
                title: "App Developer",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            ❓ Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Do I need an ICP license for Hong Kong hosting?",
                a: "No—Hong Kong VPS doesn't require ICP, so you can launch immediately without legal delays.",
              },
              {
                q: "How fast is the setup process?",
                a: "Your VPS is provisioned instantly—no waiting, no approvals required.",
              },
              {
                q: "Can I scale the server later?",
                a: "Absolutely! Upgrade CPU, RAM, or storage anytime, preserving your setup and uptime.",
              },
              {
                q: "Is technical support available in English?",
                a: "Yes—24/7 English-speaking support staff are ready to assist you whenever needed.",
              },
              {
                q: "Are backups included?",
                a: "Optional backup services are available—weekly snapshots and easy restore are just a click away.",
              },
              {
                q: "What OS options do you offer?",
                a: "Ubuntu, Debian, CentOS, AlmaLinux, and Windows Server versions are all supported.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">�� Ready to Start?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Host smart, scale globally—without licensing hurdles. Choose your
            perfect <strong>Hong Kong VPS</strong> plan and be online in
            minutes.
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://arzhost.com/vps/">👉 Get Started Now</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.arzhost.com/contact-us/">
                Chat with Support
              </a>
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-90">
            🛡️ SSD/NVMe | ⚙️ Instant Deployment | 💬 24/7 Support | 💳 Flexible
            Billing
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Server className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">ARZ Host</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Professional <strong>VPS hosting Hong Kong</strong> solutions
                with no ICP requirements and instant deployment.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 (631) 594-8060</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  <a
                    href="https://arzhost.com/"
                    className="text-primary hover:underline"
                  >
                    arzhost.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="https://arzhost.com/vps/"
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    VPS <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/region-based-vps/"
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    VPS Region <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    Lifetime Web Hosting{" "}
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="https://www.arzhost.com/about-us/"
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    About Us <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/contact-us/"
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    Contact Us <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="https://www.arzhost.com/terms-conditions/"
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    Terms and Conditions{" "}
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/privacy-policy/"
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    Privacy Policy <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/disclaimer/"
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    Disclaimer <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-muted-foreground">
            <p>
              &copy; 2024 ARZ Host. All rights reserved. | Professional Hong
              Kong VPS hosting solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
