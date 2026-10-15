import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { processSteps } from "@/data/siteData";

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3">Как мы работаем</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Процесс ремонта — 6 простых шагов</h2>
          <p className="text-muted-foreground">
            Прозрачный процесс от заявки до получения готовой техники. Вы всегда знаете, на каком этапе ваш ремонт.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {processSteps.map((step, i) => (
            <Card key={step.step} className="relative hover:shadow-md transition-shadow group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardContent>
              {i < processSteps.length - 1 && i % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </Card>
          ))}
        </div>

        <Card className="bg-muted/30 border-0">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-semibold text-lg">Отслеживайте статус ремонта онлайн</h3>
                <p className="text-sm text-muted-foreground">Каждый этап ремонта отображается в реальном времени</p>
              </div>
              <Badge className="bg-accent text-accent-foreground">Пример: 4 из 6 шагов</Badge>
            </div>
            <Progress value={66} className="h-3 mb-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Заявка</span>
              <span>Диагностика</span>
              <span>Согласование</span>
              <span className="font-semibold text-primary">Ремонт</span>
              <span>Проверка</span>
              <span>Гарантия</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProcessSection;
