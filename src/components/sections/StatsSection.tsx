import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteImages, stats } from "@/data/siteData";

const StatsSection = () => {
  return (
    <section id="stats" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden">
          <img src={siteImages.workspace} alt="Рабочее место" className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80 flex items-center">
            <div className="p-8 lg:p-16 text-white w-full">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">Достижения</Badge>
              <h2 className="text-2xl lg:text-3xl font-bold mb-8 max-w-lg">
                Цифры, которым доверяют тысячи клиентов
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <Card key={s.label} className="bg-white/10 border-white/20 backdrop-blur-sm">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">{s.value}</div>
                      <div className="text-sm text-white/80">{s.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
