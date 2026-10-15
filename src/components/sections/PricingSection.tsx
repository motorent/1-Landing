import { Check, Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { pricingPlans } from "@/data/siteData";

const PricingSection = () => {
  const [express, setExpress] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="secondary" className="mb-3">Тарифы</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Прозрачные цены</h2>
          <p className="text-muted-foreground">Выберите подходящий тариф. Диагностика — всегда бесплатно.</p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <Label htmlFor="express-mode" className="text-sm">Стандартное обслуживание</Label>
            <Switch id="express-mode" checked={express} onCheckedChange={setExpress} />
            <Label htmlFor="express-mode" className="text-sm font-medium text-primary">Срочный ремонт (+30%)</Label>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => {
            const numericPrice = parseInt(plan.price.replace(/\D/g, ""));
            const finalPrice = express ? Math.round(numericPrice * 1.3) : numericPrice;

            return (
              <Card
                key={plan.name}
                className={
                  plan.popular
                    ? "border-primary shadow-xl relative scale-[1.02]"
                    : "hover:shadow-md transition-shadow"
                }
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    <Star className="h-3 w-3 mr-1" /> Популярный
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-3">
                    <span className="text-3xl font-extrabold">{finalPrice.toLocaleString()} ₽</span>
                    <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <Separator />
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <a href="#booking">
                      Выбрать тариф <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
