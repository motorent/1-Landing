import { ArrowRight, Phone, Star, Shield, Clock, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { siteImages, stats } from "@/data/siteData";

const heroBadges = [
  { icon: Shield, text: "Гарантия 2 года" },
  { icon: Clock, text: "Ремонт от 30 мин" },
  { icon: Wrench, text: "Бесплатная диагностика" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-circuit-pattern text-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              <Star className="h-3 w-3 mr-1" /> Рейтинг 4.9 — 25 000+ ремонтов
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              Ремонт компьютеров<br />
              <span className="text-gradient-primary">и ноутбуков</span> в Москве
            </h1>
            <p className="text-lg text-white/70 max-w-xl">
              Профессиональная диагностика и ремонт любой техники.
              Выезд на дом в течение часа. Гарантия на все работы до 2 лет.
            </p>
            <div className="flex flex-wrap gap-2">
              {heroBadges.map((b) => (
                <TooltipProvider key={b.text}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge variant="outline" className="bg-white/5 border-white/20 text-white py-2 px-3">
                        <b.icon className="h-4 w-4 mr-1.5 text-primary" /> {b.text}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>{b.text}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" asChild>
                <a href="#booking">
                  Записаться на ремонт <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10" asChild>
                <a href="tel:+74951234567">
                  <Phone className="h-4 w-4" /> Позвонить
                </a>
              </Button>
            </div>
            <Separator className="bg-white/10" />
            <div className="grid grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-primary">{s.value}</div>
                  <div className="text-xs text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <Card className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm">
              <img
                src={siteImages.heroRepair}
                alt="Ремонт ноутбука"
                className="w-full h-[400px] object-cover"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary animate-pulse-glow">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Ремонт в процессе</div>
                    <div className="text-sm text-white/70">Замена матрицы MacBook Pro</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="absolute -top-4 -right-4 p-4 bg-white text-foreground border-0 shadow-xl animate-float hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Гарантия</div>
                  <div className="font-bold text-sm">До 2 лет</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
