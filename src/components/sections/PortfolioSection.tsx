import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { siteImages } from "@/data/siteData";

const portfolioCategories = [
  {
    value: "laptops",
    label: "Ноутбуки",
    items: [
      { image: siteImages.heroRepair, title: "Замена матрицы MacBook Pro", tag: "Замена экрана", price: "3500 ₽" },
      { image: siteImages.motherboardRepair, title: "Ремонт материнской платы Asus", tag: "BGA-пайка", price: "5000 ₽" },
      { image: siteImages.assemblingLaptop, title: "Замена клавиатуры Lenovo", tag: "Замена", price: "2000 ₽" },
      { image: siteImages.thermalPaste, title: "Чистка и термопаста HP", tag: "Обслуживание", price: "800 ₽" },
    ],
  },
  {
    value: "pcs",
    label: "Компьютеры",
    items: [
      { image: siteImages.gamingPcRgb, title: "Сборка игрового ПК RTX 4080", tag: "Сборка", price: "2500 ₽" },
      { image: siteImages.gamingPcCooling, title: "Установка водяного охлаждения", tag: "Апгрейд", price: "3000 ₽" },
      { image: siteImages.customGamingPc, title: "RGB-подсветка и кастомизация", tag: "Кастом", price: "1500 ₽" },
      { image: siteImages.motherboardFull, title: "Замена материнской платы", tag: "Замена", price: "2000 ₽" },
    ],
  },
  {
    value: "data",
    label: "Данные",
    items: [
      { image: siteImages.hardDrives, title: "Восстановление с HDD", tag: "Восстановление", price: "1500 ₽" },
      { image: siteImages.ssdHdd, title: "Перенос данных на SSD", tag: "Миграция", price: "800 ₽" },
      { image: siteImages.brokenScreen3, title: "Спасение данных с разбитого", tag: "Экстренно", price: "2500 ₽" },
      { image: siteImages.circuitBoard, title: "Восстановление после залития", tag: "Сложный", price: "4000 ₽" },
    ],
  },
  {
    value: "screens",
    label: "Экраны",
    items: [
      { image: siteImages.brokenScreen1, title: "Замена разбитого экрана Dell", tag: "Замена", price: "3500 ₽" },
      { image: siteImages.brokenScreen2, title: "Ремонт шлейфа матрицы Acer", tag: "Ремонт", price: "1200 ₽" },
      { image: siteImages.laptopInternal, title: "Замена IPS-матрицы", tag: "Апгрейд", price: "4000 ₽" },
      { image: siteImages.brokenScreen3, title: "Восстановление после удара", tag: "Ремонт", price: "2800 ₽" },
    ],
  },
];

const PortfolioSection = () => {
  const [tab, setTab] = useState("laptops");
  const activeCategory = portfolioCategories.find(c => c.value === tab) || portfolioCategories[0];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="secondary" className="mb-3">Портфолио</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Наши работы</h2>
          <p className="text-muted-foreground">Реальные ремонты с фотографиями до и после.</p>
        </div>

        <Breadcrumb className="mb-6 justify-center">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#hero">Главная</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="#services">Услуги</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Портфолио</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="flex flex-wrap h-auto mb-8">
            {portfolioCategories.map((cat) => (
              <TabsTrigger key={cat.value} value={cat.value}>{cat.label}</TabsTrigger>
            ))}
          </TabsList>

          {portfolioCategories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.items.map((item) => (
                  <Card key={item.title} className="group overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative overflow-hidden h-48">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <Badge className="absolute top-3 left-3 bg-primary/90">{item.tag}</Badge>
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2">{item.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">от</span>
                        <span className="font-bold text-primary">{item.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <a href="#booking">Записаться на ремонт</a>
          </Button>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-3">
          Показано 16 из 25 000+ выполненных ремонтов
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
