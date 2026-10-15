import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import Icon from "@/components/ui/icon";
import { advantages, siteImages } from "@/data/siteData";

const advantageDetails: Record<string, string> = {
  Clock: "Среднее время ремонта — 45 минут. Сложные случаи — до 3 дней.",
  BadgeCheck: "Гарантия 3 месяца на ПО, 1 год на компоненты, 2 года на сборку ПК.",
  UserCheck: "Более 25 000 успешных ремонтов с 2012 года. 98% довольных клиентов.",
  Wallet: "Бесплатная диагностика. Фиксируем цену до начала работ в договоре.",
  MapPin: "Выезд по Москве за 60 минут. В области — в день обращения.",
  Headphones: "Горячая линия, чат в Telegram и WhatsApp — отвечаем 24/7.",
};

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3">Почему мы</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-muted-foreground">
            Мы не просто ремонтируем технику — мы заботимся о том, чтобы она работала долго.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {advantages.map((adv) => (
            <HoverCard key={adv.title}>
              <HoverCardTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-all hover:border-primary/30 h-full">
                  <CardContent className="pt-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary mb-4">
                      <Icon name={adv.icon} className="h-7 w-7" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{adv.title}</h3>
                    <p className="text-sm text-muted-foreground">{adv.description}</p>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-72">
                <div className="flex gap-3">
                  <Icon name={adv.icon} className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold mb-1">{adv.title}</h4>
                    <p className="text-xs text-muted-foreground">{advantageDetails[adv.icon] || adv.description}</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <img src={siteImages.labWorkstation} alt="Лаборатория" className="w-full h-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center p-8 lg:p-16">
            <div className="text-white max-w-lg">
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">Современная ремонтная лаборатория</h3>
              <p className="text-white/90 mb-6">
                Оборудование профессионального уровня: BGA-станции, осциллографы,
                микроскопы и антистатические рабочие места.
              </p>
              <Separator className="bg-white/20 mb-6" />
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-2"><Icon name="Cpu" className="h-4 w-4" /> BGA-пайка</span>
                <span className="flex items-center gap-2"><Icon name="Microscope" className="h-4 w-4" /> Микроскопия</span>
                <span className="flex items-center gap-2"><Icon name="Zap" className="h-4 w-4" /> Осциллограф</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
