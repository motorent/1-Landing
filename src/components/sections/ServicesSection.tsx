import { ArrowRight, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { services, siteImages } from "@/data/siteData";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3">Наши услуги</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Полный спектр услуг по ремонту</h2>
          <p className="text-muted-foreground">
            Ремонтируем компьютеры и ноутбуки всех брендов. От замены термопасты
            до сложной пайки материнских плат.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-all hover:border-primary/30 relative overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-primary">от {service.priceFrom}</Badge>
                </div>
                <CardTitle className="text-lg mt-3">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:bg-transparent group-hover:gap-2 transition-all" asChild>
                  <a href="#booking">
                    Заказать <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden border-0 shadow-md">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img src={siteImages.repairShop} alt="Мастерская" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Не нашли нужную услугу?</h3>
              <p className="text-muted-foreground mb-6">
                Мы решаем любые проблемы с компьютерной техникой — от настройки принтера
                до восстановления серверов. Свяжитесь с нами и мы поможем.
              </p>
              <div className="space-y-3 mb-6">
                {["Ремонт любой сложности", "Все бренды и модели", "Оригинальные запчасти", "Срочный выезд"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-accent" /> {item}
                  </div>
                ))}
              </div>
              <Separator className="mb-6" />
              <Button size="lg" className="w-fit" asChild>
                <a href="#contacts">Получить консультацию <ArrowRight className="h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;
